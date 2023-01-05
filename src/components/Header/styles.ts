import styled from 'styled-components'

interface HeaderContainerProps {
  cartItemsAmount: number
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

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

        position: relative;

        ::after {
          content: '${(props) => props.cartItemsAmount}';
          font-weight: 700;
          font-size: 0.75rem;
          display: ${(props) =>
            props.cartItemsAmount === 0 ? 'none' : 'flex'};
          align-items: center;
          justify-content: center;
          position: absolute;
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          color: ${(props) => props.theme.white};
          background: ${(props) => props.theme['yellow-dark']};
          top: -0.5rem;
          right: -0.5rem;
        }
      }
    }
  }
`
