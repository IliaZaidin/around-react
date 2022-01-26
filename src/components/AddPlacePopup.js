import React from 'react';
import PopupWithForm from './PopupWithForm';
import Input from './Input';

export default function AddPlacePopup(props) {
  const [cardTitle, setCardTitle] = React.useState('');
  const [cardLink, setCardLink] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.onAddPlaceSubmit({
      name: cardTitle,
      link: cardLink,
    });
  }

  function handleCardTitleChange(event) {
    setCardTitle(event.target.value);
  }

  function handleCardLinkChange(event) {
    setCardLink(event.target.value);
  }

  return (
    <>
      <PopupWithForm
        name='card'
        buttonText='Create'
        headerText="New place"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
      >

        <Input
          inputName="card_title"
          type="title"
          placeholder="Title"
          onChange={handleCardTitleChange}
        />

        <Input
          inputName="card_link"
          type="link"
          placeholder="Image link"
          onChange={handleCardLinkChange}
        />

      </PopupWithForm>
    </>
  )
}