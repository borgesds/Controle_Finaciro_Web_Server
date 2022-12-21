import styled from 'styled-components'

export const Tr = styled.tr``

export const Td = styled.td`
  padding-top: 0.938rem;
  text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
  word-break: break-all;

  svg {
    width: 1.125rem;
    height: 1.125rem;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme['red-500']};
    }
  }
`
