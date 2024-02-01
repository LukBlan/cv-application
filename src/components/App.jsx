import { useState } from 'react';
import { Form } from './Form';
import { TabSection } from './TabSection';
import { PreviewSection } from './PreviewSection';
import { ImageButton } from './ImageButton';

function App() {
  const [hiddenButton, setHidden] = useState(false);
  const [personInfo, setPersonInfo] = useState({ name: '', surname: '' });
  const buttonClass = `show-preview-button ${hiddenButton ? 'hide' : ''}`;
  const cvSections = ['Education', 'Employment', 'Skills', 'Languages'];

  const toggleHide = () => setHidden(!hiddenButton);
  const changeName = (event) => setPersonInfo({ ...personInfo, name: event.target.value });
  const changeSurname = (event) => setPersonInfo({ ...personInfo, surname: event.target.value });

  const personObject = {
    personInfo,
    changeName,
    changeSurname,
  };

  return (
    <>
      <Form />
      <ImageButton className={buttonClass} onClick={toggleHide} src="/img/preview.svg" alt="" />
      <main>
        <div className="tab-container">
          <TabSection personObject={personObject} cvSections={cvSections} />
        </div>

        <PreviewSection personInfo={personInfo} toggleHide={toggleHide} />
      </main>

    </>
  );
}

export { App };
