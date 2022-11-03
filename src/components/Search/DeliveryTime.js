import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
`

const StyledInput = styled.input`
  padding: 5px;
`

const DeliveryTime = ({ changeDeliveryTime }) => {
  return (
    <div>
      <Label for="delivery">Delivery time: </Label>
      <StyledInput
        type="month"
        id="bdaymonth"
        name="bdaymonth"
        onChange={changeDeliveryTime}
      ></StyledInput>
    </div>
  )
}

export default DeliveryTime
