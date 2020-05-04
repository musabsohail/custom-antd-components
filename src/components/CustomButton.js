import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const CustomButton = ({ onClick, children, ...rest }) => {
  return (
    <Button onClick={onClick} {...rest}>
      {children}
    </Button>
  );
};

CustomButton.defaultProps = {
  onClick: () => {},
  children: '',
};

CustomButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default CustomButton;
