import React from "react";

export default function Home({ searchTermState, dicTypeState, setShowResult }) {
  const { searchTerm, setSearchTerm } = searchTermState;
  const { dicType, setDicType } = dicTypeState;

  function toggleDicType() {
    setDicType((prev) => (prev === "classic" ? "urban" : "classic"));
    setSearchTerm("");
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === " ") event.preventDefault();
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted", searchTerm);
    setShowResult(true);
  }

  return (
    <>
      <main className="home-main">
        <header>
         <div className="wordmark">
            <h3>Dictionary.</h3>
          </div>
          <div className="social-icons">
          <a href="https://github.com/a1x5h04">
              Github
            </a>
            <a href="https://github.com/a1x5h04">
              Github
            </a>
            <a href="https://github.com/a1x5h04">
              Github
            </a>
          </div>
        </header>
        <div className=" fl-div bl" style={{textAlign: "left"}}>
          <p>
A classic dictionary is a reference tool that provides information about words, including their definitions, pronunciations, and usage. </p>
        </div>

        <div className="fl-div tr" style={{textAlign: "right"}}>
          <p>
            Urban Dictionary is a crowdsourced online dictionary for slang words
          and phrases, operating under the motto "Define Your World."</p>
        </div>

        <div className="fl-div br">
          <img src="./shape.svg" alt="shape" width={25} />
        </div>

        <div className="fl-div tl">
          <img src="./shape.svg" alt="shape" width={25} style={{transform: "rotate(180deg)"}} />
        </div>
        
        <div className="search">
          <div className="logo">
            <div className="logo-img">
            <img id="dic-img" src="./logo.svg" alt="Logo" />
            <img id="star-grp" src="./stars.svg" alt="Stars" />
            </div>
            
          </div>
          <div className="searchbar">
            <button className="btn-dictype" onClick={toggleDicType}>
              {dicType}
            </button>
            <div className="divider"></div>
            <input
              type="text"
              id="search-input"
              value={searchTerm}
              onChange={handleChange}
              onKeyDown={dicType === "classic" ? handleKeyDown : undefined}
              name="search"
              autoComplete="off"
              placeholder={
                dicType === "classic"
                  ? "What are you looking for?"
                  : "Wachu lookin' for?"
              }
            />
            <button className="btn-icon" onClick={handleSubmit}>
              <img width="20" src="./search.svg" alt="search" />
            </button>
          </div>
        </div>
        <footer>

        </footer>
      </main>
    </>
  );
}
