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
          <p>Classic Dictionary is a simple dictionary used for looking simple words</p>
        </div>

        <div className="fl-div tr" style={{textAlign: "right"}}>
          <p>
            Urban Dictionary is a crowdsourced online dictionary for slang words
          and phrases, operating under the motto "Define Your World."</p>
        </div>

        <div className="fl-div br">
        </div>

        <div className="fl-div tl">
        </div>
        
        <div className="search">
          <div className="logo">
            <img src="./logo.svg" alt="Logo" />
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
