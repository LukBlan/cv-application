import { Input } from './Input';
import { SelectInput } from './SelectInput';

function EducationForm({ currentEducation, changeEducation }) {
  const changeEducationName = (event) => changeEducation({ ...currentEducation, name: event.target.value });
  const changeCityName = (event) => changeEducation({ ...currentEducation, city: event.target.value });
  const changeSchool = (event) => changeEducation({ ...currentEducation, school: event.target.value });

  console.log(currentEducation);
  return (
    <form>
      <Input onChange={changeEducationName} inputName="educationName" value={currentEducation.name} text="Education" />
      <Input onChange={changeCityName} inputName="cityName" value={currentEducation.city} text="City" />
      <Input onChange={changeSchool} inputName="schoolName" value={currentEducation.school} text="School" />
      <SelectInput />
      <SelectInput />

      <div>
        <label>Description</label>
        <textarea />
      </div>

    </form>
  );
}

export { EducationForm };
