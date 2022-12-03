const Select = ({ onChange }) => {
  return (
    <>
      <label className = "label" htmlFor="currencies">Choose a currency</label>
      <select
        onChange={(event) => onChange(event.target.value)}
        name="currencies"
        defaultValue={"EUR"}
      >
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CHF">CHF</option>
      </select>
    </>
  );
};
export default Select;
