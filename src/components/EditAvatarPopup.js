import React from "react";
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup(props) {
  const avatarLinkRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarLinkRef.current.value
    });
  }

  return (
    <PopupWithForm
      name='avatar'
      buttonText='Save'
      headerText="Change profile picture"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      {/* Input component is not used here to use ref per project requirements */}
      <input
        ref={avatarLinkRef}
        name="avatar_link"
        id="avatar"
        className="form__input form__input_type_avatar"
        type="text"
        placeholder="Link to user's avatar"
        required
      />
      <span
        id={`input_type_avatar_error`}
        className="form__error">
      </span>

    </PopupWithForm>
  )
}