
const CampoFormulario = ({
  id,
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  minLength,
  maxLength,
  multiline = false,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          name={name}
          className="form-control"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
          rows={4}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          className="form-control"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
          maxLength={maxLength}
        />
      )}
    </div>
  );
};

export default CampoFormulario;
