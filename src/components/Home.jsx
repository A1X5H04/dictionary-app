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
      <header></header>
      <main className="home-main">
        <div className="logo">
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/book.png"
            alt="book"
          />
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
            <i className="ri-search-line"></i>
          </button>
        </div>
      </main>
    </>
  );
}
