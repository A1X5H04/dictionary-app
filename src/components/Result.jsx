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

  let resultScreen;

  if (dicType === "classic") {
    resultScreen = result.map((item) => {
      function playAudio() {
        const audio = new Audio(item.phonetics[0].audio);
        audio.play();
      }
      return (
        <>
          <header>
            <div className="word-cont">
              <div className="word">
                <h2>{item.word}</h2>
                <p>{item.phonetics.map((phonetic) => phonetic.text + ", ")}</p>
              </div>
              <div className="audio-cont">
                <img src="./no-noise.svg" alt="speaker" onClick={playAudio} />
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
                          {meaning.antonym
                            ? meaning.antonyms.map((antonym) => antonym + ", ")
                            : "No antonyms found"}
                        </p>
                      </div>
                      <div>
                        <h3>SYNONYMS</h3>
                        <p>
                          {meaning.synonym
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
    resultScreen = JSON.stringify(result);
  }

  return (
    <main className="result-main">
      <div>{resultScreen}</div>
    </main>
  );
}

export default Result;
