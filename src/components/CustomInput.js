import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Typography } from 'antd';

const { Text } = Typography;

const ErrMsg = ({ msg }) => (
  <p style={{ fontSize: '0.75rem', color: '#ed5353' }}>{msg}</p>
);
ErrMsg.propTypes = {
  msg: PropTypes.string.isRequired,
};

const validateLength = (input, validLength) => {
  if (input.length > validLength) return true;
  return false;
};

const validateInput = (input, invalidChars) => {
  const lastChar = input.length - 1;
  if (invalidChars.indexOf(input[lastChar]) > -1) return true;
  return false;
};

const CustomInput = ({
  type,
  label,
  labelStyle,
  antTextProps,

  inputId,
  inputValue,
  inputPlaceholder,
  inputStyle,

  disabled,
  isRequiredErr,
  isRequired,

  errMsg,

  invalidChars,
  validLength,

  onChange,
  ...rest
}) => {
  const [validationErr, setValidationErr] = useState(false);
  const [validationErrMsg, setValidationErrMsg] = useState('');

  const validateIsRequired = (input) => {
    if (isRequired && input.length === 0) {
      setValidationErr(true);
      setValidationErrMsg(`  Field is required.`);
      return false;
    }
    return true;
  };

  const validatorFunction = (input) => {
    if (validateLength(input, validLength)) {
      setValidationErr(true);
      setValidationErrMsg(`  Max length ${validLength} characters`);
      return false;
    }

    if (validateInput(input, invalidChars)) {
      const chars = invalidChars.join(' ');
      setValidationErr(true);
      setValidationErrMsg(`  Invalid Characters: ${chars}`);
      return false;
    }

    return true;
  };

  return (
    <>
      {label && typeof label === 'string' ? (
        <Text style={{ ...labelStyle }} {...antTextProps}>
          {label}
          {validationErr && (
            <span style={{ color: 'red', fontSize: '0.80rem' }}>
              {validationErrMsg}
            </span>
          )}
        </Text>
      ) : (
        label
      )}
      {isRequiredErr && <ErrMsg msg={errMsg} />}
      <Input
        id={inputId}
        disabled={disabled}
        style={{ ...inputStyle }}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={({ target: { value } }) => {
          setValidationErr(false);

          if (!validateIsRequired(value)) return onChange('');

          if (!value.length) return onChange('');

          if (validatorFunction(value)) return onChange(value);

          // return prevValue on validation failure
          return onChange(inputValue);
        }}
        {...rest}
      />
    </>
  );
};

CustomInput.defaultProps = {
  type: 'normal',

  disabled: false,
  isRequiredErr: false,
  // Use with validator. Above is kept for backward compatibility.
  isRequired: false,

  label: '',
  labelStyle: { display: 'block', marginBottom: '1.2rem' },
  antTextProps: { strong: true },

  inputStyle: { width: '360px' },
  inputId: '',
  inputValue: '',
  inputPlaceholder: '',

  errMsg: 'Field Is required',

  invalidChars: ['.', '{', '}', '$'],
  validLength: 35,

  onChange: () => {},
};

CustomInput.propTypes = {
  type: PropTypes.oneOf(['password', 'normal']),
  disabled: PropTypes.bool,
  isRequiredErr: PropTypes.bool,
  // Use with validator. Above is kept for backward compatibility.
  isRequired: PropTypes.bool,

  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  labelStyle: PropTypes.shape({}),
  antTextProps: PropTypes.shape({}),

  inputStyle: PropTypes.shape({}),
  inputId: PropTypes.string,
  inputValue: PropTypes.string,
  inputPlaceholder: PropTypes.string,

  errMsg: PropTypes.string,

  invalidChars: PropTypes.arrayOf(PropTypes.string),
  validLength: PropTypes.number,

  onChange: PropTypes.func,
};

export default CustomInput;
