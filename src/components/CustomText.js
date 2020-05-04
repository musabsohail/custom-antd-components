import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Text } = Typography;

const CustomText = ({ text, textStyle, ...rest }) => {
  return (
    <Text {...textStyle} {...rest}>
      {text}
    </Text>
  );
};

CustomText.defaultProps = {
  text: '',
  textStyle: { secondary: 'true' },
};

CustomText.propTypes = {
  text: PropTypes.string,
  textStyle: PropTypes.shape({}),
};

export default CustomText;
