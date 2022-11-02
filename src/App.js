import React, { useState } from 'react'
import Header from 'components/Header/Header'
import SearchBar from 'components/Search/SearchBar'
import Results from 'components/Results/Results'
import 'App.css'
import styled from 'styled-components'
import useJsonData from 'adapters/useAppData'
import { giveDiscount } from 'logic/Discount'

const Page = styled.div`
  background-color: lightgray;
  height: 100vh;
`

const App = () => {
  const appData = useJsonData()
  const [amount, setAmount] = useState(0)
  const [customerId, setCustomerId] = useState(0)
  const [deliveryTime, setClosingTime] = useState('')

  const handleAmountChange = event => {
    setAmount(event.target.value)
  }

  const handleCustomerChange = event => {
    setCustomerId(event.target.value)
  }

  const handleDeliveryTimeChange = event => {
    setClosingTime(event.target.value)
  }

  return (
    <>
      {appData.ready && (
        <Page>
          <Header />
          <SearchBar
            customers={appData.customers}
            changeAmount={handleAmountChange}
            changeCustomer={handleCustomerChange}
            changeDeliveryTime={handleDeliveryTimeChange}
          />
          <Results
            products={appData.products}
          />
        </Page>
      )}
    </>
  )
}

export default App
