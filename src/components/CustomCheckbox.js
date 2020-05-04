import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

const CustomCheckbox = ({ checked, dispValue, returnValue, onChange, ...rest }) => {
  return (
    <>
      <Checkbox
        checked={checked}
        onChange={({ target: { checked: val } }) => {
          if (returnValue) return onChange(returnValue);
          return onChange(val);
        }}
        {...rest}
      />
      {` ${dispValue}`}
    </>
  );
};

CustomCheckbox.defaultProps = {
  checked: false,
  dispValue: 'Default',
  returnValue: 0,
  onChange: () => {},
  style: { color: '#30bda0', marginRight: '18px' },
};

CustomCheckbox.propTypes = {
  checked: PropTypes.bool,
  dispValue: PropTypes.string,
  returnValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  style: PropTypes.shape({}),
};

export default CustomCheckbox;
