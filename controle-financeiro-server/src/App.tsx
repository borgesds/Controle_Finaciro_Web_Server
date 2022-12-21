import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Resume } from './components/Resume'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { useState, useEffect } from 'react'
import { Form } from './components/Form'

export function App() {
  /*   const data = localStorage.getItem('transactions')
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : [],
  ) */

  // entrada
  const [income, setIncome] = useState<number>(0)
  // saídas
  const [expense, setExpense] = useState<number>(0)
  // total
  const [total, setTotal] = useState<number>(0)

  /*   useEffect(() => {
    const amountExpense = transactionsList
      .filter((item: any) => item.expense)
      .map((transaction: number) => Number(transaction.amount))

    const amountIncome = transactionsList
      .filter((item: any) => !item.expense)
      .map((transaction: number) => Number(transaction.amount))

    const expense = amountExpense
      .reduce((acc: number, cur: number) => acc + cur, 0)
      .toFixed(2)
    const income = amountIncome
      .reduce((acc: number, cur: number) => acc + cur, 0)
      .toFixed(2)

    const total = Math.abs(income - expense).toFixed(2)

    setIncome(`R$ ${income}`)
    setExpense(`R$ ${expense}`)
    setTotal(`${Number(income) < Number(expense) ? '-' : ''} R$ ${total}`)
  }, [transactionsList]) */

  /*   const handleAdd = (transaction: string | number | boolean) => {
    const newArrayTransactions = [...transactionsList, transaction]

    setTransactionsList(newArrayTransactions)

    localStorage.setItem('transactions', JSON.stringify(newArrayTransactions))
  } */
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
