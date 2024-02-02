function Input({
  onChange, inputName, value, text,
}) {
  return (
    <div className="input-section">
      <label htmlFor={inputName}>
        {' '}
        {text}
        {' '}
      </label>
      <input name={inputName} onChange={onChange} value={value} />
    </div>
  );
}

export { Input };
