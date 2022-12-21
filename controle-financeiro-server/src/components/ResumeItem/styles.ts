import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme['--white']};
  border-radius: 8px;
  border: 4px solid ${(props) => props.theme['green-300']};
  padding: 0.313rem 0.938rem;
  width: 30%;

  @midia (max-width: 750px) {
    width: 20%;

    p {
      font-size: 12px;
    }

    span {
      font-size: 20px;
    }

    svg {
      display: none;
    }
  }
`

export const HeaderItem = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.625rem;
  margin: 1.25rem auto;

  svg {
    width: 1.563rem;
    height: 1.563rem;
  }
`

export const HeaderTitle = styled.p`
  font-size: 1.25rem;
`

export const Total = styled.span`
  font-size: 1.875rem;
  font-weight: bold;
`
