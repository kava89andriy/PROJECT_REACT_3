import "./App.css";
import Input from "./Components/Input";
import Select from "./Components/Select";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  const [code, setCode] = useState("EUR");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

  const onClick = () => {
    fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`)
      .then((response) => response.json())
      .then((data) => {
        setResult(`${(data.rates[0].mid * amount).toFixed(2)} PLN`);
      })
      .catch((error) => console.error(error));
  };

  const onInputChange = (value) => {
    setAmount(value);
  };

  const onSelectChange = (value) => {
    setCode(value);
  };

  return (
    <div className="calculator">
      <Input onChange={onInputChange} />
      <Select onChange={onSelectChange} />
      <Button onClick={onClick} />

      <span>{result}</span>
    </div>
  );
}

export default App;
