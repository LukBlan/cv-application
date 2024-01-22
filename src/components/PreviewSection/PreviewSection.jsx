import './PreviewSection.css';

function PreviewSection({ toggleHide }) {
  return (
    <section className="preview-section">
      <nav className="preview-navbar">
        <button onClick={toggleHide}>
          <img src="/img/left-arrow.svg" alt="" />
        </button>
        <p>Preview</p>
        <button className="download-button">
          <img src="/img/download.svg" alt="download resume" />
        </button>
      </nav>
    </section>
  );
}

export { PreviewSection };
