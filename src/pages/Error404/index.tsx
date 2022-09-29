import { NavLink } from 'react-router-dom'
import { Error404Container } from './styles'

import glassImage from '../../assets/glass-coffee-404.png'

export function Error404() {
  return (
    <Error404Container>
      <div>
        <img src={glassImage} alt="" />
      </div>
      <div>
        <h1>404...</h1>
        <strong>Parece que aqui não tem café!</strong>

        <p>
          Acho que você se perdeu.
          <br />A página que você requisitou não foi encontrada.
        </p>
        <NavLink to="/">Retornar à home</NavLink>
      </div>
    </Error404Container>
  )
}
