import './CvTab.css';
import { useState } from 'react';
import { ImageButton } from '../ImageButton/ImageButton';

function CvTab({ name }) {
  const [open, setOpen] = useState(false);
  const imgSrc = (open) ? ('/img/expand-more.svg') : ('/img/expand-less.svg');
  const toggleOpen = () => setOpen(!open);

  return (
    <li className="cv-tab">
      <p className="cv-tab-name">{name}</p>
      <ImageButton className="cv-tab-button" alt="expand" src={imgSrc} onClick={toggleOpen} />
    </li>
  );
}

export { CvTab };
