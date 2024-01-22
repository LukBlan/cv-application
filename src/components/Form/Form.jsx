import './Form.css';
import { ImageButton } from '../ImageButton/ImageButton';

function Form() {
  return (
    <form className="download-bar">
      <input type="text" placeholder="Untitled Resume" className="download-file-name" />
      <ImageButton className="download-button" src="/img/download.svg" alt="download resume" />
    </form>
  );
}

export { Form };
