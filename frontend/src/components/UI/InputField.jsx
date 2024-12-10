import React from "react";
function InputField({
    className,
    label,
    type,
    value,
    onChange,
    placeholder,
    disabled,
    id,
    required,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        className={className}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        id={id}
        required={required}
      />
    </div>
  );
}
export default InputField;
