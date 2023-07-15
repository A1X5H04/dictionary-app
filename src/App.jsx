import React from "react";
import Result from "./components/Result";
import Home from "./components/Home";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("discord");
  const [dicType, setDicType] = React.useState("urban");
  const [showResult, setShowResult] = React.useState(false);

  return showResult ? (
    <Result
      searchTerm={searchTerm}
      dicType={dicType}
      setShowResult={setShowResult}
    />
  ) : (
    <Home
      searchTermState={{ searchTerm, setSearchTerm }}
      dicTypeState={{ dicType, setDicType }}
      setShowResult={setShowResult}
    />
  );
}

export default App;
