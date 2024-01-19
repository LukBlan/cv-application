import { CvTab } from '../CvTab/CvTab';
import { Form } from '../Form/Form';

function App() {
  return (
    <>
      <Form />
      <ul>
        <CvTab name="Personal Info" />
        <CvTab name="Education" />
        <CvTab name="Employment" />
        <CvTab name="Skills" />
        <CvTab name="Languages" />
        <CvTab name="Hobbies" />
      </ul>
    </>
  );
}

export { App };
