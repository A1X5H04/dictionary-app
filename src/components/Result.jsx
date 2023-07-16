import React from "react";
import { getSimpleDictonary, getUrbanDictionary } from "../api";
import LoadingState from "./Loading";

function Result({ searchTerm, dicType, setShowResult }) {
  const [result, setResult] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  

  React.useEffect(() => {
    if (dicType === "classic") {
      getSimpleDictonary(searchTerm).then((data) => {
        setResult(data)
        setLoading(false)
      });
    } else {
      getUrbanDictionary(searchTerm).then((data) => {
        setResult(data)
        setLoading(false)
      });
    }
  }, []);
  console.log(result);

  let resultScreen;

  if (dicType === "classic") {
    resultScreen = result.map((item) => {
      function playAudio() {
        const audio = new Audio(item.phonetics[0].audio);
        audio.play();
      }
      return (
        <>
          <header className="header classic">
            <div className="word-cont">
              <div className="word word-classic">
                <h2>{item.word}</h2>
                <p>{item.phonetics.map((phonetic) => phonetic.text + ", ")}</p>
              </div>
              <div className="audio-cont">
                <img src="./speaker.svg" alt="speaker" onClick={playAudio} />
              </div>
            </div>
          </header>
          <div className="meaning-cont">
            {item.meanings.map((meaning) => {
              return (
                <div className="meanings">
                  <aside className="POS-cont">
                    <h3>{meaning.partOfSpeech}</h3>
                  </aside>
                  <div className="definitions">
                    <ol>
                      {meaning.definitions.map((definition) => {
                        return (
                          <li>
                            <h3 className="definition">
                              {definition.definition}
                            </h3>
                            {definition?.example || (
                              <p className="example">{definition.example}</p>
                            )}
                          </li>
                        );
                      })}
                    </ol>
                    <div className="thesauras-cont">
                      <div>
                        <h3>ANTONYMS</h3>
                        <p>
                          {meaning.antonyms.length > 0
                            ? meaning.antonyms.map((antonym) => antonym + ", ")
                            : "No antonyms found"}
                        </p>
                      </div>
                      <div>
                        <h3>SYNONYMS</h3>
                        <p>
                          {meaning.synonyms.length > 0
                            ? meaning.synonyms.map((synonym) => synonym + ", ")
                            : "No synonyms found"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      );
    });
  } else {
    resultScreen = result.map((item) => {
      return (
        <>
          <div className="meanings-cont">
            <div className="meanings">
              <aside className="author-cont">
                <div className="author">
                  <h3 className="name truncate">{item.author}</h3>
                  <p className="data">{item.written_on}</p>
                </div>
              </aside>
              <div className="def_cont">
                <div className="def-cont">
                  <h3 className="definition">{item.definition}</h3>
                  <p className="example">{item.example}</p>
                </div>
                <div className="def-bottom-div">
                  <div className="src-link_cont">
                    <a href={item.permalink}>Source</a>
                    <img src="./left-arrow.svg" alt="left-arrow" />
                  </div>
                  <div className="thumbs-cont">
                    <div className="thumbs-up">
                      <img src="./like.svg" alt="thumbs-up" />
                      <p>{item.thumbs_up}</p>
                    </div>
                    <div className="thumbs-down">
                      <img src="./dislike.svg" alt="thumbs-down" />
                      <p>{item.thumbs_down}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    });
  }

  return (
    <main className="result-main">
      <div className="result-top-cont">
        <button
          className="btn-icon r_btn-icon"
          onClick={() => setShowResult(false)}
        >
          <img src="./right-arrow.svg" alt="left-arrow" title="Back to Home" />
        </button>
        <div className="result-searchbar">
          <input
            id="search-input"
            type="text"
            placeholder="Search Something"
            autoComplete="off"
          />
        </div>
        <button
          className="btn-icon r_btn-icon"
          onClick={() => setShowResult(false)}
        >
          <img
            src="./toggle.svg"
            alt="left-arrow"
            title="Toggle Dictionary mode"
          />
        </button>
      </div>
      {dicType === "urban" && (
        <header className="header urban-header">
          <div className="word word-urban">
            <h2>{searchTerm}</h2>
          </div>
        </header>
      )}
      <div className="result-scr">{loading ? <LoadingState /> : resultScreen}</div>
    </main>
  );
}

export default Result;
