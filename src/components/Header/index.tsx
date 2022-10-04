import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { ShoppingCart, MapPin } from 'phosphor-react'
import { HeaderContainer, Cart } from './styles'

import logoImage from '../../assets/logo.png'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cart } = useContext(CartContext)

  const cartItems = cart.length
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

          {cartItems > 0 ? (
            <Cart items={cartItems} title="Carrinho de compras" to="/checkout">
              <ShoppingCart size={22} weight="fill" />
              {cartItems > 0 ? <strong>{cartItems}</strong> : null}
            </Cart>
          ) : (
            <Cart items={cartItems} title="Carrinho de compras" to="">
              <ShoppingCart size={22} weight="fill" />
              {cartItems > 0 ? <strong>{cartItems}</strong> : null}
            </Cart>
          )}
        </div>
      </div>
    </HeaderContainer>
  )
}
