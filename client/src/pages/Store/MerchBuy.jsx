import React from 'react';

export default class MerchBuy extends React.Component {
  render() {
    const { price, handleDialog } = this.props;
    return (
      <div className="list-item">
        <a className="merch-buy-link" href="#buyForm" onClick={handleDialog}>
          {`BUY: ${price} UAH`}
        </a>
      </div>
    );
  }
}
