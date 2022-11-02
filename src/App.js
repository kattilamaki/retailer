import React from "react";
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

  return (
    <>
      {appData.ready && (
        <Page>
          <Header />
          <SearchBar customers={appData.customers} />
          <Results products={appData.products} />
        </Page>
      )}
    </>
  );
};

export default App;
