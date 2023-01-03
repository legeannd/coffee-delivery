import { MapPin } from 'phosphor-react'
import { Input } from './Components/Input'
import {
  AddressLabelContainer,
  CheckoutContainer,
  CheckoutTitle,
  CompleteOrderContainer,
  DeliveryAddressContainer,
  AddressInputContainer,
  SelectedCoffeeContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteOrderContainer>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>
        <DeliveryAddressContainer>
          <AddressLabelContainer>
            <MapPin size={22} />
            <div>
              <p>Endereço de entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </AddressLabelContainer>
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
        </DeliveryAddressContainer>
      </CompleteOrderContainer>
      <SelectedCoffeeContainer>
        <CheckoutTitle>Cafés selecionados</CheckoutTitle>
      </SelectedCoffeeContainer>
    </CheckoutContainer>
  )
}
