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
          <h4 className="marquee-text">Source code on Github | If you like the project star on github</h4>
        </header>
        <div className="search">
          <div className="logo">
            <h1>Dictionary.</h1>
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
          <div className="social-icons">
            <div className="marquee-text">
            <a href="https://github.com/a1x5h04">
              Github
            </a>
            <a href="https://github.com/a1x5h04">
              Telegram
            </a>
            <a href="https://github.com/a1x5h04">
              Discord
            </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
