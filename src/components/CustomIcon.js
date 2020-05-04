import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';

const CustomIcon = ({ type, ...rest }) => {
  if (typeof type === 'string') return <Icon type={type} {...rest} />;
  return type;
};

CustomIcon.defaultProps = {
  type: '',
};

CustomIcon.propTypes = {
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default CustomIcon;
