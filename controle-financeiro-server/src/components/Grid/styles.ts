import styled from 'styled-components'

export const Table = styled.table`
  width: 98%;
  background-color: ${(props) => props.theme['--white']};
  padding: 1.25rem;
  box-shadow: 0px 0px 5px ${(props) => props.theme['gray-500']};
  border-radius: 5px;
  max-width: 70rem;
  margin: 1.25rem auto;
`

export const Thead = styled.thead``

export const Tbody = styled.tbody``

export const Tr = styled.tr``

export const Th = styled.th`
  border-bottom: inset;
  padding-bottom: 0.313rem;
  text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
  width: ${(props) => (props.width ? '%' : 'auto')};
`
