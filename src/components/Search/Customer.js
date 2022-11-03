import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from 'App'

const Label = styled.label`
  margin-right: 10px;
  font-weight: bold;
`

const Selection = styled.select`
  padding: 5px;
`

const Customer = () => {
  const context = useContext(AppContext)
  let selections = context.appData.customers.map(customer => {
    return <option value={customer.id} key={customer.id}>{customer.name}</option>
  })

  return (
    <div>
      <Label>
        <label>Customer:</label>
      </Label>
      <Selection
        name="customers"
        id="customers"
        onChange={context.changeCustomer}
      >
        {selections}
      </Selection>
    </div>
  )
}

export default Customer
