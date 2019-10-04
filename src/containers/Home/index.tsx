import React from 'react'

import Navbar from '../../components/Navbar'
import { Content } from './styled'

interface Props {
  data?: object
}

const HomeContainer: React.SFC<Props> = ({ data }) => (
  <>
    <Navbar />

    <Content />
  </>
)

export default HomeContainer
