import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';

const CustomRow = ({ children, ...rest }) => {
  return <Row {...rest}>{children}</Row>;
};

CustomRow.defaultProps = {
  children: [],
};

CustomRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default CustomRow;
