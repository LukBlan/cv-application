import { ImageButton } from './ImageButton';

function PreviewSection({ toggleHide, personInfo }) {
  const { name, surname, email } = personInfo;
  return (
    <section className="preview-section">
      <nav className="preview-navbar">
        <ImageButton className="return-button" src="/img/left-arrow.svg" alt="" onClick={toggleHide} />
        <p>Preview</p>
        <ImageButton className="download-button" src="/img/download.svg" alt="download resume" />
      </nav>
      <div className="cv-section">
        <header className="cv-header">
          <h2>{`${name} ${surname}`}</h2>
          <p>{email}</p>
        </header>

      </div>
    </section>
  );
}

export { PreviewSection };
