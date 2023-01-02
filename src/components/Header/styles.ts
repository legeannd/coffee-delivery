import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      border-radius: 6px;
      text-decoration: none;
      font-size: 0.875rem;

      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};

      &.cart {
        background: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`
