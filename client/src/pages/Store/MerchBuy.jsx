import React from "react";

export default class MerchBuy extends React.Component {
  orderPay = () => {
    console.log(this.props);
  };
  render() {
    return (
      <div className="list-item merch-buy-link" onClick={this.orderPay}>
        <div className="main-header">{`BUY: ${this.props.order.cost}UAH`}</div>
      </div>
    );
  }
}
