import { CvTab } from '../CvTab/CvTab';
import './TabSection.css';

function TabSection() {
  return (
    <ul className="tab-section">
      <CvTab name="Personal Info" />
      <CvTab name="Education" />
      <CvTab name="Employment" />
      <CvTab name="Skills" />
      <CvTab name="Languages" />
      <CvTab name="Hobbies" />
      <CvTab name="Hobbies" />
      <CvTab name="Hobbies" />
      <CvTab name="Hobbies" />
      <CvTab name="Hobbies" />
    </ul>
  );
}

export { TabSection };
