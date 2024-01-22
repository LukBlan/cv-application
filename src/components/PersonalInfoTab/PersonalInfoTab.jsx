import './PersonalInfoTab.css';

function PersonalInfoTab() {
  return (
    <div className="personal-info-tab-section">
      <div>
        <p>Photo</p>
        <img src="/img/camera.svg" alt="" />
      </div>

      <div>
        <div className="input-section">
          <label htmlFor="name">Given Name </label>
          <input id="name" />
        </div>

        <div className="input-section">
          <label htmlFor="surname">Family Name</label>
          <input id="surname" />
        </div>

      </div>

    </div>
  );
}

export { PersonalInfoTab };
