import React from "react";

const DeliveryTime = ({ changeDeliveryTime }) => {
  return (
    <div>
      <label for="delivery">Delivery time: </label>
      <input
        type="month"
        id="bdaymonth"
        name="bdaymonth"
        onChange={changeDeliveryTime}
      ></input>
    </div>
  );
};

export default DeliveryTime;
