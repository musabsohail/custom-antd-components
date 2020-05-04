import React from 'react';
import PropTypes from 'prop-types';

import CustomHeading from './CustomHeading';
import CustomIconButton from './CustomIconButton';
import CustomRow from './CustomRow';
import CustomSelect from './CustomSelect';

const fieldStyle = {
  width: '470px',
};

const rowBreak = {
  marginTop: '30px',
};

const btnStyles = {
  marginRight: '20px',
};

const CustomSelectModalScreen = ({
  heading,
  subHeading,

  selectLabel,
  selectLoading,
  selectDisabled,
  selectPlaceholder,
  selectDispValue,
  selectReturnValue,
  selectOptions,

  okBtnText,
  cancelBtnText,

  okBtnLoading,
  okBtnDisabled,
  cancelBtnLoading,
  cancelBtnDisabled,

  okBtnProps,
  cancelBtnProps,

  onSelectChange,
  onOkBtnClick,
  onCancelBtnClick,

  children,
}) => {
  return (
    <>
      <CustomRow>
        <CustomHeading headingText={heading} subHeadingText={subHeading} />
      </CustomRow>
      <CustomRow style={{ ...rowBreak }}>
        <CustomSelect
          selectStyle={{ ...fieldStyle }}
          type="object"
          loading={selectLoading}
          disabled={selectDisabled}
          label={selectLabel}
          selectPlaceholder={selectPlaceholder}
          selectOptions={selectOptions}
          dispValue={selectDispValue}
          returnValue={selectReturnValue}
          onChange={onSelectChange}
        />
      </CustomRow>
      {children}
      <CustomRow style={{ ...rowBreak }}>
        <CustomIconButton
          btnText={okBtnText}
          btnStyle={{ ...btnStyles }}
          loading={okBtnLoading}
          disabled={okBtnDisabled}
          onClick={onOkBtnClick}
          {...okBtnProps}
        />
        <CustomIconButton
          btnText={cancelBtnText}
          btnStyle={{ ...btnStyles }}
          loading={cancelBtnLoading}
          disabled={cancelBtnDisabled}
          btnType="no"
          onClick={onCancelBtnClick}
          {...cancelBtnProps}
        />
      </CustomRow>
    </>
  );
};

CustomSelectModalScreen.defaultProps = {
  heading: '',
  subHeading: '',

  selectLabel: '',
  selectLoading: false,
  selectDisabled: false,
  selectPlaceholder: '',
  selectDispValue: '',
  selectReturnValue: '',
  selectOptions: [],

  okBtnText: 'Create',
  cancelBtnText: 'Cancel',

  okBtnLoading: false,
  okBtnDisabled: false,
  cancelBtnLoading: false,
  cancelBtnDisabled: false,

  okBtnProps: {},
  cancelBtnProps: {},

  onSelectChange: () => console.log('onSelectChange func missing in props'),
  onOkBtnClick: () => console.log('onOkBtnClick func missing in props'),
  onCancelBtnClick: () => console.log('onCancelBtnClick func missing in props'),

  children: [],
};

CustomSelectModalScreen.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,

  selectLabel: CustomSelect.propTypes.label,
  selectLoading: CustomSelect.propTypes.loading,
  selectDisabled: CustomSelect.propTypes.disabled,
  selectPlaceholder: CustomSelect.propTypes.selectPlaceholder,
  selectDispValue: CustomSelect.propTypes.dispValue,
  selectReturnValue: CustomSelect.propTypes.returnValue,
  selectOptions: CustomSelect.propTypes.selectOptions,

  okBtnText: PropTypes.string,
  cancelBtnText: PropTypes.string,

  okBtnLoading: PropTypes.bool,
  okBtnDisabled: PropTypes.bool,
  cancelBtnLoading: PropTypes.bool,
  cancelBtnDisabled: PropTypes.bool,

  okBtnProps: PropTypes.shape({}),
  cancelBtnProps: PropTypes.shape({}),

  onSelectChange: PropTypes.func,
  onOkBtnClick: PropTypes.func,
  onCancelBtnClick: PropTypes.func,
  /**
   * Extensible
   */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default CustomSelectModalScreen;
