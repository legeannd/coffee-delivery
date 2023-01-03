import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const CheckoutTitle = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  line-height: 130%;
`

export const CompleteOrderContainer = styled.div``

export const BaseContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
  margin-top: 1rem;
`

export const LabelContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const AddressInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  .input-flex {
    display: flex;
    gap: 0.75rem;
  }

  .size-1 {
    min-width: 3.75rem;
    max-width: 3.75rem;
  }

  .size-3 {
    min-width: 12.5rem;
    max-width: 12.5rem;
  }
  .suffix {
    width: 100%;
    position: relative;

    ::after {
      font-style: italic;
      font-size: 0.75rem;
      color: ${(props) => props.theme['base-label']};
      line-height: 130%;
      content: 'Opcional';
      position: absolute;
      right: 0.75rem;
      top: 0.75rem;
    }

    @media (max-width: 960px) {
      ::after {
        content: '';
      }
    }
  }
`

export const PaymentContainer = styled(BaseContainer)`
  margin-top: 0.75rem;
`

export const PaymentLabelContainer = styled(LabelContainer)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const SelectButtonsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    background: ${(props) => props.theme['base-button']};
    border: 0;
    border-radius: 6px;

    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
    padding: 1rem 1.25rem;

    svg {
      color: ${(props) => props.theme.purple};
    }

    :hover {
      cursor: pointer;
      background: ${(props) => props.theme['base-hover']};
    }

    :focus {
      background: ${(props) => props.theme['purple-light']};
      box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
    }
  }
`

export const SelectedCoffeeContainer = styled.div``
