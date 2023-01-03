import {
  CoffeeSelectionContainer,
  HeroContainer,
  HomeContainer,
} from './styles'

import coffeeImg from '../../assets/coffee.png'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { CoffeeCard } from './Components/CoffeeCard'

export function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <div className="info">
          <div className="heading">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <div className="items">
            <span>
              <span className="cart">
                <ShoppingCart weight="fill" size={16} />
              </span>
              <span>Compra simples e segura</span>
            </span>
            <span>
              <span className="package">
                <Package weight="fill" size={16} />
              </span>
              <span>Embalagem mantém o café intacto</span>
            </span>
            <span>
              <span className="timer">
                <Timer weight="fill" size={16} />
              </span>
              <span>Entrega rápida e rastreada</span>
            </span>
            <span>
              <span className="coffee">
                <Coffee weight="fill" size={16} />
              </span>
              <span>O café chega fresquinho até você</span>
            </span>
          </div>
        </div>
        <img src={coffeeImg} alt="" />
      </HeroContainer>
      <CoffeeSelectionContainer>
        <h2>Nossos cafés</h2>

        <div className="selection">
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </div>
      </CoffeeSelectionContainer>
    </HomeContainer>
  )
}
