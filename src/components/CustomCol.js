import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';

const CustomCol = ({ children, ...rest }) => {
  return <Col {...rest}>{children}</Col>;
};

CustomCol.defaultProps = {
  children: [],
};

CustomCol.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default CustomCol;
