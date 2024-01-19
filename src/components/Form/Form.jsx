import './Form.css';

function Form() {
  return (
    <form className="download-bar">
      <input type="text" placeholder="Untitled Resume" className="download-file-name" />
      <button>Download</button>
    </form>
  );
}

export { Form };
