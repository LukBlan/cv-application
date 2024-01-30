function PersonalInfoTab() {
  return (
    <div className="personal-info-tab-section">
      <div className="add-image-section">
        <p>Photo</p>
        <img className="user-image" src="/img/camera.svg" alt="" />
      </div>

      <div className="name-info-section">
        <div className="input-section">
          <label htmlFor="name">Given Name </label>
          <input name="name" />
        </div>

        <div className="input-section">
          <label htmlFor="surname">Family Name</label>
          <input name="surname" />
        </div>

      </div>

    </div>
  );
}

export { PersonalInfoTab };
