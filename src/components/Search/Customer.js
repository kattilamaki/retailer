import React from "react";
import styled from "styled-components";

const Label = styled.label`
  margin-right: 10px;
`;

const CustomerSelect = ({ customers }) => {
  let selections = customers.map((customer) => {
    return <option value={customer.name}>{customer.name}</option>;
  });

  return (
    <div>
      <Label>
        <label for="customer">Customer:</label>
      </Label>
      <select name="customers" id="customers">
        {selections}
      </select>
    </div>
  );
};

export default CustomerSelect;
