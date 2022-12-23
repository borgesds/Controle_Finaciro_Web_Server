import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Resume } from './components/Resume'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { useState, useEffect } from 'react'
import { Form } from './components/Form'
import Axios from 'axios'

export function App() {

  // entrada
  const [valueIncome, setValueIncome] = useState<number>(0)
  const [income, setIncome] = useState<string>('0')
  // saídas
  const [valueExit, setValueExit] = useState<number>(0)
  const [expense, setExpense] = useState<string>('0')
  // total
  const [valuetotal, setValueTotal] = useState<number>(0)
  const [total, setTotal] = useState<string>('0')

  useEffect(() => {
    Axios.get('http://localhost:3000/getincome').then((response) => {
      const arr: any = response.data.map(function (obj: any) {
        return Object.keys(obj).map(function (key) {
          return obj[key]
        })
      })

      setValueIncome(Number(arr[0][0]))

      const valueIncomeExhibition: string = `R$ ${valueIncome.toFixed(2)}`
      setIncome(valueIncomeExhibition)
    })

    Axios.get('http://localhost:3000/getexit').then((response) => {
      const arr: any = response.data.map(function (obj: any) {
        return Object.keys(obj).map(function (key) {
          return obj[key]
        })
      })

      setValueExit(Number(arr[0][0]))

      const valueExitExhibition: string = `R$ ${valueExit.toFixed(2)}`
      setExpense(valueExitExhibition)
    })

    const varTotal = valueIncome - valueExit
    console.log(varTotal)

    setTotal(`${varTotal < 0 ? '-' : ''} R$ ${varTotal.toFixed(2)}`)
  }, [valueExit, valueIncome])

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <Resume income={income} expense={expense} total={total} />

      <Form
      /*    handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList} */
      />
      <GlobalStyle />
    </ThemeProvider>
  )
}
