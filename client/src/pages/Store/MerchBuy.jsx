import React from 'react';

export default class MerchBuy extends React.Component {
  render() {
    const { cost, handleDialog } = this.props;
    return (
      <div className="list-item">
        <a className="merch-buy-link" href="#buyForm" onClick={handleDialog}>
          {`BUY: ${cost} UAH`}
        </a>
      </div>
    );
  }
}
