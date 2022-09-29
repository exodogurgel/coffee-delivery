import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  Background,
  Banner,
  CoffeeList,
  CoffeeMenu,
  Content,
  HomeContainer,
  Information,
} from './styles'

import bannerImage from '../../assets/coffee-delivery.png'
import { CoffeeCard } from './components/CoffeeCard'
import { InfoWithIcon } from './components/InfoWithIcon'

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
            <InfoWithIcon
              bgIcon="yellowDark"
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
            />

            <InfoWithIcon
              bgIcon="gray"
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
            />

            <InfoWithIcon
              bgIcon="yellow"
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
            />

            <InfoWithIcon
              bgIcon="purple"
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
            />
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
        <CoffeeList>
          <CoffeeCard />
        </CoffeeList>
      </CoffeeMenu>
    </HomeContainer>
  )
}
