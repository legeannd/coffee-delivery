import { Trash } from 'phosphor-react'
import traditionalCoffeeImg from '../../../../assets/traditional.png'
import { QuantityInput } from '../../../../components/QuantityInput'
import {
  CoffeeImageAndNameContainer,
  CoffeeItemContainer,
  InnerPaddingContainer,
  RemoveButton,
} from './styles'

export function CoffeeItem() {
  return (
    <CoffeeItemContainer>
      <InnerPaddingContainer>
        <CoffeeImageAndNameContainer>
          <img src={traditionalCoffeeImg} alt="" />
          <div className="title-align">
            <span>Expresso Tradicional</span>
            <div>
              <QuantityInput />
              <RemoveButton>
                <Trash size={16} />
                Remover
              </RemoveButton>
            </div>
          </div>
        </CoffeeImageAndNameContainer>
        <span>R$ 9,90</span>
      </InnerPaddingContainer>
    </CoffeeItemContainer>
  )
}