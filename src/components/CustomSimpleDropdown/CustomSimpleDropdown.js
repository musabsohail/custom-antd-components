import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CustomIcon from '../CustomIcon';
import CustomRow from '../CustomRow';
import CustomText from '../CustomText';

import CustomSimpleDropdownList from './CustomSimpleDropdownList';
import CustomSimpleDropdownListItem from './CustomSimpleDropdownListItem';

import './CustomSimpleDropdown.scss';

class CustomSimpleDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { isOpen } = this.state;
    const { text, closeIcon, openIcon, children, style } = this.props;

    const icon = isOpen ? openIcon : closeIcon;

    return (
      <CustomRow style={{ ...style }}>
        <CustomRow onClick={() => this.setState({ isOpen: !isOpen })}>
          <CustomIcon
            type={icon}
            theme="filled"
            className="custom-simple-dropdown-icon"
          />
          <CustomText
            text={text}
            textStyle={{ strong: true }}
            className="custom-simple-dropdown-text"
          />
        </CustomRow>
        {isOpen && children}
      </CustomRow>
    );
  }
}

CustomSimpleDropdown.defaultProps = {
  text: 'Chapter 3',
  children: (
    <CustomSimpleDropdownList>
      {['Item 1-2', 'Item 1-2', 'Item 1-2', 'Item 1-2'].map((itemText) => (
        <CustomSimpleDropdownListItem key={itemText} itemText={itemText} />
      ))}
    </CustomSimpleDropdownList>
  ),
  closeIcon: 'plus-circle',
  openIcon: 'minus-circle',
  style: {},
};

CustomSimpleDropdown.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.oneOfType([
    CustomSimpleDropdownList,
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.element,
  ]),

  closeIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  openIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  style: PropTypes.shape({}),
};

export default CustomSimpleDropdown;
export { CustomSimpleDropdownList, CustomSimpleDropdownListItem };
