import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { AppContext } from 'App'
import { getDiscount, hasSpecialDiscount } from 'logic/Discount'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 20px 0 20px;
  border-radius: 7px;
  background-color: white;
  padding: 20px 0 20px 0;
`

const NormalRate = styled.td`
  color: green;
  font-weight: bold;
  padding: 5px 10px 5px 15px;
`

const SpecialRate = styled.span`
  background-color: green;
  color: white;
  font-weight: bold;
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
`

const Products = () => {
  const context = useContext(AppContext)

  useEffect(() => {}, [context])

  let discount = getDiscount(
    context.appData,
    context.customerId,
    context.deliveryTime,
    context.amount
  )

  let productListItems = context.appData.products.map(product => {
    const specialDiscount = hasSpecialDiscount(
      context.appData,
      context.customerId,
      product
    )
    const specialDiscountRate = specialDiscount ? 5 : 0

    return (
      <tr key={product.id}>
        <td>{product.name}</td>
        {specialDiscount ? (
          <td>
            <SpecialRate>{discount <= 0 ? 0 : discount + 5}%</SpecialRate>
          </td>
        ) : (
          <NormalRate>{discount <= 0 ? 0 : discount}%</NormalRate>
        )}
        <td>{product.price}</td>
        <td>
          {discount <= 0
            ? product.price
            : (
                product.price -
                ((discount + specialDiscountRate) / 100) * product.price
              ).toFixed(2)}
        </td>
      </tr>
    )
  })

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Discount</th>
            <th>Initial price €</th>
            <th>Sales price €</th>
          </tr>
        </thead>
        <tbody>{productListItems}</tbody>
      </table>
    </Container>
  )
}

export default Products
