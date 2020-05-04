import React from 'react';
import PropTypes from 'prop-types';
import { Anchor } from 'antd';

const { Link } = Anchor;

const CustomClickableText = ({ text, onClick, style, ...rest }) => {
  return (
    <Anchor onClick={onClick} {...rest}>
      <Link href title={text} style={{ ...style }} />
    </Anchor>
  );
};

CustomClickableText.defaultProps = {
  text: 'Click Me',
  style: {
    color: '#30bda8',
  },
  onClick: () => {},
};

CustomClickableText.propTypes = {
  text: PropTypes.string,
  style: PropTypes.shape({}),
  onClick: PropTypes.func,
};

export default CustomClickableText;
