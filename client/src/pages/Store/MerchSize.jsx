import React from "react";
import classname from "classnames";

export default class MerchSize extends React.Component {
  state = {
    index: 2
  };
  sizes = ["S", "M", "L", "XL"];
  changeMerchAttr = index => {
    const order = {
      size: this.sizes[index]
    };
    this.setState({ index });
    this.props.changeMerchAttr(order);
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
                className={classname({'size-item': true, selected: index === this.state.index})}
                onClick={this.changeMerchAttr.bind(this, index)}
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
