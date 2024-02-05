import { CvTab } from './CvTab';
import { PersonalInfoTab } from './PersonalInfoTab';
import { EducationTab } from './EducationTab.jsx';

function TabSection({ cvSections, personObject }) {
  return (
    <ul className="tab-section">
      <CvTab name="Personal Info">
        <PersonalInfoTab personObject={personObject} />
      </CvTab>
      <CvTab name="Education">
        <EducationTab personObject={personObject} />
      </CvTab>

      {cvSections.map((section) => <CvTab key={section} name={section} />)}
    </ul>
  );
}

export { TabSection };
