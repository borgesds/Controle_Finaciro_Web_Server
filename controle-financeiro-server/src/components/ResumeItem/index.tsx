import { Container, HeaderItem, HeaderTitle, Total } from './styles'

interface TitleIcon {
  title: string
  Icon?: any
  value: any
}

export function ResumeItem({ title, Icon, value }: TitleIcon) {
  return (
    <Container>
      <HeaderItem>
        <HeaderTitle>{title}</HeaderTitle>
        <Icon />
      </HeaderItem>
      <Total>{value}</Total>
    </Container>
  )
}
