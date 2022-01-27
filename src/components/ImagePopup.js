function ImagePopup(props) {
  const {
    onClose,
    isOpen,
    cardData
  } = props;
  return (
    <>
      <section className={`popup popup_type_picture ${isOpen && 'popup_is_opened'}`}>
        <div className="popup__wrapper popup__wrapper_type_picture">
          <h2 className="popup__title popup__title_type_picture" >{cardData.name}</h2> 
          <img className="popup__picture-link"  alt="nothing to show" src={cardData.link} /> 
          <button className="popup__close popup__close_type_picture" type="button" onClick={onClose} >&#10005;</button>
        </div>
      </section>
    </>
  );
}

export default ImagePopup;