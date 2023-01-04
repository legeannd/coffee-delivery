import { Bank, CreditCard, MapPin, Money } from 'phosphor-react'
import { CoffeeItem } from './Components/CoffeeItem'
import { Input } from './Components/Input'
import {
  LabelContainer,
  CheckoutContainer,
  CheckoutTitle,
  CompleteOrderContainer,
  BaseContainer,
  AddressInputContainer,
  SelectedCoffeeContainer,
  PaymentContainer,
  PaymentLabelContainer,
  SelectButtonsContainer,
  CoffeeBaseContainer,
  TotalValueContainer,
  TotalValueRow,
  LabelText,
  LabelValue,
  ConfirmOrderButton,
  LabelTitle,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrderContainer>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>
        <BaseContainer>
          <LabelContainer>
            <MapPin size={22} />
            <div>
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </LabelContainer>
          <AddressInputContainer>
            <Input placeholder="CEP" className="size-3" />
            <Input placeholder="Rua" />
            <div className="input-flex">
              <Input placeholder="Número" className="size-3" />
              <div className="suffix">
                <Input placeholder="Complemento" />
              </div>
            </div>
            <div className="input-flex">
              <Input placeholder="Bairro" className="size-3" />
              <Input placeholder="Cidade" />
              <Input placeholder="UF" className="size-1" />
            </div>
          </AddressInputContainer>
        </BaseContainer>
        <PaymentContainer>
          <PaymentLabelContainer>
            <MapPin size={22} />
            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </PaymentLabelContainer>
          <SelectButtonsContainer>
            <button id="credit">
              <CreditCard size={16} />
              Cartão de crédito
            </button>
            <button id="debit">
              <Bank size={16} />
              Cartão de débito
            </button>
            <button id="money">
              <Money size={16} />
              Dinheiro
            </button>
          </SelectButtonsContainer>
        </PaymentContainer>
      </CompleteOrderContainer>
      <SelectedCoffeeContainer>
        <CheckoutTitle>Cafés selecionados</CheckoutTitle>
        <CoffeeBaseContainer>
          <CoffeeItem />
          <CoffeeItem />
          <TotalValueContainer>
            <TotalValueRow>
              <LabelText>Total de itens</LabelText>
              <LabelValue>R$ 29,70</LabelValue>
            </TotalValueRow>
            <TotalValueRow>
              <LabelText>Entrega</LabelText>
              <LabelValue>R$ 3,50</LabelValue>
            </TotalValueRow>
            <TotalValueRow>
              <LabelTitle>Total</LabelTitle>
              <LabelTitle>R$ 33,20</LabelTitle>
            </TotalValueRow>
          </TotalValueContainer>
          <ConfirmOrderButton>Confirmar pedido</ConfirmOrderButton>
        </CoffeeBaseContainer>
      </SelectedCoffeeContainer>
    </CheckoutContainer>
  )
}
