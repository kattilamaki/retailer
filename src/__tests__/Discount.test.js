import { giveDiscount } from 'logic/Discount'

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

test('rvr values format', () => {
  expect(giveDiscount(jsonData, 1)).toBe(20)
  expect(giveDiscount(jsonData, 99)).toBe(25)
})
