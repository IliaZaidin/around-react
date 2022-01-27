function PopupWithForm(props) {
  const {
    name,
    buttonText,
    headerText,
    isOpen,
    onClose,
    onSubmit,
    children
  } = props;
  return (
    <>
      <section className={`popup popup_type_${name} ${isOpen && 'popup_is_opened'}`}  >
        <div className={`popup__wrapper popup__wrapper_type_${name}`}>
          <h2 className={`popup__title popup__title_type_${name}`}>{headerText}</h2>
          <button className={`popup__close popup__close_type_${name}`} onClick={onClose} type="button">&#10005;</button>
          <form className={`form form_type_${name}`} onSubmit={onSubmit} noValidate>
            {children}
            <button className={`form__submit form__submit_type_${name}`} type="submit">{buttonText}</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default PopupWithForm;