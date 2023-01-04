import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: ${(props) => props.theme['purple-light']};
  border-radius: 6px;

  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;

  button {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme.purple};

    :hover {
      cursor: pointer;
      color: ${(props) => props.theme['purple-dark']};
    }
    :focus {
      box-shadow: 0 0 0 0px;
    }

    :disabled {
      cursor: not-allowed;
    }
  }

  input {
    background: transparent;
    border: 0;
    width: 1.25rem;
    text-align: center;

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    :focus {
      box-shadow: 0 0 0 0px;
    }
  }

  :focus-within {
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-dark']};
  }
`
