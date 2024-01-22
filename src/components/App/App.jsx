import { useState } from 'react';
import { Form } from '../Form/Form';
import { TabSection } from '../TabSection/TabSection';
import { PreviewSection } from '../PreviewSection/PreviewSection';
import './App.css';
import { ImageButton } from '../ImageButton/ImageButton';

function App() {
  const [hiddenButton, setHidden] = useState(false);
  const buttonClass = `show-preview-button ${hiddenButton ? 'hide' : ''}`;
  const cvSections = ['Education', 'Employment', 'Skills', 'Languages'];
  const toggleHide = () => setHidden(!hiddenButton);

  return (
    <>
      <Form />
      <ImageButton className={buttonClass} onClick={toggleHide} src="/img/preview.svg" alt="" />
      <main>
        <TabSection cvSections={cvSections} />
        <PreviewSection toggleHide={toggleHide} />
      </main>

    </>
  );
}

export { App };
