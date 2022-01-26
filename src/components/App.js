import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function App() {
  const [isEditAvatarPopupOpen, setAvatarPopupState] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupState] = React.useState(false);
  const [isCardPopupOpen, setCardPopupState] = React.useState(false);
  const [isEditProfilePopupOpen, setProfilePopupState] = React.useState(false);
  const [cardData, setCardData] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    api.getUserData()
      .then(data => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log("Error: ", err.status, err.statusText);
      });
  }, []);

  function handleEditAvatarClick() {
    setAvatarPopupState(true);
  }

  function handleEditProfileClick() {
    setProfilePopupState(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupState(true);
  }

  function handleCardClick() {
    setCardPopupState(true);
  }

  function handleCardData(cardData) {
    setCardData(cardData);
  }

  function handleUpdateUser(inputData) {
    api.editProfile(inputData.name, inputData.about)
      .then(data => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log("Error: ", err.status, err.statusText);
      })
      .finally(() =>
        closeAllPopups()
      );
  }

  function handleUpdateAvatar(inputData) {
    api.updateProfilePicture(inputData.avatar)
      .then(data => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log("Error: ", err.status, err.statusText);
      })
      .finally(() =>
        closeAllPopups()
      );
  }

  function closeAllPopups() {
    setAvatarPopupState(false);
    setProfilePopupState(false);
    setAddPlacePopupState(false);
    setCardPopupState(false);
  }

  // load cards from server
  React.useEffect(() => {
    api.getCards()
      .then(data => {
        setCards(data);
      })
      .catch((err) => {
        console.log("Error: ", err.status, err.statusText);
      });
  }, []);

  function toggleLike(card) {
    setCards(cards =>
      cards.map(element =>
        element._id === card._id ? card : element
      ))
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (!isLiked) {
      api.like(card._id)
        .then(card => {
          toggleLike(card);
        })
        .catch((err) => {
          console.log("Error: ", err.status, err.statusText);
        });
    } else {
      api.dislike(card._id)
        .then(card => {
          toggleLike(card);
        })
        .catch((err) => {
          console.log("Error: ", err.status, err.statusText);
        });
    }
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() =>
        setCards(cards =>
          cards.filter(element =>
            element._id !== card._id)
        ))
      .catch((err) => {
        console.log("Error: ", err.status, err.statusText);
      });
  }

  function handleAddPlaceSubmit(cardData) {
    api.addCard(cardData.name, cardData.link)
      .then(newCard =>
        setCards([newCard, ...cards]))
      .catch((err) => {
        console.log("Error: ", err.status, err.statusText);
      })
      .finally(() =>
        closeAllPopups()
      );
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <div className="page__wrapper">
            <Header />
            <Main
              onEditProfileClick={handleEditProfileClick}
              onAddPlaceClick={handleAddPlaceClick}
              onEditAvatarClick={handleEditAvatarClick}
              onCardClick={handleCardClick}
              updateCardData={handleCardData}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />

            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
            />

            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
            />

            <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlaceSubmit={handleAddPlaceSubmit}
            />

            {/* Delete card confirmation */}
            {/* <PopupWithForm
              name='confirm'
              buttonText='Yes'
              headerText="Are you sure?"
              onClose={closeAllPopups}
            /> */}

            <ImagePopup
              onClose={closeAllPopups}
              isOpen={isCardPopupOpen}
              cardData={cardData}
            />

            <Footer />
          </div>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}
