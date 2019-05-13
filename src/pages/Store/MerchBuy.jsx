import React from "react";

export default class MerchBuy extends React.Component {
  render() {
    return (
      <div className="list-item merch-buy-link">
        <a
          className="main-header"
          href="#buyForm"
          onClick={this.props.handleDialog}
        >{`BUY: ${this.props.order.price}UAH`}</a>
      </div>
    );
  }
}
