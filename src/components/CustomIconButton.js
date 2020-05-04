import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import CustomIcon from './CustomIcon';

import './CustomComponents.scss';

const CustomIconButton = ({
  btnText,
  btnType,
  btnStyle,
  btnProps,
  loading,
  disabled,
  icon,
  iconStyle,
  onClick,
  children,
}) => {
  const btnClass =
    (btnType === 'yes' && 'custom-modal-btn') ||
    (btnType === 'no' && 'custom-modal-cancel-btn') ||
    '';
  return (
    <Button
      className={btnClass}
      style={{ ...btnStyle }}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      {...btnProps}
    >
      <CustomIcon type={icon} style={{ fontSize: '1.02rem' }} {...iconStyle} />
      {btnText}
      {children}
    </Button>
  );
};

CustomIconButton.defaultProps = {
  btnText: 'Click Me!',
  btnType: 'yes',
  btnStyle: {},
  btnProps: {},
  loading: false,
  disabled: false,
  icon: '',
  iconStyle: { theme: 'filled' },
  onClick: () => {},
  children: [],
};

CustomIconButton.propTypes = {
  btnText: PropTypes.string,
  btnType: PropTypes.oneOf(['yes', 'no']),
  btnStyle: PropTypes.shape({}),
  btnProps: PropTypes.shape({}),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  iconStyle: PropTypes.shape({}),
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default CustomIconButton;
