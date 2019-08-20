import React from 'react';
import classname from 'classnames';
import LocalStorage from '../../localStorage';

export default class MerchSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: props.size ? props.size : 'M',
    };
  }
  sizes = ['S', 'M', 'L', 'XL'];

  componentDidMount() {
    const { size } = this.props;
    const sizeObj = { size: this.state.size };
    this.setState(sizeObj);
    this.props.changeMerchAttr(sizeObj);
  }

  changeMerchAttr = (size) => {
    this.setState({ size });
    this.props.changeMerchAttr({ size });
  };

  render() {
    return (
      <div className="list-item size-container flex flex-acen">
        <span className="main-header flex flex-acen">SIZE:</span>
        <div className="size-list flex flex-acen">
          {this.sizes.map((size, index) => (
            <span
              key={index}
              className={classname('size-item', { selected: size === this.state.size })}
              onClick={this.changeMerchAttr.bind(this, size)}
            >
              {size}
            </span>
          ))}
        </div>
      </div>
    );
  }
}
