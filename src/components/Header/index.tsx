import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

import logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cartItems } = useContext(CartContext)

  const cartItemsAmount = cartItems.reduce((acc, item) => {
    return acc + item.amount
  }, 0)

  return (
    <HeaderContainer cartItemsAmount={cartItemsAmount}>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <nav>
        <NavLink to="#">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </NavLink>
        <NavLink to="/checkout" className="cart">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
