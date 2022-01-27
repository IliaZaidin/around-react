import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const {
    card,
    onClick,
    updateCardData,
    onCardLike,
    onCardDelete
  } = props;
  const currentUser = React.useContext(CurrentUserContext);

  const isOwnCard = card.owner._id === currentUser._id;
  const trashButtonClassName = isOwnCard ? "picture-grid__delete" : "picture-grid__delete picture-grid__delete_disabled";

  const isLikedByOwner = card.likes.some(element => element._id === currentUser._id);
  const likeButtonClassName = isLikedByOwner ? "picture-grid__like picture-grid__like_active" : "picture-grid__like";

  const passDataToPopup = () => {
    onClick();
    updateCardData(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <div className="picture-grid__item" >
      <img className="picture-grid__img" src={card.link} onClick={passDataToPopup} alt={card.name} />
      <h2 className="picture-grid__title">{card.name}</h2>
      <button className={likeButtonClassName} type="button" onClick={handleLikeClick} />
      <button className={trashButtonClassName} type="button" onClick={handleDeleteClick} />
      <h3 className="picture-grid__likes">{card.likes.length}</h3>
    </div>
  )
}

export default Card;