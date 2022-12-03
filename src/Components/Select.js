const Select = () => {
  return (
    <>
      <label for="currencies">Choose a currency</label>
      <select name="currencies" id="currencies">
        <option value="EUR" selected>
          EUR
        </option>
        <option value="USD">USD</option>
        <option value="CHF">CHF</option>
      </select>
    </>
  );
};
export default Select;
