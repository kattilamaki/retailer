import React from 'react'
import Header from 'components/Header/Header'
import Customer from 'components/Search/Customer'
import DeliveryTime from 'components/Search/DeliveryTime'
import SalesAmount from 'components/Search/SalesAmount'
import Results from 'components/Results/Results'

const App = () => {
  return (
    <>
    <Header />
    <Customer />
    <DeliveryTime />
    <SalesAmount />
    <Results />
    </>
  )
}

export default App