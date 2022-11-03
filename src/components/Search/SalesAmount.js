import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
`

const StyledInput = styled.input`
  padding: 5px;
`

const Euro = styled.div`
  margin-left: 10px;
`

const SalesAmount = ({ changeAmount }) => {
  return (
    <Container>
      <div>
        <Label for="sales">Sales amount: </Label>
        <StyledInput
          type="number"
          id="sales"
          name="sales"
          onChange={changeAmount}
        ></StyledInput>
      </div>
      <Euro>€</Euro>
    </Container>
  )
}

export default SalesAmount
