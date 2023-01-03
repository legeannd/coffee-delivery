import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-top: 6rem;
`

export const HeroContainer = styled.main`
  display: flex;
  gap: 3.5rem;
  padding-bottom: 6.75rem;

  .info {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .heading {
      display: flex;
      gap: 1rem;
      flex-direction: column;

      h1 {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 3rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-title']};
      }

      p {
        font-weight: 400;
        font-size: 1.25rem;
      }
    }

    .items {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem 0;

      span {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        font-size: 1rem;
        line-height: 130%;

        span:first-child {
          padding: 0.5rem;
          border-radius: 50%;
          color: ${(props) => props.theme.background};
        }
      }

      .cart {
        background: ${(props) => props.theme['yellow-dark']};
      }

      .package {
        background: ${(props) => props.theme['base-text']};
      }

      .timer {
        background: ${(props) => props.theme.yellow};
      }

      .coffee {
        background: ${(props) => props.theme.purple};
      }
    }
  }
  img {
    height: 22.5rem;
  }
`

export const CoffeeSelectionContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2.5rem 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .selection {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2.5rem 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`
