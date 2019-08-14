import React from 'react';
import classname from 'classnames';

export default class MerchSize extends React.Component {
  state = {
    size: 'M',
  };
  sizes = ['S', 'M', 'L', 'XL'];

  componentDidMount() {
    const cachedMerch = JSON.parse(window.localStorage.getItem('currentMerch'));
    let size = {};
    if (cachedMerch) {
      size = { size: cachedMerch.size };
    } else {
      size = { size: this.state.size };
    }
    this.setState(size);
    this.props.changeMerchAttr(size);
  }

  changeMerchAttr = (size) => {
    this.setState({ size });
    this.props.changeMerchAttr({ size });
  };

  render() {
    return (
      <div className="list-item size-container flex flex-acen">
        <span className="main-header flex flex-acen">{`SIZE:`}</span>
        <div className="size-list flex flex-acen">
          {this.sizes.map((size, index) => {
            return (
              <span
                key={index}
                className={classname('size-item', { selected: size === this.state.size })}
                onClick={this.changeMerchAttr.bind(this, size)}
              >
                {size}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
