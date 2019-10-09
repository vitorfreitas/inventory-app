import React from 'react'

import Navbar from '../../components/Navbar'
import { Content } from './styled'
import GridContainer from './GridContainer'

interface Props {
  data?: object
}

const HomeContainer: React.SFC<Props> = ({ data }) => (
  <>
    <Navbar />

    <Content>
      <GridContainer />
    </Content>
  </>
)

export default HomeContainer
