export const getBaseDiscount = (appData, customerId) => {
  const customer = appData.customers.find(
    customer => customer.id === customerId
  )
  return customer.discount
}

export const getSeasonalDiscount = month => {
  switch (month) {
    case '01':
    case '02':
    case '03':
    case '04':
    case '05':
    case '09':
    case '10':
    case '11':
    case '12':
      return 0
    case '06':
    case '07':
    case '08':
      return -5
    default:
      return 0
  }
}

export const getSalesDiscount = salesAmount => {
  if (salesAmount < 5000) {
    return 0
  }
  if (salesAmount >= 5000 && salesAmount < 10000) {
    return 5
  }
  if (salesAmount >= 10000) {
    return 10
  }
  return 0
}
