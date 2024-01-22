import { useState } from 'react';
import { Form } from '../Form/Form';
import { TabSection } from '../TabSection/TabSection';
import { PreviewSection } from '../PreviewSection/PreviewSection';
import './App.css';

function App() {
  const [hiddenButton, setHidden] = useState(false);
  const buttonClass = `show-preview-button ${hiddenButton ? 'hide' : ''}`;

  const toggleHide = () => setHidden(!hiddenButton);

  return (
    <>
      <Form />
      <button className={buttonClass} onClick={toggleHide}>
        <img src="/img/preview.svg" alt="" />
      </button>
      <main>
        <TabSection />
        <PreviewSection toggleHide={toggleHide} />
      </main>

    </>
  );
}

export { App };
