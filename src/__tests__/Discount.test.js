import { giveBaseDiscount, giveSeasonalDiscount } from 'logic/Discount'

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
  expect(giveBaseDiscount(jsonData, 1)).toBe(20)
  expect(giveBaseDiscount(jsonData, 99)).toBe(25)
})

test('seasonal discount calculation', () => {
  expect(giveSeasonalDiscount('01')).toBe(0)
  expect(giveSeasonalDiscount('06')).toBe(-5)
  expect(giveSeasonalDiscount('08')).toBe(-5)
  expect(giveSeasonalDiscount('11')).toBe(0)
})