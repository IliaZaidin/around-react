import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const {
    onEditProfileClick,
    onAddPlaceClick,
    onEditAvatarClick,
    onCardClick,
    updateCardData,
    cards,
    onCardLike,
    onCardDeleteClick
  } = props;
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile"> Profile
        <span className="profile__picture-edit" >
          <img className="profile__picture" src={currentUser.avatar} alt="nothing to show" onClick={onEditAvatarClick} />
        </span>
        <button className="profile__edit-button" type="button" onClick={onEditProfileClick} />
        <button className="profile__add-button" type="button" onClick={onAddPlaceClick}>+</button>
        <h1 className="profile__title">{currentUser.name}</h1>
        <p className="profile__subtitle">{currentUser.about}</p>
      </section>
      <section className="picture-grid">
        {
          cards.map((element) => (
            <Card
              key={element._id}
              card={element}
              onClick={onCardClick}
              updateCardData={updateCardData}
              onCardLike={onCardLike}
              onCardDeleteClick={onCardDeleteClick}
            />
          ))
        }
      </section>
    </main>
  );
}

export default Main;