import React from "react";
import Input from "./input";
import "./App.css";

export default function App() {
  const [result, setResult] = React.useState(0);
  const [arr, setArr] = React.useState(2);
  const [inputData, setInputData] = React.useState({});
  const NextField = () => {
    if (arr < 10) {
      setArr(arr + 1);
    } else {
      alert(
        "Sorry, You have exceeded the limits of input fields \n Not allowed more than 10 input fields"
      );
    }
  };

  const vals = Object.values(inputData);
  const handleClick = () => {
    let total = 0;
    vals.map((item) => setResult((total += parseFloat(item))));
    setResult(total);
  };
  return (
    <div className="main-div">
      <div className="border">
        <div style={{ padding: ".5rem" }}>
          <h3>Hadle Multiple Input Fields</h3>
          <h5>Summation of all input values</h5>
          <div>{result === 0 ? 0 : parseFloat(result).toFixed(2)}</div>
          <Input arr={arr} inputData={inputData} setInputData={setInputData} />
          <button onClick={handleClick}>Calculate</button>
          <button onClick={NextField}>Next field</button>
        </div>
      </div>
    </div>
  );
}
