import { ImageButton } from './ImageButton';

function PreviewSection({ toggleHide }) {
  return (
    <section className="preview-section">
      <nav className="preview-navbar">
        <ImageButton className="return-button" src="/img/left-arrow.svg" alt="" onClick={toggleHide} />
        <p>Preview</p>
        <ImageButton className="download-button" src="/img/download.svg" alt="download resume" />
      </nav>
      <div className="cv-section">
        test
      </div>
    </section>
  );
}

export { PreviewSection };
