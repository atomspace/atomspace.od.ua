import React from "react";
import LeftSidebar from "../../routes/Sidebar/Left";
import * as classnames from "classnames";

export default class Form extends React.Component {
  state = {
    user: {
      name: { value: "", error: false },
      number: { value: "", error: false },
      email: { value: "", error: false },
      information: { value: "", error: false }
    },
    isDisabled: true,
    mobileSupportForm: true
  };
  toggleMobileRequest = () =>
    this.setState({ mobileSupportForm: !this.state.mobileSupportForm });

  createOrder = async () => {
    let user = this.state.user;
    const stateUser = { ...this.state.user };
    let isDisabled = false;
    Object.keys(this.state.user).forEach(key => {
      const value = this.state.user[key].value;
      const validated = () =>{
        const isExist = this.props.inputData.find(val => val.id === key);
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

    this.setState({ isDisabled: true });
    try {
      let data = {
        name: user.name.value,
        email: user.email.value,
        number: +user.number.value,
        information: user.information.value,
      };
      await this.props.createOrder(data);
      this.setState({ isDisabled: false });
      this.props.getBack();
    } catch (e) {
      this.setState({ isDisabled: true });
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
  renderFormBlocks = () => (
    <div className="form-blocks flex flex-cen">
      <div className="form-maintext-block">
        <div className={"form-maintext-block__header"}>
          {this.props.headerText}
        </div>
        <div className={"form-maintext-block__text"}>{this.props.mainText}</div>
      </div>
    </div>
  );

  renderFormRegister = () => (
    <div className="form-main">
      <div className="form-registration">
        {this.props.inputData.map((data, index) => (
          <div className="form-block" key={index}>
            <input
              className={classnames({ error: this.state.user[data.id].error })}
              id={data.id}
              type={data.type}
              placeholder={data.placeholder}
              value={this.state.user[data.id].value}
              onChange={this.onChangeUser}
              onBlur={(e) => this.onBlurUser(e, data.validate)}
            />
          </div>
        ))}
        <div className="request-button-block">
          <button
            className="btn btn-support btn-request"
            onClick={this.createOrder}
          >
            {this.props.beButton}
          </button>
        </div>
      </div>
    </div>
  );
  render() {
    return (
      <div className={"main-form-container"}>
        <div className={"navigation"}>
          <LeftSidebar {...this.props} />
        </div>

        <div className="form-request">
          {this.renderFormBlocks()}
          {this.renderFormRegister()}
        </div>
        <div className="atom-logo" />
        <div className="close-dialog-btn" onClick={this.props.closeForm} />
        <div className="nav_toggle cross" onClick={this.props.closeForm} />
        <div className="mobile-form-request">
          <div className={"header-text"}>{this.props.headerText}</div>
          {this.state.mobileSupportForm
            ? this.renderFormBlocks()
            : this.renderFormRegister()}
          {this.state.mobileSupportForm ? (
            <button
              className="button-next-preview"
              onClick={this.toggleMobileRequest}
            >{`К форме`}</button>
          ) : (
            <button className={classnames("button-next-preview", {disabled: this.state.isDisabled})} onClick={this.createOrder}>
              {this.props.headerText}
            </button>
          )}
        </div>
      </div>
    );
  }
}
