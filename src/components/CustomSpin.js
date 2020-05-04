import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

const CustomSpin = ({ children, loading, loadingMsg }) => {
  return (
    <Spin spinning={loading} tip={loadingMsg}>
      {children}
    </Spin>
  );
};

CustomSpin.defaultProps = {
  loading: false,
  loadingMsg: 'Loading...',
  children: [],
};

CustomSpin.propTypes = {
  loading: PropTypes.bool,
  loadingMsg: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default CustomSpin;
