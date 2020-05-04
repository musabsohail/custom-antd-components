import React from 'react';
import PropTypes from 'prop-types';

import CustomIcon from './CustomIcon';

const CustomMoreIcon = ({ type, ...rest }) => {
  const iconType = type === 'horizontal' ? 'ellipsis' : 'more';

  return (
    <CustomIcon
      style={{
        fontSize: '1.2rem',
        fontWeight: 'bolder',
      }}
      type={iconType}
      {...rest}
    />
  );
};

CustomMoreIcon.defaultProps = {
  type: 'vertical',
};

CustomMoreIcon.propTypes = {
  type: PropTypes.oneOf(['vertical', 'horizontal']),
};

export default CustomMoreIcon;
