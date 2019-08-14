import React from 'react';

export default class MerchBuy extends React.Component {
  render() {
    const { price = 0, handleDialog } = this.props;
    return (
      <div className="list-item">
        <a className="merch-buy-link" href="#buyForm" onClick={handleDialog}>
          <div>{`BUY: ${price} UAH`}</div>
        </a>
      </div>
    );
  }
}
