import React from 'react';
import { api } from '../utils/Api';
import Card from './Card';

function Main(props) {
  const [user, setUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserData()
      .then(data => {
        setUser({
          name: data.name,
          about: data.about,
          avatar: data.avatar
        });
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
            <img className="profile__picture" src={user.avatar} alt="nothing to show" onClick={props.onEditAvatarClick} />
          </span>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfileClick} />
          <button className="profile__add-button" type="button" onClick={props.onAddPlaceClick}>+</button>
          <h1 className="profile__title">{user.name}</h1>
          <p className="profile__subtitle">{user.about}</p>
        </section>
        <section className="picture-grid">
          {
            cards.map((element) => (
              <Card key={element._id} card={element} onClick={props.onCardClick} updateCardData={props.updateCardData} />
            ))
          }
        </section>
      </main>
    </>
  );
}

export default Main;