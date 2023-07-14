import React from "react";
import Result from "./components/Result";
import Home from "./components/Home";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("free");
  const [dicType, setDicType] = React.useState("classic");
  const [showResult, setShowResult] = React.useState(false);

  return (
    <>
      <Result
        searchTerm={searchTerm}
        dicType={dicType}
        setShowResult={setShowResult}
      />
    </>
  );
}

export default App;

{
  /* <Home
  searchTermState={{ searchTerm, setSearchTerm }}
  dicTypeState={{ dicType, setDicType }}
  setShowResult={setShowResult}
/> */
}
