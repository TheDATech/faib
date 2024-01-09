import React from "react";
import OrderHistoryComponent from "../components/OrderHistory/Index";
import style from "../components/OrderHistory/Style.module.css";
const orderHistory = () => {
  return (
    <div className={style.orderHisotryContainerbox}>
      <OrderHistoryComponent />
    </div>
  );
};

export default orderHistory;
