import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Popover, Icon } from 'antd';

import './CustomComponents.scss';

const { Item } = Menu;

const GroupOptions = ({ dataId, menuOptions, onClosePopover }) => (
  <Menu className="custom-popover-menu">
    {menuOptions.map(({ key, element, action }) => {
      if (!action)
        return (
          <Item
            className="custom-popover-menu-item"
            key={key}
            onClick={() => onClosePopover()}
          >
            {element}
          </Item>
        );
      return (
        <Item
          key={key}
          className="custom-popover-menu-item"
          onClick={() => {
            action(dataId);
            onClosePopover();
          }}
        >
          {element}
        </Item>
      );
    })}
  </Menu>
);

const CustomPopover = ({
  dataId,
  menuOptions,
  placement,
  trigger,
  children,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Popover
      placement={placement}
      trigger={trigger}
      content={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <GroupOptions
          dataId={dataId}
          menuOptions={menuOptions}
          onClosePopover={() => setIsVisible(false)}
        />
      }
      visible={isVisible}
      onVisibleChange={(visible) => setIsVisible(visible)}
      {...rest}
    >
      {children}
    </Popover>
  );
};

GroupOptions.defaultProps = {
  dataId: 'Missing "dataId"',
  menuOptions: [
    {
      key: 0,
      element: <Icon type="info" />,
      action: () => {},
    },
  ],
  onClosePopover: () => {},
};

GroupOptions.propTypes = {
  dataId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  menuOptions: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      element: PropTypes.element,
      action: PropTypes.func,
    })
  ),
  onClosePopover: PropTypes.func,
};

CustomPopover.defaultProps = {
  placement: 'topRight',
  trigger: 'click',
  dataId: '',
  menuOptions: [],
  children: [],
};

CustomPopover.propTypes = {
  dataId: GroupOptions.propTypes.dataId,
  menuOptions: GroupOptions.propTypes.menuOptions,
  trigger: PropTypes.oneOf(['click', 'hover', 'focus']),
  placement: PropTypes.oneOf([
    'topLeft',
    'top',
    'topRight',
    'leftTop',
    'left',
    'leftBottom',
    'rightTop',
    'right',
    'rightBottom',
    'bottomLeft',
    'bottom',
    'bottomRight',
  ]),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default CustomPopover;
