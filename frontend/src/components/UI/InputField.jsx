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
  name,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        className={className}
        name={name}
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
