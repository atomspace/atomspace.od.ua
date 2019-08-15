import React from 'react';
import classname from 'classnames';
import { MEDIA_URL } from '../../utils/config';
import { validateUser } from './validation';
import validators from '../../utils/validators';
import { ImageLoader } from '../ImageLoader';
import { Loader } from '../Loader';


const mainHeader = 'ДЕТАЛИ ЗАКАЗА';
const additionalHeader = 'Чтоб мы могли вам отправить футболку, заполните поля ниже.';
const way4payLink = 'https://secure.wayforpay.com/button/b4a090420eb14';
const inputData = [
  {
    id: 'fullName',
    placeholder: 'Имя:',
    type: 'text',
  },
  {
    id: 'phone',
    placeholder: 'Телефон: (ex. 0635522111)',
    type: 'number',
    validate: validators.phone,
  },
  {
    id: 'npMail',
    placeholder: 'Отделение новой почты:',
    type: 'text',
  },
];
export default class BuyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        fullName: { value: '', error: false },
        phone: { value: '', error: false },
        npMail: { value: '', error: false },
      },
      isDisabled: true,
      loading: false
    };
  }

  createOrder = async () => {
    this.setState({loading: true});
    const { user } = this.state;
    const { inputData } = this.props;
    const { isDisabled, stateUser } = validateUser(user, inputData);

    this.setState({
      ...this.state,
      ...stateUser,
    });

    if (!isDisabled) {
      try {
        const data = {
          name: user.name.value,
          email: user.email.value,
          number: +user.number.value,
          information: user.information.value,
        };
        let res = await this.props.createOrder(data);
        if (res.length !== 0){
          this.setState({loading: false});
          window.location = way4payLink;
          this.props.getBack();
        }
      } catch (e) {
        this.setState({loading: false});
        this.props.getBack();
      }
    }
  };

  handleInputUser = (event, validate) => {
    const name = event.target.id;
    const { value } = event.target;
    const error = !value.length || (validate && !validate(value));
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [name]: {
          ...this.state.user[name],
          error,
          value,
        },
      },
      isDisabled: error,
    });
  };

  renderFormRegister = () =>
    inputData.map((data, index) => (
      <div className={`${data.id}-block`} key={index}>
        <input
          className={classname({ error: this.state.user[data.id].error })}
          id={data.id}
          type={data.type}
          placeholder={data.placeholder}
          value={this.state.user[data.id].value}
          onChange={(e) => this.handleInputUser(e, data.validate)}
          onBlur={(e) => this.handleInputUser(e, data.validate)}
        />
      </div>
    ));

  render() {
    return (
      <div className="buy-form-container">
        <div className="main-header">
          <p>Оформить покупку</p>
        </div>
        <div className="close-dialog-btn" onClick={this.props.getBack} />
        <div className="nav_toggle cross" onClick={this.props.getBack} />
        <div className="show-block">
          <div className="text-info">
            <div className="text-info__choice">Ваш выбор:</div>
            <div className="text-info__name">{this.props.order.name}</div>
            <div className="text-info__size">
              <span className="bold">Размер: </span>
              {this.props.order.size}
            </div>
          </div>
          <div className="merch-photo">
            <ImageLoader alt="merch" className="image" src={`${MEDIA_URL}${this.props.order.avatar_url}`} />
          </div>
        </div>

        <div className="order-block">
          <div className="order-items">
            <h1 className="order-items__header">{mainHeader}</h1>
            <h2 className="additional-header">{additionalHeader}</h2>
            <div className="order-form">{this.renderFormRegister()}</div>
            <div className="order-request">
              <button className={classname('btn btn-support btn-request pay-button')} onClick={this.createOrder}>
                {this.state.loading ? <Loader /> : 'Оплатить'}
              </button>
              <h3 className="price-info">{`₴ ${this.props.order.price}`}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
