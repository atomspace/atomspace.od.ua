import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withTranslation } from 'react-i18next';
import LeftSidebar from '../../routes/Sidebar/Left';
import { validateUser } from './utils/validation';
import MobileRequestForm from './MobileRequestForm';
import { Button } from '../Button/Button';
import Confirm from './Confirm';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.getUserByProps(props.inputData),
      isDisabled: true,
      isLoading: false,
      step: 0,
      sended: false,
    };
  }

  getUserByProps(data) {
    return data.reduce((acc, val) => ({ ...acc, [val.id]: { value: '', error: false } }), {});
  }

  prepareData = (user) => Object.keys(user).reduce((acc, key) => ({ ...acc, [key]: user[key].value }), {});

  submitForm = async () => {
    const { user } = this.state;
    const { inputData, createOrder, getBack } = this.props;
    const { isDisabled, stateUser } = validateUser(user, inputData);
    this.setState((state) => ({
      ...state,
      ...stateUser,
    }));
    if (!isDisabled) {
      const data = this.prepareData(user);
      try {
        this.setState({ isLoading: true });
        await createOrder(data);
        this.setState({ isLoading: false, sended: true });
        getBack();
      } catch (e) {
        this.setState({ isLoading: false });
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
    this.setState((state) => ({
      ...state,
      user: {
        ...state.user,
        [id]: {
          ...state.user[id],
          error,
          value,
        },
      },
      isDisabled: error,
    }));
  };

  renderFormBlocks = () => {
    const { headerText, mainText } = this.props;
    return (
      <div className="form-blocks flex flex-cen">
        <div className="form-maintext-block">
          <div className="form-maintext-block__header">{headerText}</div>
          <div className="form-maintext-block__text">{mainText}</div>
        </div>
      </div>
    );
  };

  changeStep = ({ target: { innerHTML } }) => {
    const { t } = this.props;
    return innerHTML === t('back')
      ? this.setState((state) => ({ step: state.step - 1 }))
      : this.setState((state) => ({ step: state.step + 1 }));
  };

  renderStepButtons = () => {
    const { step } = this.state;
    const { inputData, t } = this.props;
    const NavButton = ({ title, isBack }) => (
      <Button className={cn('button-step-change', isBack ? 'left' : 'right')} onClick={this.changeStep}>
        {title}
      </Button>
    );
    return (
      <div>
        {step > 0 ? <NavButton isBack title={t('back')} /> : null}
        {step < inputData.length - 1 ? <NavButton isBack={false} title={t('forward')} /> : null}
      </div>
    );
  };

  renderFormRegister = () => {
    const { inputData, buttonText } = this.props;
    const { user, isLoading, sended } = this.state;
    return !sended ? (
      <div className="form-main">
        <div className="form-registration">
          {inputData.map((data) => (
            <div className="form-block" key={data.id}>
              <input
                className={cn({ error: user[data.id].error })}
                id={data.id}
                type={data.id === 'birth' ? 'text' : data.type}
                placeholder={data.placeholder}
                value={user[data.id].value || data.defaultValue}
                onChange={this.handleInputUser.bind(this, data)}
                onFocus={this.handleInputUser.bind(this, data)}
              />
            </div>
          ))}
          <div className="request-button-block">
            <Button className="btn btn-support btn-request" loading={isLoading} onClick={this.submitForm}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    ) : null;
  };

  renderFormRegisterMobile = (step = 0) => {
    const { inputData, buttonText } = this.props;
    const { user, isLoading } = this.state;
    const data = inputData[step];
    const index = inputData.indexOf(data);
    return (
      <div className="form-main">
        <div className="form-registration">
          <div className="form-block" key={index}>
            <input
              className={cn({ error: user[data.id].error })}
              id={data.id}
              type={data.id === 'birth' ? 'text' : data.type}
              placeholder={data.placeholder}
              value={user[data.id].value || data.defaultValue}
              onChange={this.handleInputUser.bind(this, data)}
              onFocus={this.handleInputUser.bind(this, data)}
            />
          </div>
          <div className="request-button-block">
            <Button className="btn btn-support btn-request" loading={isLoading} onClick={this.submitForm}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { getBack, headerText, inputData, confirmMessage } = this.props;
    const { step, isLoading, sended } = this.state;
    return (
      <div className="main-form-container">
        <div className="navigation">
          <LeftSidebar {...this.props} />
        </div>

        <div className="form-request">
          {this.renderFormBlocks()}
          {this.renderFormRegister()}
          {sended ? <Confirm confirmMessage={confirmMessage} /> : null}
        </div>
        <div className="atom-logo" />
        <div className="close-dialog-btn" onClick={getBack} />
        <div className="nav_toggle arrow" onClick={getBack} />
        <MobileRequestForm
          formBlocks={this.renderFormBlocks()}
          formRegister={!sended ? this.renderFormRegisterMobile(step) : null}
          stepButtons={this.renderStepButtons()}
          confirmMessage={sended ? <Confirm confirmMessage={confirmMessage} /> : null}
          headerText={headerText}
          submitForm={this.submitForm}
          isLoading={isLoading}
          changeStep={this.changeStep}
          showButton={step === inputData.length - 1}
        />
      </div>
    );
  }
}

UserForm.propTypes = {
  headerText: PropTypes.string,
  buttonText: PropTypes.string,
  mainText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  getBack: PropTypes.func.isRequired,
  inputData: PropTypes.arrayOf(PropTypes.object),
};

UserForm.defaultProps = {
  headerText: '',
  buttonText: '',
  inputData: [],
};

export default withTranslation('')(UserForm);
