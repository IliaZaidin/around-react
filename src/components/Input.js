function Input(props) {
    return (
        <>
            <input name={props.inputName} id={props.type} className={`form__input form__input_type_${props.type}`} type="text" placeholder={props.placeholder} minLength="2" maxLength="40" required />
            <span id={`input_type_${props.type}_error`} className="form__error"></span>
        </>
    );
}

export default Input;