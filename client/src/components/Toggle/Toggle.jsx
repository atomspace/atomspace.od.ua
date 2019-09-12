import React from 'react';

export const Toggle = ({ value, onChange }) => (
  <div className="atom-toggle">
    <label htmlFor="ts" className="label">
      <div className="toggle">
        <input id="ts" className="toggle-state" type="checkbox" name="check" value="check" onClick={onChange} />
        <div className="toggle-inner">
          <div className="indicator" />
        </div>
        <div className="active-bg" />
      </div>
      <div className="label-text">{value}</div>
    </label>
  </div>
);

export default Toggle;
