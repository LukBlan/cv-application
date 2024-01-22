import { CvTab } from '../CvTab/CvTab';
import './TabSection.css';

function TabSection({ cvSections }) {
  return (
    <ul className="tab-section">
      {cvSections.map((section) => <CvTab key={section} name={section} />)}
    </ul>
  );
}

export { TabSection };
