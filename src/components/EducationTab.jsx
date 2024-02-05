import { EducationForm } from './EducationForm.jsx';

function EducationTab({ personObject }) {
  const { education } = personObject;
  const emptyEducation = education.length === 0;

  if (emptyEducation) {
    return (
      <>
        <EducationForm />
        <button>Add Education</button>
      </>
    );
  }

  return (
    <h1>Test</h1>
  );
}

export { EducationTab };
