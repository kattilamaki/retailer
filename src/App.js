import React, { useState, createContext, useEffect } from 'react'
import Header from 'components/Header/Header'
import SearchBar from 'components/Search/SearchBar'
import Results from 'components/Results/Results'
import 'App.css'
import styled from 'styled-components'
import useJsonData from 'adapters/useAppData'

const Page = styled.div`
  background-color: lightgray;
  height: 100vh;
`

export const AppContext = createContext(null)

const App = () => {
  const appData = useJsonData()
  const [amount, setAmount] = useState(0)
  const [customerId, setCustomerId] = useState(1)
  const [deliveryTime, setClosingTime] = useState(1)

  const handleAmountChange = event => {
    setAmount(parseInt(event.target.value))
  }

  const handleCustomerChange = event => {
    setCustomerId(parseInt(event.target.value))
  }

  const handleDeliveryTimeChange = event => {
    setClosingTime(event.target.value.slice(-2))
  }

  useEffect(() => {}, [appData.ready])

  return (
    <>
      {appData.ready && (
        <Page>
          <AppContext.Provider
            value={{
              appData: appData,
              amount: amount,
              customerId: customerId,
              deliveryTime: deliveryTime
            }}
          >
            <Header />
            <SearchBar
              customers={appData.customers}
              changeAmount={handleAmountChange}
              changeCustomer={handleCustomerChange}
              changeDeliveryTime={handleDeliveryTimeChange}
            />
            <Results />
          </AppContext.Provider>
        </Page>
      )}
    </>
  )
}

export default App
