// const convertCurrency = (quantity, code) => {
//   return fetch(
//     "https://api.nbp.pl/api/exchangerates/rates/c/" +
//       code +
//       "/today/?format=json"
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       let result = data.rates[0].bid * quantity;

//       document.getElementById("result").innerHTML = result.toFixed(2) + " PLN";
//     });
// };

// let convertBTN = document.getElementById("convert");

// convertBTN.addEventListener("click", function () {
//   let currency = document.getElementById("currencies");
//   let currencyCode = currency.value;
//   let number = document.getElementById("number");
//   let quantity = number.value;

//   convertCurrency(quantity, currencyCode);
// });

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
    fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`)
      .then((response) => response.json())
      .then((data) => {
        setResult(`${(data.rates[0].mid * amount).toFixed(2)} PLN`);
      });
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
