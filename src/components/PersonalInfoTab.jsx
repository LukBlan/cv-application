import { Input } from './Input.jsx';

function PersonalInfoTab({ personObject }) {
  const {
    changeSurname, changeName, changeEmail, personInfo,
  } = personObject;
  return (
    <div className="personal-info-tab-section">
      <div className="add-image-section">
        <p>Photo</p>
        <img className="user-image" src="/img/camera.svg" alt="" />
      </div>

      <div className="name-info-section">
        <Input inputName="name" onChange={changeName} value={personInfo.name} text="First Name" />
        <Input inputName="surname" onChange={changeSurname} value={personInfo.surname} text="Family Name" />
        <Input inputName="email" onChange={changeEmail} value={personInfo.email} text="Email" />
      </div>

    </div>
  );
}

export { PersonalInfoTab };
