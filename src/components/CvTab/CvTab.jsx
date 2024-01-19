import './CvTab.css';

function CvTab({ name }) {
  return (
    <li className="cv-tab">
      <p className="cv-tab-name">{name}</p>
      <button className="cv-button">+</button>
    </li>
  );
}

export { CvTab };
