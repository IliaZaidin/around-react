import React from "react";
import PopupWithForm from './PopupWithForm';

export default function ConfirmDeletePopup(props) {
  const {
    isOpen,
    onClose,
    onSubmit
  } = props;

  return (
    <PopupWithForm
      name='confirm'
      buttonText='Yes'
      headerText="Are you sure?"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  )
}