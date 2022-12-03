const Input = ({ onChange }) => {
  return (
    <input
      onChange={(event) => onChange(event.target.value)}
      type="number"
      min="0"
      className="nbr"
    />
  );
};
export default Input;
