import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 22pt;
  justify-content: flex-start;
  height: 40px;
  padding: 10px 0 0 0;
  margin: 0 0 10px 20px;
`

const Header = () => {
  return <Container>Retailer</Container>
}

export default Header
