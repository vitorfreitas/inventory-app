import React, { Component, useState } from 'react'
import { Text, View } from 'react-native'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import moment from 'moment'
import ReportsContainer from 'containers/Reports'

const FETCH_REPORTS = gql`
  query FetchReports($from: Date!, $to: Date!) {
    reports(from: $from, to: $to) {
      sales {
        title
        content
        items {
          id
          price
        }
      }
    }
  }
`

const Reports = () => {
  const [dates, setDates] = useState({
    from: moment().subtract(1, 'year'),
    to: moment().add('1', 'month')
  })

  const formatDatesToISO = ({ from, to }) => ({
    from: moment(from).format('YYYY-MM-DD'),
    to: moment(to).format('YYYY-MM-DD')
  })

  const { data, loading, error } = useQuery(FETCH_REPORTS, {
    variables: formatDatesToISO(dates)
  })

  const handleDateChange = (date: string) => {
    const [day, month, year] = date.split('/')
    const to = moment(`${year}-${month}-${day}`)
    const from = moment(to).subtract(1, 'year')

    setDates({ to, from })
  }

  return (
    <ReportsContainer
      currentDate={dates.to.toDate()}
      reports={data?.reports}
      onChangeDate={handleDateChange}
    />
  )
}

export default Reports
