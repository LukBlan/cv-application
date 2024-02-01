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
        <h2>{`${name} ${surname}`}</h2>
        <p>{email}</p>
      </div>
    </section>
  );
}

export { PreviewSection };
