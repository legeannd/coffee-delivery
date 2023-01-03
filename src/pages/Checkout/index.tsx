import { Bank, CreditCard, MapPin, Money } from 'phosphor-react'
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
      </SelectedCoffeeContainer>
    </CheckoutContainer>
  )
}
