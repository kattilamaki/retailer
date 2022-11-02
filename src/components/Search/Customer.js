import React from "react";
import styled from "styled-components";

const Label = styled.label`
  margin-right: 10px;
`;

const CustomerSelect = () => {
  return (
    <div>
      <Label>
        <label for="cars">Customer:</label>
      </Label>
      <select name="customers" id="customers">
        <option value="Customer 1">Volvo</option>
        <option value="Customer 2">Saab</option>
        <option value="Customer 3">Mercedes</option>
      </select>
    </div>
  );
};

export default CustomerSelect;
