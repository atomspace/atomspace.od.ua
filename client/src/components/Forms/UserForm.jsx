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
      user: this.getUserByProps(props),
      isDisabled: true,
      isLoading: false,
    };
  }

  getUserByProps(props) {
    return props.inputData.reduce((acc, data) => ({ ...acc, [data.id]: { value: '', error: false } }), {});
  }
  prepareData = (user) => Object.keys(user).map((key) => ({ [key]: user[key].value }));

  createOrder = async () => {
    const { user } = this.state;
    const { inputData, createOrder, getBack } = this.props;
    const { isDisabled, stateUser } = validateUser(user, inputData);
    this.setState({
      ...this.state,
      ...stateUser,
    });
    if (!isDisabled) {
      const data = this.prepareData(user);
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

  handleInputUser = (data, event) => {
    const { id, value } = event.target;
    if (id === 'birth') {
      event.target.type = 'date';
    }
    const error = !value.length || (data.validate && !data.validate(value));
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [id]: {
          ...this.state.user[id],
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

  renderFormRegister = () => (
    <div className="form-main">
      <div className="form-registration">
        {this.props.inputData.map((data, index) => (
          <div className="form-block" key={index}>
            <input
              className={classname({ error: this.state.user[data.id].error })}
              id={data.id}
              type={data.id === 'birth' ? 'text' : data.type}
              placeholder={data.placeholder}
              value={this.state.user[data.id].value || data.defaultValue}
              onChange={this.handleInputUser.bind(this, data)}
              onFocus={this.handleInputUser.bind(this, data)}
            />
          </div>
        ))}
        <div className="request-button-block">
          <Button className="btn btn-support btn-request" loading={this.state.isLoading} onClick={this.createOrder}>
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
          isLoading={this.state.isLoading}
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
