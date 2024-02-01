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
        <div className="input-section">
          <label htmlFor="name">Given Name </label>
          <input name="name" onChange={changeName} value={personInfo.name} />
        </div>

        <div className="input-section">
          <label htmlFor="surname"> Family Name </label>
          <input name="surname" onChange={changeSurname} value={personInfo.surname} />
        </div>

        <div className="input-section">
          <label htmlFor="email"> Email </label>
          <input name="email" onChange={changeEmail} value={personInfo.email} />
        </div>

      </div>

    </div>
  );
}

export { PersonalInfoTab };
