import React from 'react';
import cn from 'classnames';
import Select from 'react-select';

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const SelectComponent = ({ user, data, handleInputUser }) => {
  const handleSelect = data => {
    const event = {
      target: {
        id: 'interest',
        type: 'select',
        value: data.value || '',
      },
    };
    return handleInputUser({ validate: undefined }, event);
  };
  const styles = {
    control: styles => ({
      ...styles,
      backgroundColor: 'transparent',
      border: 0,
      borderBottom: '1px solid',
      borderRadius: 0,
      borderColor: '#b2b2b2 !important',
    }),
    input: styles => ({ ...styles, padding: '0 !important' }),
    placeholder: styles => ({
      ...styles,
      padding: '0 !important',
      color: 'black',
    }),
  };
  return (
    <Select
      className={cn('dropdown', { error: user[data.id].error })}
      id={data.id}
      placeholder={data.placeholder}
      defaultValue={data.options[0].label}
      options={data.options}
      formatGroupLabel={formatGroupLabel}
      onChange={handleSelect}
      styles={styles}
    />
  );
};

export default SelectComponent;
