import { useState, useEffect } from 'react'
import { Grid } from '../Grid'
import Axios from 'axios'
import {
  Button,
  Container,
  FormContainer,
  Input,
  InputContent,
  Label,
  RadioGroup,
} from './styles'

export function Form() {
  const [values, setValues] = useState({
    desc: '',
    amount: 0,
    datetime: '',
    radioclick: '',
  })
  const [transactionsList, setTransactionsList] = useState([])

  const handleChangeValues = (value: any) => {
    setValues((prevValue: any) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
  }

  const handleSave = () => {
    if (!values.desc || !values.amount) {
      alert('Informe a descrição do valor!!!')
      return
    } else if (values.amount < 1) {
      alert('O valor tem que ser positivo!!!')
      return
    }

    Axios.post('http://localhost:3000/register', {
      desc: values.desc,
      amount: values.amount,
      datetime: values.datetime,
      radioclick: values.radioclick,
    }).then((response) => {
      console.log(response)
    })

    /* setValues({
      desc: '',
      amount: 0,
      datetime: '',
      entrada: 0,
      saida: 0,
    }) */

    document.location.reload()
  }

  // pegando os dados do banco de dados
  useEffect(() => {
    Axios.get('http://localhost:3000/getcards').then((response) => {
      setTransactionsList(response.data)
    })
  }, [])

  return (
    <FormContainer>
      <Container>
        <InputContent>
          <Label>Descrição</Label>
          <Input
            type="text"
            name="desc"
            onChange={handleChangeValues}
            value={values.desc}
          />
        </InputContent>

        <InputContent>
          <Label>Valor</Label>
          <Input
            type="number"
            name="amount"
            onChange={handleChangeValues}
            value={values.amount}
          />
        </InputContent>

        <InputContent>
          <Label>Data</Label>
          <Input
            type="date"
            name="datetime"
            onChange={handleChangeValues}
            value={values.datetime}
          />
        </InputContent>

        <InputContent>
          <RadioGroup>
            <Input
              type="radio"
              id="rIncome"
              name="radioclick"
              value="1"
              onChange={handleChangeValues}
            />
            <Label htmlFor="rIncome">Entrada</Label>

            <Input
              type="radio"
              id="rExpenses"
              name="radioclick"
              value="0"
              onChange={handleChangeValues}
            />
            <Label htmlFor="rExpenses">Saída</Label>
          </RadioGroup>
        </InputContent>

        <Button onClick={handleSave}>ADICIONAR</Button>
      </Container>

      <Grid itens={transactionsList} />
    </FormContainer>
  )
}
