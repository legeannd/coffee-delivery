import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <nav>
        <NavLink to="#" className="location">
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
