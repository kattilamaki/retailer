import React from "react";

const CustomerSelect = () => {
  return (
    <div>
      <label for="cars">Customer:</label>
      <select name="customers" id="customers">
        <option value="Customer 1">Volvo</option>
        <option value="Customer 2">Saab</option>
        <option value="Customer 3">Mercedes</option>
      </select>
    </div>
  );
};

export default CustomerSelect;
