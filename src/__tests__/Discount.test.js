import {
  getBaseDiscount,
  getSeasonalDiscount,
  getSalesDiscount
} from 'logic/Discount'

const jsonData = {
  customers: [
    {
      id: 1,
      name: 'Tennis Rosy',
      discount: 20
    },
    {
      id: 99,
      name: 'Bowdoin Industry',
      discount: 25
    }
  ]
}

test('base discount calculation', () => {
  expect(getBaseDiscount(jsonData, 1)).toBe(20)
  expect(getBaseDiscount(jsonData, 99)).toBe(25)
})

test('seasonal discount calculation', () => {
  expect(getSeasonalDiscount('01')).toBe(0)
  expect(getSeasonalDiscount('06')).toBe(-5)
  expect(getSeasonalDiscount('08')).toBe(-5)
  expect(getSeasonalDiscount('11')).toBe(0)
})

test('sales discount calculation', () => {
  expect(getSalesDiscount(4999)).toBe(0)
  expect(getSalesDiscount(5400)).toBe(5)
  expect(getSalesDiscount(25000)).toBe(10)
})
