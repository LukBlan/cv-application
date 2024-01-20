import { Form } from '../Form/Form';
import { TabSection } from '../TabSection/TabSection';
import './App.css';
import { useState } from 'react';

function App() {
  const [hiddenButton, setHidden] = useState(false);
  const buttonClass = `show-preview-button ${hiddenButton ? 'hide' : ''}`;

  const toggleHide = () => setHidden(!hiddenButton);

  return (
    <>
      <Form />
      <button className={buttonClass} onClick={toggleHide}>
        Show
      </button>
      <main>
        <TabSection />
        <div className="preview-section">Example</div>
      </main>

    </>
  );
}

export { App };
