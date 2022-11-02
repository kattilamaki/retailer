import React from "react";
import styled from "styled-components";

const SalesAmount = () => {
  return (
    <div>
      <label for="sales">Sales amount: </label>
      <input type="number" id="sales" name="sales"></input>
      €
    </div>
  );
};

export default SalesAmount;
