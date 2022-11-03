import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from 'App'

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
`

const StyledInput = styled.input`
  padding: 5px;
`

const DeliveryTime = () => {
  const context = useContext(AppContext)
  return (
    <div>
      <Label>Delivery time: </Label>
      <StyledInput
        type="month"
        onChange={context.changeDeliveryTime}
      ></StyledInput>
    </div>
  )
}

export default DeliveryTime
