import { ShoppingCart, MapPin, Moon, SunDim } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

import logo from '../../assets/logo.svg'
import logoDark from '../../assets/logo-dark.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { ThemeContext } from '../../contexts/ThemeContext'

export function Header() {
  const { cartItems, address } = useContext(CartContext)
  const { theme, switchTheme } = useContext(ThemeContext)

  const cartItemsAmount = cartItems.reduce((acc, item) => {
    return acc + item.amount
  }, 0)

  const currentLogo = theme === 'light' ? logo : logoDark

  return (
    <HeaderContainer cartItemsAmount={cartItemsAmount}>
      <NavLink to="/">
        <img src={currentLogo} alt="" />
      </NavLink>

      <nav>
        <NavLink to="#" onClick={switchTheme}>
          {theme === 'light' ? (
            <Moon size={22} weight="fill" />
          ) : (
            <SunDim size={22} weight="fill" />
          )}
        </NavLink>
        <NavLink to="#">
          <MapPin size={22} weight="fill" />
          {address.localidade ? (
            <span>
              {address.localidade}, {address.uf}
            </span>
          ) : (
            ''
          )}
        </NavLink>
        <NavLink to="/checkout" className="cart">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
