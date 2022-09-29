import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  Background,
  Banner,
  CoffeeMenu,
  Content,
  HomeContainer,
  Info,
  Information,
} from './styles'

import bannerImage from '../../assets/coffee-delivery.png'

export function Home() {
  return (
    <HomeContainer>
      <Background />
      <Content>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <Information>
            <Info backgroundColor="yellowDark">
              <span>
                <ShoppingCart weight="fill" />
              </span>
              <span>Compra simples e segura</span>
            </Info>

            <Info backgroundColor="gray">
              <span>
                <Package weight="fill" />
              </span>
              <span>Embalagem mantém o café intacto</span>
            </Info>

            <Info backgroundColor="yellow">
              <span>
                <Timer weight="fill" />
              </span>
              <span>Entrega rápida e rastreada</span>
            </Info>

            <Info backgroundColor="purple">
              <span>
                <Coffee weight="fill" />
              </span>
              <span>O café chega fresquinho até você</span>
            </Info>
          </Information>
        </div>

        <Banner>
          <img
            src={bannerImage}
            alt="Copo branco com detalhes pretos com grãos de café ao lado"
          />
        </Banner>
      </Content>

      <CoffeeMenu>
        <h2>Nossos cafés</h2>
      </CoffeeMenu>
    </HomeContainer>
  )
}
