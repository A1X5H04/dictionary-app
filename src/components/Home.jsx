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
        <div className="logo">
          <img width="250" src="./Logo.svg" alt="book" />
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
      </main>
    </>
  );
}
