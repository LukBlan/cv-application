import { CvTab } from './CvTab';
import { PersonalInfoTab } from './PersonalInfoTab';

function TabSection({ cvSections, personObject }) {
  return (
    <ul className="tab-section">
      <CvTab name="Personal Info">
        <PersonalInfoTab personObject={personObject} />
      </CvTab>

      {cvSections.map((section) => <CvTab key={section} name={section} />)}
    </ul>
  );
}

export { TabSection };
