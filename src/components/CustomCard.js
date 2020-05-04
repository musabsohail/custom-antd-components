import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const CustomCard = ({ children, ...rest }) => {
  return <Card {...rest}>{children}</Card>;
};

CustomCard.defaultProps = {
  children: [],
};

CustomCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default CustomCard;
