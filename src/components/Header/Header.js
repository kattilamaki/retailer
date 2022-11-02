import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 22pt;
  justify-content: center;
  height: 40px;
  padding: 5px 0 5px 0;
`;

const Header = () => {
  return <Container>Retailer</Container>;
};

export default Header;
