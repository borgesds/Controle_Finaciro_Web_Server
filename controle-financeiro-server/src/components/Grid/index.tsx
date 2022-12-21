import { GridItem } from '../GridItem'
import { Table, Tbody, Th, Thead, Tr } from './styles'

export function Grid({ itens }: any) {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th width={40}>Descrição</Th>
          <Th width={20}>Valor</Th>
          <Th width={20}>Data</Th>
          <Th width={10} alignCenter>
            Tipo
          </Th>
          <Th width={10}></Th>
        </Tr>
      </Thead>

      <Tbody>
        {typeof itens !== 'undefined' &&
          itens.map((item: any, index: any) => {
            return <GridItem key={index} item={item} />
          })}
      </Tbody>
    </Table>
  )
}
