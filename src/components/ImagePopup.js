function ImagePopup(props) {
  return (
    <>
      <section className={`popup popup_type_picture ${props.isOpen ? 'popup_is_opened' : ''}`}>
        <div className="popup__wrapper popup__wrapper_type_picture">
          <h2 className="popup__title popup__title_type_picture" >{props.cardData.name}</h2> 
          <img className="popup__picture-link"  alt="nothing to show" src={props.cardData.link} /> 
          <button className="popup__close popup__close_type_picture" type="button" onClick={props.onClose} >&#10005;</button>
        </div>
      </section>
    </>
  );
}

export default ImagePopup;