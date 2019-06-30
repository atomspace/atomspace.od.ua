import React from "react";
import {MEDIA_URL} from "../../utils/config";
import * as classnames from 'classnames';

const mainHeader = "ДЕТАЛИ ЗАКАЗА";
const additionalHeader =
  "Чтоб мы могли вам отправить футболку, заполните поля ниже.";
const way4payLink = 'https://secure.wayforpay.com/button/b4a090420eb14'
const inputData = [
  {
    id: "fullName",
    placeholder: "Имя:",
    type: 'text',
  },
  {
    id: "phone",
    placeholder: "Телефон: (ex. 380635522111)",
    type: 'number',
    validate: (val) => val.match(/^[0-9]{12}$/),
  },
  {
    id: "npMail",
    placeholder: "Отделение новой почты:",
    type: 'text',
  }
];
export default class BuyForm extends React.Component {
  state = {
    user: {
      fullName: {value: "", error: false},
      phone: {value: "", error: false},
      npMail: {value: "", error: false},
    },
    isDisabled: true,
  };

  createOrder = async () => {
    let user = this.state.user;
    const stateUser = {...this.state.user};
    let isDisabled = false;
    Object.keys(this.state.user).forEach(key => {
      const value = this.state.user[key].value;
      const validated = () => {
        const isExist = inputData.find(val => val.id === key);
        return (isExist.validate && !isExist.validate(value))
      };
      stateUser[key].error = !value.length || validated();
      if (!value.length || validated()) {
        isDisabled = true;
      }
    });
    this.setState({
      ...this.state,
      ...stateUser,
      isDisabled
    });
    if (isDisabled) return false;

    this.setState({isDisabled: true});
    try {
      let data = {
        name: user.name.value,
        email: user.email.value,
        number: +user.number.value,
        information: user.information.value,
      };
      await this.props.createOrder(data);
      window.location = way4payLink;
      this.setState({isDisabled: false});
      this.props.getBack();
    } catch (e) {
      this.setState({isDisabled: true});
    }
  };

  onBlurUser = (event, validate) => {
    const name = event.target.id;

    const error = !event.target.value.length || (validate && !validate(event.target.value));
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [name]: {
          ...this.state.user[name],
          error
        }
      },
      isDisabled: error
    });
  };

  onChangeUser = event => {
    const name = event.target.id;
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [name]: {
          ...this.state.user[name],
          value: event.target.value
        }
      }
    });
  };

  renderFormRegister = () => (
    inputData.map((data, index) => (
      <div className={`${data.id}-block`} key={index}>
        <input
          className={classnames({error: this.state.user[data.id].error})}
          id={data.id}
          type={data.type}
          placeholder={data.placeholder}
          value={this.state.user[data.id].value}
          onChange={this.onChangeUser}
          onBlur={(e) => this.onBlurUser(e, data.validate)}
        />
      </div>
    ))
  );

  render() {
    return (
      <div className="buy-form-container">
        <div className="main-header">
          <p>{`Оформить покупку`}</p>
        </div>
        <div className="close-dialog-btn" onClick={this.props.closeForm}/>
        <div className="nav_toggle cross" onClick={this.props.closeForm}/>
        <div className="show-block">
          <div className="text-info">
            <div className="text-info__choice">{`Ваш выбор:`}</div>
            <div className="text-info__name">{this.props.order.name}</div>
            <div className="text-info__size">
              <span className="bold">{`Размер: `}</span>
              {this.props.order.size}
            </div>
          </div>
          <div className="merch-photo">
            <img
              alt="merch"
              className="image"
              src={`${MEDIA_URL}${this.props.order.avatar_url}`}
            />
          </div>
        </div>

        <div className="order-block">
          <div className="order-items">
            <h1 className="order-items__header">{mainHeader}</h1>
            <h2 className="additional-header">{additionalHeader}</h2>
            <div className="order-form">
              {this.renderFormRegister()}
            </div>
            <div className="order-request">
              <button
                className={classnames("btn btn-support btn-request pay-button", {disabled: this.state.isDisabled})}
                onClick={this.createOrder}>{`Оплатить`}</button>
              <h3 className="price-info">{`₴ ${this.props.order.price}`}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
