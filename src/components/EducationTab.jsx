import { useState } from 'react';
import { EducationForm } from './EducationForm';
import { EducationElement } from './EducationElement';

function EducationTab({ personObject }) {
  const { education } = personObject;
  const emptyEducation = education.length === 0;
  const [currentEducation, setCurrentEducation] = useState({ name: '', city: '', school: ' ' });
  const changeEducation = (newEducation) => setCurrentEducation(newEducation);

  if (emptyEducation) {
    return (
      <>
        <EducationForm currentEducation={currentEducation} changeEducation={changeEducation} />
        <button>Add Education</button>
      </>
    );
  }

  return education.map((element) => <EducationElement element={element} />);
}

export { EducationTab };
