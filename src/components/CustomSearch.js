import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const { Search } = Input;

const CustomSearch = ({ loading, placeholder, onSearch, size }) => {
  return (
    <Search
      placeholder={placeholder}
      loading={loading}
      size={size}
      onSearch={(value) => {
        if (!value.length) return onSearch('');
        return onSearch(value);
      }}
      onChange={({ target: { value } }) => {
        if (!value.length) return onSearch('');
        return onSearch(value);
      }}
    />
  );
};

CustomSearch.defaultProps = {
  loading: false,
  placeholder: 'Search',
  onSearch: () => {},
  style: {},
  size: 'large',
};

CustomSearch.propTypes = {
  loading: PropTypes.bool,
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
  style: PropTypes.shape({}),
  size: PropTypes.oneOf(['large', 'default', 'small']),
};

export default CustomSearch;
