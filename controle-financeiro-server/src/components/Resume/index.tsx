import { ResumeItem } from '../ResumeItem'
import { Container } from './styles'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa'

interface ValuesResume {
  income: string
  expense: string
  total: string
}

export function Resume({ income, expense, total }: ValuesResume) {
  return (
    <Container>
      <ResumeItem title="Entrada" Icon={FaRegArrowAltCircleUp} value={income} />
      <ResumeItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </Container>
  )
}
