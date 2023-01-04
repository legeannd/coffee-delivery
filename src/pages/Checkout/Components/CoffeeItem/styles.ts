import styled from 'styled-components'

export const CoffeeItemContainer = styled.div`
  display: flex;
  padding-bottom: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const InnerPaddingContainer = styled.div`
  padding: 0.5rem 0.25rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const CoffeeImageAndNameContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    line-height: 130%;
  }

  .title-align {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div {
      display: flex;
      gap: 0.5rem;
    }
  }
`

export const RemoveButton = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme['base-text']};
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.purple};
  }

  :hover {
    background: ${(props) => props.theme['base-hover']};
    cursor: pointer;
  }
`
