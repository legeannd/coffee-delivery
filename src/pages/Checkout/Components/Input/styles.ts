import styled from 'styled-components'

export const InputContainer = styled.input`
  width: 100%;
  background: ${(props) => props.theme['base-input']};
  border: 0;
  border-radius: 4px;
  padding: 0.75rem;

  font-size: 0.875rem;
  line-height: 130%;

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
