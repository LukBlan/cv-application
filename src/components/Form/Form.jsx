import './Form.css';

function Form() {
  return (
    <form className="download-bar">
      <input type="text" placeholder="Untitled Resume" className="download-file-name" />
      <button className="download-button">
        <img src="/img/download.svg" alt="download resume" />
      </button>
    </form>
  );
}

export { Form };
