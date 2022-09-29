import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { HeaderContainer, Cart } from './styles'

import logoImage from '../../assets/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img src={logoImage} alt="" />
        </NavLink>
        <div>
          <span>
            <MapPin size={22} weight="fill" /> Porto Alegre, RS
          </span>

          <Cart to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </div>
      </div>
    </HeaderContainer>
  )
}
