import React from 'react';
import PropTypes from 'prop-types';

import './CustomSimpleDropdown.scss';

const CustomSimpleDropdownListItem = ({ itemText, classNames, ...rest }) => {
  return (
    <li className={`custom-simple-dropdown-list-item ${classNames}`} {...rest}>
      <span>{itemText}</span>
    </li>
  );
};

CustomSimpleDropdownListItem.defaultProps = {
  classNames: '',
  itemText: 'Sample Dropdown Item',
};

CustomSimpleDropdownListItem.propTypes = {
  classNames: PropTypes.string,
  itemText: PropTypes.string,
};

export default CustomSimpleDropdownListItem;
