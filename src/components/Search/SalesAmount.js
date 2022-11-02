import React from "react";

const SalesAmount = ({ changeAmount }) => {
  return (
    <div>
      <label for="sales">Sales amount: </label>
      <input
        type="number"
        id="sales"
        name="sales"
        onChange={changeAmount}
      ></input>
      €
    </div>
  );
};

export default SalesAmount;
