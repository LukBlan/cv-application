import { CvTab } from './CvTab';
import { PersonalInfoTab } from './PersonalInfoTab';

function TabSection({ cvSections }) {
  return (
    <ul className="tab-section">
      <CvTab name="Personal Info">
        <PersonalInfoTab />
      </CvTab>

      {cvSections.map((section) => <CvTab key={section} name={section} />)}
    </ul>
  );
}

export { TabSection };
