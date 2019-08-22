import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import LeftSidebar from '../../routes/Sidebar/Left';
import { validateUser } from './utils/validation';
import MobileRequestForm from './MobileRequestForm';
import { Button } from '../Button/Button';
import { Loader } from '../Loader';

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.getUserByProps(props.inputData),
      isDisabled: true,
      isLoading: false,
      step: 0,
    };
  }

  getUserByProps(data) {
    return data.reduce((acc, data) => ({ ...acc, [data.id]: { value: '', error: false } }), {});
  }
  prepareData = (user) => Object.keys(user).reduce((acc, key) => ({ ...acc, [key]: user[key].value }), {});

  submitForm = async () => {
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
        await createOrder(data);
        this.setState({ isLoading: false });
        this.props.getBack();
      } catch (e) {
        this.setState({ isLoading: false });
        this.props.getBack();
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

  changeStep = (e) => e.target.innerHTML === 'Назад' ? this.setState({ step: this.state.step - 1 }) : this.setState({ step: this.state.step + 1 })

  renderStepButtons = () => {
    const backButton = <Button className={classname('button-step-change', 'left')} onClick={this.changeStep}>{'Назад'}</Button>
    const nextButton = <Button className={classname('button-step-change', 'right')} onClick={this.changeStep}>{'Далее'}</Button>
    return (
      <div>
        {this.state.step > 0 ? backButton : null}
        {this.state.step < this.props.inputData.length - 1 ? nextButton : null}
      </div>
    );
  }

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
          <Button className="btn btn-support btn-request" loading={this.state.isLoading} onClick={this.submitForm}>
            {this.props.buttonText}
          </Button>
        </div>
      </div>
    </div>
  )

  renderFormRegisterMobile = (step = 0) => {
    let data = this.props.inputData[step], index = this.props.inputData.indexOf(data);
    return (
      <div className="form-main">
        <div className="form-registration">
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
          <div className="request-button-block">
            <Button className="btn btn-support btn-request" loading={this.state.isLoading} onClick={this.submitForm}>
              {this.props.buttonText}
            </Button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    // switch (this.state.step) {
    //   case 0:
    //     this.renderFormBlocks();
    //     break;
    //   case 1:
    //     this.renderFormRegister();
    //     break;
    //   case 2:
    //     this.renderFormRegister();
    //     break;
    //   case 3:
    //     this.renderFormRegister();
    //     break;
    //   case 4:
    //     this.renderFormRegister();
    //     break;
    //   default:
    //     this.renderFormBlocks();
    //     break;
    // }
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
          formRegister={this.renderFormRegisterMobile(this.state.step)}
          stepButtons={this.renderStepButtons()}
          headerText={this.props.headerText}
          submitForm={this.submitForm}
          isLoading={this.state.isLoading}
          changeStep={this.changeStep}
          showButton={this.state.step === this.props.inputData.length-1}
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
