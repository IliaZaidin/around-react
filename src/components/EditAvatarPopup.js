import React from "react";
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup(props) {
  const {
    isOpen,
    onClose,
    onUpdateAvatar
  } = props;
  const avatarLinkRef = React.useRef();

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar({
      avatar: avatarLinkRef.current.value
    });
    event.target.reset();
  }

  return (
    <PopupWithForm
      name='avatar'
      buttonText='Save'
      headerText="Change profile picture"
      isOpen={isOpen}
      onClose={onClose}
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