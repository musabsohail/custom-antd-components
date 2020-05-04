import React from 'react';
import PropTypes from 'prop-types';

import CustomHeading from './CustomHeading';
import CustomIconButton from './CustomIconButton';
import CustomInput from './CustomInput';
import CustomRow from './CustomRow';

const fieldStyle = {
  width: '470px',
};

const rowBreak = {
  marginTop: '30px',
};

const btnStyles = {
  marginRight: '20px',
};

const CustomInputModalScreen = ({
  heading,
  subHeading,
  inputLabel,
  inputPlaceholder,
  inputValue,
  inputProps,

  okBtnText,
  cancelBtnText,

  okBtnLoading,
  okBtnDisabled,
  cancelBtnLoading,
  cancelBtnDisabled,

  okBtnProps,
  cancelBtnProps,

  showOk,
  showCancel,

  onInputChange,
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
        <CustomInput
          inputStyle={{ ...fieldStyle }}
          label={inputLabel}
          inputPlaceholder={inputPlaceholder}
          inputValue={inputValue}
          onChange={onInputChange}
          {...inputProps}
        />
      </CustomRow>
      {children}
      <CustomRow style={{ ...rowBreak }}>
        {showOk && (
          <CustomIconButton
            btnText={okBtnText}
            btnStyle={{ ...btnStyles }}
            loading={okBtnLoading}
            disabled={okBtnDisabled}
            onClick={onOkBtnClick}
            {...okBtnProps}
          />
        )}
        {showCancel && (
          <CustomIconButton
            btnText={cancelBtnText}
            btnStyle={{ ...btnStyles }}
            loading={cancelBtnLoading}
            disabled={cancelBtnDisabled}
            btnType="no"
            onClick={onCancelBtnClick}
            {...cancelBtnProps}
          />
        )}
      </CustomRow>
    </>
  );
};

CustomInputModalScreen.defaultProps = {
  heading: '',
  subHeading: '',
  inputLabel: '',
  inputPlaceholder: '',
  inputValue: '',
  inputProps: {},

  okBtnText: 'Create',
  cancelBtnText: 'Cancel',

  okBtnLoading: false,
  okBtnDisabled: false,
  cancelBtnLoading: false,
  cancelBtnDisabled: false,

  okBtnProps: {},
  cancelBtnProps: {},

  showOk: true,
  showCancel: true,

  onInputChange: () => {},
  onOkBtnClick: () => {},
  onCancelBtnClick: () => {},

  children: [],
};

CustomInputModalScreen.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  inputLabel: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputValue: PropTypes.string,
  inputProps: PropTypes.shape({}),

  okBtnText: PropTypes.string,
  cancelBtnText: PropTypes.string,

  okBtnLoading: PropTypes.bool,
  okBtnDisabled: PropTypes.bool,
  cancelBtnLoading: PropTypes.bool,
  cancelBtnDisabled: PropTypes.bool,

  okBtnProps: PropTypes.shape({}),
  cancelBtnProps: PropTypes.shape({}),

  showOk: PropTypes.bool,
  showCancel: PropTypes.bool,

  onInputChange: PropTypes.func,
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

export default CustomInputModalScreen;
