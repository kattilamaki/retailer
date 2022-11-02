import React, { useState } from "react";
import Header from "components/Header/Header";
import SearchBar from "components/Search/SearchBar";
import Results from "components/Results/Results";
import "App.css";
import styled from "styled-components";
import useJsonData from "adapters/useJsonData";

const Page = styled.div`
  background-color: lightgray;
  height: 100vh;
`;

const App = () => {
  const appData = useJsonData();
  const [amount, setAmount] = useState(0);
  const [customer, setCustomer] = useState(0);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCustomerChange = (event) => {
    setCustomer(event.target.value);
  };

  return (
    <>
      {appData.ready && (
        <Page>
          <Header />
          <SearchBar
            customers={appData.customers}
            changeAmount={handleAmountChange}
            changeCustomer={handleCustomerChange}
          />
          <Results products={appData.products} />
        </Page>
      )}
    </>
  );
};

export default App;
