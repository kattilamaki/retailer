import React from "react";
import Header from "components/Header/Header";
import SearchBar from "components/Search/SearchBar";
import Results from "components/Results/Results";
import "App.css";
import styled from "styled-components";

const Page = styled.div`
  background-color: lightgray;
  height: 100vh;
`;

const App = () => {
  return (
    <Page>
      <Header />
      <SearchBar />
      <Results />
    </Page>
  );
};

export default App;
