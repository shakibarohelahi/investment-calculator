import Header from "./Header";
import UserInput from "./UserInput";
import Results from "./Reasults";
import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1500,
    annualInvestment: 900,
    expectedReturn: 5,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center"> Please enter a duration greater than zero!</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
