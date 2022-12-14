import React from 'react'
import styled from 'styled-components'
import Customer from 'components/Search/Customer'
import DeliveryTime from 'components/Search/DeliveryTime'
import SalesAmount from 'components/Search/SalesAmount'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 20px 20px 20px;
  background-color: white;
  height: 80px;
  align-items: center;
  border-radius: 7px;
`

const SearchBar = () => {
  return (
    <Container>
      <Customer />
      <DeliveryTime />
      <SalesAmount />
    </Container>
  )
}

export default SearchBar
