import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
`

const Selection = styled.select`
  padding: 5px;
`

const CustomerSelect = ({ customers, changeCustomer }) => {
  let selections = customers.map(customer => {
    return <option value={customer.id}>{customer.name}</option>
  })

  return (
    <div>
      <Label>
        <label for="customer">Customer:</label>
      </Label>
      <Selection name="customers" id="customers" onChange={changeCustomer}>
        {selections}
      </Selection>
    </div>
  )
}

export default CustomerSelect
