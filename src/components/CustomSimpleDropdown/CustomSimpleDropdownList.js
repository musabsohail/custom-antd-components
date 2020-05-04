import React from 'react';
import PropTypes from 'prop-types';

import CustomSimpleDropdownListItem from './CustomSimpleDropdownListItem';

import './CustomSimpleDropdown.scss';

const CustomSimpleDropdownList = ({ children, classNames, ...rest }) => {
  return (
    <div className="custom-simple-dropdown swing-in-left-fwd">
      <ul className={`custom-simple-dropdown-list ${classNames}`} {...rest}>
        {children}
      </ul>
    </div>
  );
};

CustomSimpleDropdownList.defaultProps = {
  classNames: '',
  children: [],
};

CustomSimpleDropdownList.propTypes = {
  classNames: PropTypes.string,
  children: PropTypes.oneOfType([
    CustomSimpleDropdownListItem,
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.element,
  ]),
};

export default CustomSimpleDropdownList;
