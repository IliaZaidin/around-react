import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserData()
      .then(data => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log("Error: ", err.status, err.statusText);
      });
  }, []);

  React.useEffect(() => {
    api.getCards()
      .then(data => {
        setCards(data);
      })
      .catch((err) => {
        console.log("Error: ", err.status, err.statusText);
      });
  }, []);

  return (
    <>
      <main>
        <section className="profile"> Profile
          <span className="profile__picture-edit" >
            <img className="profile__picture" src={userAvatar} alt="nothing to show" onClick={props.onEditAvatarClick} />
          </span>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfileClick}></button>
          <button className="profile__add-button" type="button" onClick={props.onAddPlaceClick}>+</button>
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__subtitle">{userDescription}</p>
        </section>
        <section className="picture-grid">
          {
            cards.map((element) => (
                <Card key={element._id} card={element} onClick={props.onCardClick} />
            ))
          }
        </section>
      </main>
    </>
  );
}

export default Main;