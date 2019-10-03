import React from 'react'

import { Title } from '../../components/Typography'

interface Props {
  data?: object
}

const HomeContainer: React.SFC<Props> = ({ data }) => (
  <Title>Home Container</Title>
)

export default HomeContainer
