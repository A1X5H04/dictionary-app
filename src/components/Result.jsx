import React from "react";
import { getSimpleDictonary, getUrbanDictionary } from "../api";

function Result({ searchTerm, dicType, setShowResult }) {
  const [result, setResult] = React.useState([]);

  React.useEffect(() => {
    if (dicType === "classic") {
      getSimpleDictonary(searchTerm).then((data) => setResult(data));
    } else {
      getUrbanDictionary(searchTerm).then((data) => setResult(data));
    }
  }, []);
  console.log(result);

  function showResult() {
    return (
      <>
        <header>
          <div className="word">
            <h2>Great</h2>
            <p>/gɹeit/</p>
          </div>
        </header>
      </>
    );
  }

  // if (dicType === "classic") {
  //   resultScreen = JSON.stringify(result);
  // } else {
  //   resultScreen = JSON.stringify(result);
  // }

  return (
    <main className="result-main">
      <div>{showResult()}</div>
    </main>
  );
}

export default Result;
