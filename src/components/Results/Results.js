import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { AppContext } from 'App'
import { giveDiscount } from 'logic/Discount'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 20px 0 20px;
  border-radius: 7px;
  background-color: white;
  padding: 20px 0 20px 0;
`

const Results = () => {
  const context = useContext(AppContext)

  useEffect(() => {}, [context])

  let discount = giveDiscount(context.appData, context.customerId)

  let productListItems = context.appData.products.map(product => {
    return (
      <tr>
        <td>{product.name}</td>
        <td>{discount}%</td>
        <td>{product.price}</td>
        <td>{(discount / 100 * product.price).toFixed(2)}</td>
      </tr>
    )
  })

  return (
    <Container>
      <table>
        <tr>
          <th>Product</th>
          <th>Discount</th>
          <th>Initial price €</th>
          <th>Sales price €</th>
        </tr>
        {productListItems}
      </table>
    </Container>
  )
}

export default Results
