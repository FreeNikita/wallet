import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

export const InputNumber = ({
  inputRef, onChange, name, ...other
}) => (
  <NumberFormat
    {...other}
    getInputRef={inputRef}
    onValueChange={(values) => {
      onChange({
        target: {
          name,
          value: values.value,
        },
      });
    }}
    thousandSeparator
    isNumericString
    prefix=""
  />
);

InputNumber.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
