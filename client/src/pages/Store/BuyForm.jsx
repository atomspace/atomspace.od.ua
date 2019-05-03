import React, { PureComponent } from "react";

const mainHeader = "ДЕТАЛИ ЗАКАЗА";
const additionalHeader =
  "Чтоб мы могли вам отправить футболку, заполните поля ниже.";

export default class BuyForm extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="buy-form-container">
        <div className="close-dialog-btn" onClick={this.props.closeForm} />
        <div className="nav_toggle cross" onClick={this.props.closeForm} />
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
            <img className="image" src={this.props.order.image} />
          </div>
        </div>
        <div className="order-block">
          <div className="order-items">
            <h1 className="main-header">{mainHeader}</h1>
            <h2 className="additional-header">{additionalHeader}</h2>
            <div className="order-form">
              <div className="fio-block">
                <input
                  type="text"
                  className="fio-input"
                  placeholder="Фамилия Имя:"
                />
              </div>
              <div className="phone">
                <input type="number" className="phone" placeholder="Телефон:" />
              </div>
              <div className="np-place">
                <input
                  type="text"
                  className="np-place-input"
                  placeholder="Отделение новой почты:"
                />
              </div>
            </div>
            <div className="order-request">
              <button className="btn btn-support btn-request pay-button">{`Оплатить`}</button>
              <h3 className="cost-info">{`₴ ${this.props.order.cost}`}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
