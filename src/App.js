import React from "react";
import Input from "./input";

export default function App() {
  const [result, setResult] = React.useState(0);
  const [arr, setArr] = React.useState(2);
  const [inputData, setInputData] = React.useState({});
  const NextField = () => {
    setArr(arr + 1);
  };

  const vals = Object.values(inputData);
  const handleClick = () => {
    let total = 0;
    vals.map((item) => setResult((total += parseInt(item, 10))));
    setResult(total);
  };
  return (
    <div className="App">
      <h2>Hadle multiple input</h2>
      <h3>Summation of all input values</h3>
      <div>{result}</div>
      <Input arr={arr} inputData={inputData} setInputData={setInputData} />
      <button onClick={handleClick}>Click</button>
      <button onClick={NextField}>Next field</button>
    </div>
  );
}
