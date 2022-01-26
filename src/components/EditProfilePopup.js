import React from 'react';
import PopupWithForm from './PopupWithForm';
import Input from './Input';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [profileName, setProfileName] = React.useState('');
  const [profileJob, setProfileJob] = React.useState('');

  function handleProfileNameChange(event) {
    setProfileName(event.target.value);
  }

  function handleProfileJobChange(event) {
    setProfileJob(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateUser({
      name: profileName,
      about: profileJob,
    });
  }

  React.useEffect(() => {
    setProfileName(currentUser.name);
    setProfileJob(currentUser.about);
  }, [currentUser]);

  return (
    <>
      <PopupWithForm
        buttonText='Save'
        headerText="Edit profile"
        name='profile'
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
      >
        <Input
          inputName="profile_name"
          type="name" value={profileName}
          placeholder="Full name"
          onChange={handleProfileNameChange}
        />

        <Input
          inputName="profile_job"
          type="about"
          value={profileJob}
          placeholder="Occupation"
          onChange={handleProfileJobChange}
        />
        
      </PopupWithForm>
    </>
  )
}