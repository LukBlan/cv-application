import { Form } from '../Form/Form';
import { TabSection } from '../TabSection/TabSection';
import './App.css';

function App() {
  return (
    <>
      <Form />
      <main>
        <TabSection />
        <div className="preview-section">Example</div>
      </main>
    </>
  );
}

export { App };
