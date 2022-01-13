function Card(props) {

  const dataToPopup = () => {
    props.onClick(props.card);
  }

  return (
    <>
      <div className="picture-grid__item" >
        <img className="picture-grid__img" src={props.card.link} onClick={dataToPopup} />
        <h2 className="picture-grid__title">{props.card.name}</h2>
        <button className="picture-grid__like" type="button"></button>
        <button className="picture-grid__delete picture-grid__delete_disabled" type="button"></button>
        <h3 className="picture-grid__likes">{props.card.likes.length}</h3>
      </div>
    </>
  )
}

export default Card;