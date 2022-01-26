import React from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = (props.card.owner._id === currentUser._id);
  const trashCan = (`${ isOwn ? "picture-grid__delete" : "picture-grid__delete picture-grid__delete_disabled" }`); 

  const isLiked = props.card.likes.some(element => element._id === currentUser._id);
  const like = (`${isLiked ? "picture-grid__like picture-grid__like_active" : "picture-grid__like" }`);

  const passDataToPopup = () => {
    props.onClick();
    props.updateCardData(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <>
      <div className="picture-grid__item" >
        <img className="picture-grid__img" src={props.card.link} onClick={passDataToPopup} alt={props.card.name} />
        <h2 className="picture-grid__title">{props.card.name}</h2>
        <button className={like} type="button" onClick={handleLikeClick}/>
        <button className={trashCan} type="button" onClick={handleDeleteClick}/>
        <h3 className="picture-grid__likes">{props.card.likes.length}</h3>
      </div>
    </>
  )
}

export default Card;