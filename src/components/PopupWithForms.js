function PopupWithForms(props) {
  return (
    <>
      <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_is_opened' : ''}`}  >
        <div className={`popup__wrapper popup__wrapper_type_${props.name}`}>
          <h2 className={`popup__title popup__title_type_${props.name}`}>{props.headerText}</h2>
          <button className={`popup__close popup__close_type_${props.name}`} onClick={props.onClose} type="button">&#10005;</button>
          <form className={`form form_type_${props.name}`} noValidate>
            {props.children}
            <button className={`form__submit form__submit_type_${props.name}`} type="submit">{props.buttonText}</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default PopupWithForms;