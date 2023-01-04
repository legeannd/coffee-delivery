import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 5rem;
`

export const OrderOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const SuccessTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const SuccessTitle = styled.h1`
  color: ${(props) => props.theme['yellow-dark']};
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
`

export const SuccessLabel = styled.span`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  line-height: 130%;
`

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px 36px;
  gap: 2rem;

  background: ${(props) => props.theme.background};
  position: relative;
  background-clip: padding-box;
  border: 1px solid transparent;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
  }
`

export const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.background};
    padding: 0.5rem;
    border-radius: 50%;
  }

  .location {
    background: ${(props) => props.theme.purple};
  }

  .timer {
    background: ${(props) => props.theme.yellow};
  }

  .money {
    background: ${(props) => props.theme['yellow-dark']};
  }

  div {
    display: flex;
    flex-direction: column;
  }
`

export const DetailText = styled.span`
  line-height: 130%;
`

export const DetailHighlighted = styled(DetailText)`
  font-weight: 700;
`
