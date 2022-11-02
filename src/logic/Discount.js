export const giveDiscount = (appData, customerId) => {
  const customer = appData.customers.find(
    customer => customer.id === customerId
  )
  return customer.discount
}
