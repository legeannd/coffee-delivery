import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import deliveryImg from '../../assets/delivery.png'
import { CartContext } from '../../contexts/CartContext'
import {
  DetailHighlighted,
  DetailRow,
  DetailText,
  OrderDetailsContainer,
  OrderOverviewContainer,
  SuccessContainer,
  SuccessLabel,
  SuccessTitle,
  SuccessTitleContainer,
} from './styles'
export function Success() {
  const { address } = useContext(CartContext)

  return (
    <SuccessContainer>
      <OrderOverviewContainer>
        <SuccessTitleContainer>
          <SuccessTitle>Uhu! Pedido Confirmado</SuccessTitle>
          <SuccessLabel>
            Agora é só aguardar que logo o café chegará até você
          </SuccessLabel>
        </SuccessTitleContainer>
        <OrderDetailsContainer>
          <DetailRow>
            <span className="location">
              <MapPin size={16} weight="fill" />
            </span>
            <div>
              <DetailText>
                Entrega em{' '}
                <DetailHighlighted>
                  {address?.logradouro || 'Não informado'}
                </DetailHighlighted>
              </DetailText>
              {address ? (
                <DetailText>
                  {address.bairro} - {address.localidade}, {address.uf}
                </DetailText>
              ) : (
                <DetailText>Não informado</DetailText>
              )}
            </div>
          </DetailRow>
          <DetailRow>
            <span className="timer">
              <Timer size={16} weight="fill" />
            </span>
            <div>
              <DetailText>Previsão de entrega</DetailText>
              <DetailHighlighted>20 min - 30 min</DetailHighlighted>
            </div>
          </DetailRow>
          <DetailRow>
            <span className="money">
              <CurrencyDollar size={16} weight="fill" />
            </span>
            <div>
              <DetailText>Pagamento na entrega</DetailText>
              <DetailHighlighted>Cartão de Crédito</DetailHighlighted>
            </div>
          </DetailRow>
        </OrderDetailsContainer>
      </OrderOverviewContainer>
      <img src={deliveryImg} alt="" />
    </SuccessContainer>
  )
}
