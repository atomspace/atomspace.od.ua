import React from "react";

export default class MerchBuy extends React.Component {
  orderPay = () => {
    console.log(this.props.order);
  };
  render() {
    return (
      <div
        className="list-item merch-buy-link"
        onClick={this.orderPay}
      >{`BUY: 500UAH`}</div>
    );
  }
}
