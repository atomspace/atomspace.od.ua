import React from 'react';
import PropTypes from 'prop-types';
import confirmPhoto from '../../assets/images/icons/confirm.svg';
import { ImageLoader } from '../ImageLoader';

const Confirm = ({ confirmMessage }) => (
  <div className="confirm-tick">
    <ImageLoader alt="Confirm photo" src={confirmPhoto} />
    {confirmMessage}
  </div>
);

Confirm.propTypes = {
  confirmMessage: PropTypes.element.isRequired,
};

export default Confirm;
