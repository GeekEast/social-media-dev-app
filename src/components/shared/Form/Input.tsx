import React, { memo } from 'react';

interface Props {
  type: string;
  value?: string;
  placeholder?: string;
  onChange?: any;
  className?: string;
  disabled?: boolean;
  children?: any;
  required?: boolean;
}

// Controlled Component
export const Input = memo(({ type, placeholder, required, value, onChange, className, children }: Props) => {
  return (
    <div className='form-group'>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={className}
        required={required}
      />
      {!!children && children}
    </div>
  )
})