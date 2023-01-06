import { Bank, CreditCard, MapPin, Money } from 'phosphor-react'
import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
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

import coffeeList from '../../assets/coffee-list.json'
import { useQuery } from 'react-query'

export function Checkout() {
  const [cep, setCEP] = useState('')
  const { cartItems, address, emptyCart, setCurrentAddress } =
    useContext(CartContext)

  const navigate = useNavigate()
  function handleNavigateToSuccessPage() {
    emptyCart()
    navigate('/checkout/success')
  }

  function handleNavigateToHomePage() {
    navigate('/')
  }

  function handleChangeCEP(e: ChangeEvent<HTMLInputElement>) {
    const currentCEPValue = String(e.target.value).trim().replace('-', '')

    if (currentCEPValue.length === 8) {
      setCEP(currentCEPValue)
    }
  }

  const totalItemValue = cartItems.reduce((acc, value) => {
    if (cartItems.length !== 0) {
      const currentCoffee = coffeeList.find((item) => item.id === value.id)
      return acc + value.amount * Number(currentCoffee?.price)
    } else {
      return 0
    }
  }, 0)

  const shippingValue = Number(3.5)
  const totalValueWithShipping = totalItemValue + shippingValue

  const formatPriceValue = useCallback((value: number) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    return formatter.format(value)
  }, [])

  const { data } = useQuery(['cep', cep], () => {
    if (cep !== '') {
      return fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => data)
    }
  })

  useEffect(() => {
    if (data) {
      setCurrentAddress(data)
    }
  }, [data, setCurrentAddress])

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
            <Input
              placeholder="CEP"
              className="size-3"
              defaultValue={address.cep}
              onChange={handleChangeCEP}
            />
            <Input placeholder="Rua" value={address?.logradouro} />
            <div className="input-flex">
              <Input placeholder="Número" className="size-3" />
              <div className="suffix">
                <Input placeholder="Complemento" value={address?.complemento} />
              </div>
            </div>
            <div className="input-flex">
              <Input
                placeholder="Bairro"
                className="size-3"
                value={address?.bairro}
              />
              <Input placeholder="Cidade" value={address?.localidade} />
              <Input placeholder="UF" className="size-1" value={address?.uf} />
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
          <>
            {coffeeList.map((item) => {
              return cartItems.map((cartItem) => {
                if (cartItem.id === item.id) {
                  return <CoffeeItem key={item.id} coffee={item} />
                } else {
                  return ''
                }
              })
            })}
          </>
          {cartItems.length > 0 ? (
            <>
              <TotalValueContainer>
                <TotalValueRow>
                  <LabelText>Total de itens</LabelText>
                  <LabelValue>{formatPriceValue(totalItemValue)}</LabelValue>
                </TotalValueRow>
                <TotalValueRow>
                  <LabelText>Entrega</LabelText>
                  <LabelValue>{formatPriceValue(shippingValue)}</LabelValue>
                </TotalValueRow>
                <TotalValueRow>
                  <LabelTitle>Total</LabelTitle>
                  <LabelTitle>
                    {formatPriceValue(totalValueWithShipping)}
                  </LabelTitle>
                </TotalValueRow>
              </TotalValueContainer>
              <ConfirmOrderButton onClick={handleNavigateToSuccessPage}>
                Confirmar pedido
              </ConfirmOrderButton>
            </>
          ) : (
            <>
              <TotalValueContainer>
                <TotalValueRow>
                  <LabelTitle>
                    Seu carrinho está vazio, adicione itens para continuar a
                    compra
                  </LabelTitle>
                </TotalValueRow>
              </TotalValueContainer>
              <ConfirmOrderButton onClick={handleNavigateToHomePage}>
                Adicionar itens ao carrinho
              </ConfirmOrderButton>
            </>
          )}
        </CoffeeBaseContainer>
      </SelectedCoffeeContainer>
    </CheckoutContainer>
  )
}
