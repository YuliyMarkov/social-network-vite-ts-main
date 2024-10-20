import React, { forwardRef } from 'react';
import { StyleInut, ErrorMessage } from "./Input.style";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
  isError: boolean;
}

export const Input = forwardRef<HTMLInputElement, IInput>(({
  type,
  placeholder,
  onChange,
  onKeyUp,
  errorText,
  isError,
  ...props
}, ref) => {
  return (
    <div>
      <StyleInut
        ref={ref} 
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        $isError={isError}
        {...props}
      />
      {isError && <ErrorMessage>{errorText}</ErrorMessage>}
    </div>
  );
});
