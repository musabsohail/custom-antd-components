import React from 'react';
import PropTypes from 'prop-types';
import { Select, Typography } from 'antd';

const { Text } = Typography;
const { Option } = Select;

const ErrMsg = () => (
  <p style={{ fontSize: '0.75rem', color: '#ed5353' }}>Field Is required</p>
);

const CustomSelect = ({
  type, // Is kept for the backward compatibility in the system. Design to be improved
  loading,
  disabled,
  isRequiredErr,
  onChange,
  selectOptions,
  selectStyle,
  selectProps,
  selectPlaceholder,
  label,
  labelStyle,
  antTextProps,
  dispValue,
  returnValue,
}) => {
  /**
   * Exceptions case for empty value in selectProps.
   * So that placeholder is visible
   */
  const selectPropsData =
    selectProps.value === '' || selectOptions.length === 0 ? {} : { ...selectProps };

  if (type === 'string') {
    return (
      <>
        {label && typeof label === 'string' ? (
          <Text style={{ ...labelStyle }} {...antTextProps}>
            {label}
          </Text>
        ) : (
          label
        )}
        {isRequiredErr && <ErrMsg />}
        <Select
          style={{ ...selectStyle }}
          placeholder={selectPlaceholder}
          loading={loading}
          disabled={disabled}
          onChange={(value) => onChange(value)}
          {...selectPropsData}
        >
          {selectOptions.map((val) => (
            <Option key={val} value={val}>
              {val}
            </Option>
          ))}
        </Select>
      </>
    );
  }
  // For type === object
  return (
    <>
      {label && typeof label === 'string' ? (
        <Text style={{ ...labelStyle }} {...antTextProps}>
          {label}
        </Text>
      ) : (
        label
      )}
      {isRequiredErr && <ErrMsg />}
      <Select
        style={{ ...selectStyle }}
        placeholder={selectPlaceholder}
        loading={loading}
        disabled={disabled}
        onChange={(value) => onChange(value)}
        {...selectPropsData}
      >
        {selectOptions.map((option) => (
          <Option key={option[returnValue]} value={option[returnValue]}>
            {option[dispValue]}
          </Option>
        ))}
      </Select>
    </>
  );
};

CustomSelect.defaultProps = {
  type: 'string',
  loading: false,
  disabled: false,
  isRequiredErr: false,
  onChange: () => {},
  selectOptions: [],
  selectStyle: { width: '360px' },
  selectProps: {
    value: '',
  },
  selectPlaceholder: '',
  label: '',
  labelStyle: { display: 'block', marginBottom: '1.2rem' },
  antTextProps: { strong: true },
  dispValue: '',
  returnValue: '',
  // defaultSelect: 0,
};

CustomSelect.propTypes = {
  type: PropTypes.oneOf(['string', 'object']),

  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  isRequiredErr: PropTypes.bool,
  onChange: PropTypes.func,

  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  labelStyle: PropTypes.shape({}),
  antTextProps: PropTypes.shape({}),

  selectPlaceholder: PropTypes.string,
  selectStyle: PropTypes.shape({}),
  selectProps: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  selectOptions: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ),
  // properties of object in array of objects.
  dispValue: PropTypes.string,
  returnValue: PropTypes.string,
  // defaultSelect: PropTypes.number, // index
};

export default CustomSelect;
