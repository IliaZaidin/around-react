import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import Input from './Input';
import ImagePopup from './ImagePopup';

export default function App() {
  const [isEditAvatarPopupOpen, setAvatarState] = React.useState(false);
  const [isEditProfilePopupOpen, setProfileState] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlaceState] = React.useState(false);
  const [selectedCard, setSelectedCardState] = React.useState({ state: false, card: {} });

  function handleEditAvatarClick() {
    setAvatarState(true);
  }

  function handleEditProfileClick() {
    setProfileState(true);
  }

  function handleAddPlaceClick() {
    setAddPlaceState(true);
  }

  function handleCardClick(cardData) {
    setSelectedCardState({ state: true, card: cardData });
  }

  function closeAllPopups() {
    setAvatarState(false);
    setProfileState(false);
    setAddPlaceState(false);
    setSelectedCardState( { ...selectedCard, state: false, });
  }

  return (
    <>
      <div className="page">
        <div className="page__wrapper">
          <Header />
          <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />

          {/* Edit profile */}
          <PopupWithForm name='profile' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText='Save' headerText="Edit profile">
            <Input inputName="profile_name" type="name" placeholder="Full name" />
            <Input inputName="profile_job" type="about" placeholder="Occupation" />
          </PopupWithForm>

          {/* Edit Profile Picture */}
          <PopupWithForm name='avatar' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText='Save' headerText="Change profile picture">
            <Input inputName="avatar_link" type="avatar" placeholder="Link to user's avatar" />
          </PopupWithForm>

          {/* Add cards */}
          <PopupWithForm name='card' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText='Create' headerText="New place">
            <Input inputName="card_title" type="title" placeholder="Title" />
            <Input inputName="card_link" type="link" placeholder="Image link" />
          </PopupWithForm>

          {/* Delete card confirmation */}
          <PopupWithForm name='confirm' buttonText='Yes' headerText="Are you sure?" onClose={closeAllPopups} />

          {/* Expand picture */}
          <ImagePopup onClose={closeAllPopups} isOpen={selectedCard.state} card={selectedCard.card} />

          <Footer />
        </div>
      </div>
    </>
  );
}
