function Input(props) {
  const {
    inputName,
    type,
    placeholder,
    onChange,
    value
  } = props;
  return (
    <>
      <input
        name={inputName}
        id={type}
        className={`form__input form__input_type_${type}`}
        type="text"
        placeholder={placeholder}
        minLength="2"
        required
        onChange={onChange}
        value={value}
      />
      <span id={`input_type_${type}_error`} className="form__error"></span>
    </>
  );
}

export default Input;