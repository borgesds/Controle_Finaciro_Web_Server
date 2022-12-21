import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from 'react-icons/fa'
import { Td, Tr } from './styles'
import Axios from 'axios'
import { useState } from 'react'

interface DeleteData {
  id: number
  descricao: string
  valor: string
  data_cadastro: string
  saida_entradas: string
}

export function GridItem({ item }: any) {
  const [deletevalue, setDeletevalue] = useState<DeleteData>({
    id: item.id,
    descricao: item.descricao,
    valor: item.valor,
    data_cadastro: item.data_cadastro,
    saida_entradas: item.saida_entradas,
  })

  const handleOnDelete = () => {
    Axios.delete(`http://localhost:3000/delete/${deletevalue.id}`)
    document.location.reload()
  }

  return (
    <Tr>
      <Td>{item.descricao}</Td>
      <Td>{`R$ ${item.valor}`}</Td>
      <Td>{item.data_cadastro}</Td>
      <Td alignCenter>
        {item.saida_entrada !== '1' ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </Td>
      <Td aligCenter>
        <FaTrash onClick={handleOnDelete} />
      </Td>
    </Tr>
  )
}
