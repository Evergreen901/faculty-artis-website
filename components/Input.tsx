import React from 'react';

interface IInput {
  value: string;
  label: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export const Input = ({
  label,
  onChange,
  placeholder,
  type,
  value,
  name,
}: IInput) => {
  return (
    <div className='form-input'>
      <input
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        id={name}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
