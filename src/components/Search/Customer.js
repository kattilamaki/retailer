import React from "react";
import styled from "styled-components";

const Label = styled.label`
  margin-right: 10px;
`;

const CustomerSelect = ({ customers, changeCustomer }) => {
  let selections = customers.map((customer) => {
    return <option value={customer.id}>{customer.name}</option>;
  });

  return (
    <div>
      <Label>
        <label for="customer">Customer:</label>
      </Label>
      <select name="customers" id="customers" onChange={changeCustomer}>
      <option value={0}>Select customer</option>
        {selections}
      </select>
    </div>
  );
};

export default CustomerSelect;
