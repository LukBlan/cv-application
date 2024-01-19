import { CvTab } from '../CvTab/CvTab';

function TabSection() {
  return (
    <ul>
      <CvTab name="Personal Info" />
      <CvTab name="Education" />
      <CvTab name="Employment" />
      <CvTab name="Skills" />
      <CvTab name="Languages" />
      <CvTab name="Hobbies" />
    </ul>
  );
}

export { TabSection };
