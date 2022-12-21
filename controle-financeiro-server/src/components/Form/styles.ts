import styled from 'styled-components'

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  max-width: 80rem;
  display: flex;
  justify-content: space-around;
  gap: 0.625rem;
  padding: 0.938rem;
  margin: 1.25rem;
  width: 98%;
  background-color: ${(props) => props.theme['--white']};
  box-shadow: 0px 0px 5px ${(props) => props.theme['gray-500']};
  border-radius: 8px;

  @media (max-width: 750px) {
    display: Grid;
  }
`

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label``

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 0.313rem 0.625rem;
  font-size: 0.938rem;
  border: 1px solid ${(props) => props.theme['green-500']};
`

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 1.25rem;
    margin-right: 0.313rem;
    accent-color: black;
    margin-top: 0;
  }
`

export const Button = styled.button`
  padding: 0.313rem 0.625rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => props.theme['--white']};
  background-color: teal;
`
