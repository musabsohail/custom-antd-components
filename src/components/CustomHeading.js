import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const CustomHeading = ({
  headingText,
  subHeadingText,
  headingLevel,
  headingStyle,
  subHeadingStyle,
}) => {
  return (
    <>
      <Title level={headingLevel} style={{ ...headingStyle }}>
        {headingText}
      </Title>
      <Text {...subHeadingStyle}>{subHeadingText}</Text>
    </>
  );
};

CustomHeading.defaultProps = {
  headingText: '',
  subHeadingText: '',
  headingLevel: 4,
  headingStyle: {},
  subHeadingStyle: { secondary: 'true' },
};

CustomHeading.propTypes = {
  headingText: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
  ]),
  subHeadingText: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
  ]),
  headingLevel: PropTypes.oneOf([1, 2, 3, 4]),
  headingStyle: PropTypes.shape({}),
  subHeadingStyle: PropTypes.shape({}),
};

export default CustomHeading;
