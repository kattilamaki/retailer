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

const Results = () => {
  return (
    <Container>
      <table>
        <tr>
          <th>Product</th>
          <th>Discount %</th>
          <th>Initial price €</th>
          <th>Sales price €</th>
        </tr>
        <tr>
          <td>Tennis racket</td>
          <td>20</td>
          <td>100</td>
          <td>80</td>
        </tr>
        <tr>
          <td>Bowling shoes</td>
          <td>90</td>
          <td>10</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Bag of diamonds</td>
          <td>5</td>
          <td>1000</td>
          <td>950</td>
        </tr>
      </table>
    </Container>
  );
};

export default Results;
