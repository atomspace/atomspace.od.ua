import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import LeftSidebar from '../../routes/Sidebar/Left';
import { validateUser } from './utils/validation';
import MobileRequestForm from './MobileRequestForm';
import { Button } from '../Button/Button';

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: { value: '', error: false },
        birth: { value: '', error: false },
        number: { value: '', error: false },
        email: { value: '', error: false },
        information: { value: '', error: false },
      },
      isDisabled: true,
      isLoading: false,
    };
  }

  createOrder = async () => {
    const { user } = this.state;
    const { inputData, createOrder, getBack } = this.props;
    const { isDisabled, stateUser } = validateUser(user, inputData);
    this.setState({
      ...this.state,
      ...stateUser,
    });

    if (!isDisabled) {
      const data = {
        name: user.name.value,
        birth: user.birth.value,
        email: user.email.value,
        number: +user.number.value,
        information: user.information.value,
      };
      try {
        this.setState({ isLoading: true });
        // await createOrder(data);
        setTimeout(() => {
          this.setState({ isLoading: false });
          console.log(this.state.isLoading);
          // getBack();
        }, 3000);
      } catch (e) {
        getBack();
      }
    }
  };

  handleInputUser = (validate, event) => {
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

  renderFormBlocks = () => (
    <div className="form-blocks flex flex-cen">
      <div className="form-maintext-block">
        <div className="form-maintext-block__header">{this.props.headerText}</div>
        <div className="form-maintext-block__text">{this.props.mainText}</div>
      </div>
    </div>
  );

  handleBirth = (e) => {
    e.target.type === 'text' ? (e.target.type = 'date') : (e.target.type = 'text');
  };

  renderFormRegister = () => (
    <div className="form-main">
      <div className="form-registration">
        {this.props.inputData.map((data, index) => (
          <div className="form-block" key={index}>
            <input
              className={classname({ error: this.state.user[data.id].error })}
              id={data.id}
              type={data.type}
              placeholder={data.placeholder}
              value={this.state.user[data.id].value || data.defaultValue}
              onChange={this.handleInputUser.bind(this, data.validate)}
              onFocus={this.handleInputUser.bind(this, data.validate)}
            />
          </div>
        ))}
        <div className="request-button-block">
          <Button
            className="btn btn-support btn-request"
            loading={this.state.isLoading.toString()}
            onClick={this.createOrder}
          >
            {this.props.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );

  render() {
    return (
      <div className="main-form-container">
        <div className="navigation">
          <LeftSidebar {...this.props} />
        </div>

        <div className="form-request">
          {this.renderFormBlocks()}
          {this.renderFormRegister()}
        </div>
        <div className="atom-logo" />
        <div className="close-dialog-btn" onClick={this.props.getBack} />
        <div className="nav_toggle cross" onClick={this.props.getBack} />
        <MobileRequestForm
          formBlocks={this.renderFormBlocks()}
          formRegister={this.renderFormRegister()}
          headerText={this.props.headerText}
          createOrder={this.createOrder}
        />
      </div>
    );
  }
}

UserForm.propTypes = {
  headerText: PropTypes.string,
  buttonText: PropTypes.string,
  mainText: PropTypes.any,
  getBack: PropTypes.func.isRequired,
  inputData: PropTypes.any,
};
