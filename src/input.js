import React from "react";
const Input = React.forwardRef(({ arr, inputData, setInputData }, ref) => {
  console.log("inputData", inputData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  const array = [];
  for (let i = 0; i < arr; i++) {
    array.push(i);
  }

  return (
    <div>
      {array.map((item, i) => (
        <div key={i}>
          <input
            name={i + 1}
            type="number"
            ref={ref}
            value={inputData.name}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      ))}
    </div>
  );
});
export default Input;
