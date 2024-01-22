import './CvTab.css';
import { useState } from 'react';
import { ImageButton } from '../ImageButton/ImageButton';

function CvTab({ name, children }) {
  const [open, setOpen] = useState(false);
  const imgSrc = (open) ? ('/img/expand-less.svg') : ('/img/expand-more.svg');
  const toggleOpen = () => setOpen(!open);

  return (
    <li className="cv-tab">
      <div className="cv-tab-header">
        <p className="cv-tab-name">{name}</p>
        <ImageButton className="cv-tab-button" alt="expand" src={imgSrc} onClick={toggleOpen} />
      </div>
      {open && children}
    </li>
  );
}

export { CvTab };
