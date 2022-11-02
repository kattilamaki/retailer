import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 20px 0 20px;
  border-radius: 7px;
  background-color: white;
  padding: 20px 0 20px 0;
`;

const Results = ({ products }) => {
  let productListItems = products.map((product) => {
    return (
      <tr>
        <td>{product.name}</td>
        <td>20</td>
        <td>{product.price}</td>
        <td>80</td>
      </tr>
    );
  });

  return (
    <Container>
      <table>
        <tr>
          <th>Product</th>
          <th>Discount %</th>
          <th>Initial price €</th>
          <th>Sales price €</th>
        </tr>
        {productListItems}
      </table>
    </Container>
  );
};

export default Results;
