import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem 1.25rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const CoffeeTypeContainer = styled.div`
  margin: 0.75rem 0 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`

export const CoffeeType = styled.span`
  font-weight: bold;
  font-size: 0.625rem;
  line-height: 130%;
  background: ${(props) => props.theme['yellow-light']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  color: ${(props) => props.theme['yellow-dark']};
  text-transform: uppercase;
`

export const CoffeeTitle = styled.p`
  font-family: 'Baloo 2', cursive;
  color: ${(props) => props.theme['base-subtitle']};
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;
`

export const CoffeeDetails = styled.p`
  font-size: 0.875rem;
  text-align: center;
  color: ${(props) => props.theme['base-label']};
  line-height: 130%;
  margin-top: 0.5rem;
`

export const PriceAndQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;

  .options {
    display: flex;
    gap: 0.5rem;
  }
`

export const Price = styled.span`
  color: ${(props) => props.theme['base-text']};
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 130%;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
  }

  display: flex;
  align-items: baseline;
  gap: 0.25rem;
`

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.background};
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  transition: background-color 0.2s;

  :hover:not(:disabled) {
    cursor: pointer;
    background-color: ${(props) => props.theme.purple};
  }

  :focus:not(:disabled) {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']};
  }

  :disabled {
    cursor: not-allowed;
  }
`
