import React from 'react'
import DatePicker from 'react-native-datepicker'
import styled from 'styled-components/native'
import { not } from 'ramda'

import Container from 'components/Layout/Container'
import Navbar from 'components/Navbar'
import { BoldText, NormalText } from 'components/Typography/Text'
import { Color } from 'styles/variables'

const DatePickerContainer = styled.View`
  padding: 10px 20px;
`

const Label = styled(NormalText).attrs({
  textAlign: 'center'
})`
  color: #aaa;
  margin-top: 8px;
`

const ReportsList = styled.ScrollView`
  padding: 20px;
`

const ReportItem = styled.View`
  border-bottom-width: 1px;
  border-color: #eee;
  padding-bottom: 5px;
`

const ReportContent = styled(NormalText)`
  color: ${Color.primary};
  font-size: 30px;
`

const AverageTicketSize = styled(NormalText)`
  color: #aaa;
  font-size: 13px;
`

interface Props {
  reports: {
    sales: {
      title: string
      content: number
      items: {
        price: number
      }[]
    }
  }
  currentDate: Date
  onChangeDate: (date: string) => void
}

const ReportsContainer: React.SFC<Props> = ({
  reports,
  currentDate,
  onChangeDate
}) => {
  const averageTicketSize =
    reports?.sales.items.reduce((acc, cur) => acc + cur.price, 0) /
    reports?.sales.content

  return (
    <Container>
      <Navbar title="Relatórios"></Navbar>

      <DatePickerContainer>
        <DatePicker
          style={{ width: '100%', backgroundColor: '#fff' }}
          date={currentDate}
          mode="date"
          format="DD/MM/YYYY"
          confirmBtnText="Salvar"
          cancelBtnText="Voltar"
          customStyles={{
            dateIcon: {
              display: 'none'
            },
            dateInput: {
              borderWidth: 1,
              fontSize: 30,
              borderRadius: 2,
              borderColor: '#e0e0e0',
              justifyContent: 'center',
              alignItems: 'center'
            },
            placeholderText: {
              textAlign: 'center'
            }
          }}
          onDateChange={date => onChangeDate(date)}
        />

        <Label>Relatório no período de um ano</Label>
      </DatePickerContainer>

      <ReportsList>
        <ReportItem>
          <BoldText>{reports?.sales.title}</BoldText>
          <ReportContent>{reports?.sales.content}</ReportContent>
          {not(isNaN(averageTicketSize)) && (
            <AverageTicketSize>
              Ticket Médio: R${averageTicketSize.toFixed(2)}
            </AverageTicketSize>
          )}
        </ReportItem>
      </ReportsList>
    </Container>
  )
}

export default ReportsContainer
