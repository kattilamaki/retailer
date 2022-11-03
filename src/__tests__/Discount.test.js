import {
  getBaseDiscount,
  getSeasonalDiscount,
  getSalesDiscount,
  hasSpecialDiscount
} from 'logic/Discount'

const jsonData = {
  customers: [
    {
      id: 1,
      name: 'Tennis Rosy',
      discount: 20,
      specialDiscount: 2
    },
    {
      id: 99,
      name: 'Bowdoin Industry',
      discount: 25,
      specialDiscount: 3
    }
  ]
}

const product1 = {
  id: 2,
  name: 'Tennis Ball',
  price: 5
}

const product2 = {
  id: 3,
  name: 'Tennis Ball',
  price: 5
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

test('special discount calculation', () => {
  expect(hasSpecialDiscount(jsonData, 1, product1)).toBe(true)
  expect(hasSpecialDiscount(jsonData, 1, product2)).toBe(false)
})