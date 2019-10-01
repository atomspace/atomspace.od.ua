import React from 'react';
import cl from 'classnames';
import { withTranslation } from 'react-i18next';

class MerchSize extends React.Component {
  sizes = [
    { id: 1, size: 'S' },
    { id: 2, size: 'M' },
    { id: 3, size: 'L' },
    { id: 4, size: 'XL' },
  ];

  constructor(props) {
    super(props);
    this.state = {
      size: props.size ? props.size : 'M',
    };
  }

  componentDidMount() {
    const { changeMerchAttr } = this.props;
    const { size } = this.state;
    const sizeObj = { size };
    this.setState(sizeObj);
    changeMerchAttr(sizeObj);
  }

  changeMerchAttr = size => {
    const { changeMerchAttr } = this.props;
    this.setState({ size });
    changeMerchAttr({ size });
  };

  render() {
    const { size } = this.state;
    const { t } = this.props;
    return (
      <div className="list-item size-container">
        <div className="size-block">
          <span className="main-header flex flex-acen">{t('size')}</span>
          <div className="size-list flex flex-acen">
            {this.sizes.map(val => (
              <span
                role="presentation"
                key={val.id}
                className={cl('size-item', { selected: val.size === size })}
                onClick={this.changeMerchAttr.bind(this, val.size)}
              >
                {val.size}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation('')(MerchSize);
