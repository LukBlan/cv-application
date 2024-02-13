function SelectInput() {
  const yearsAmount = 100;
  const months = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December',
  ];
  const currentYear = new Date().getFullYear();
  const firstYear = currentYear - yearsAmount;
  const yearsArray = new Array(yearsAmount).fill(1).map((value, index) => firstYear + index + 1).reverse();

  return (
    <div>
      <label>Start Date</label>
      <select>
        {months.map((month) => <option value={month}>{month}</option>)}
      </select>
      <select>
        {yearsArray.map((year) => <option value={year}>{year}</option>)}
      </select>
    </div>
  );
}

export { SelectInput };
