import React from 'react';

import { FormInputContainer } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <FormInputContainer>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </FormInputContainer>
);

export default FormInput;
