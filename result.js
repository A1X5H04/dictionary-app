const icSpeaker = document.getElementById("ic-speaker"); 
const result = document.getElementById("result")
const errMessage = document.getElementById("error-message")
const title = document.getElementById("title")


title.textContent = "Result"
     


function constructEndPoint() {
   let params = new URLSearchParams(window.location.search)
   let word = params.get('word')
   return `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
}


function mappedResult(data) {
   let mappedResult = data.map((item) => {
      return result.innerHTML += `
          <div class="title">
          <h1 id="word">${item.word}</h1>
          <div class="phonetics-cont">
            <i id="ic-speaker" onclick="new Audio('${
                 item.phonetics[0].audio ? item.phonetics[0].audio 
               : item.phonetics[1].audio ? item.phonetics[1].audio 
               : item.phonetics[2].audio ? item.phonetics[2].audio
               : item.phonetics[3].audio ? item.phonetics[3].audio
               : item.phonetics[4].audio 
               }').play();" class="ph-speaker-high-bold"></i>
            <p id="phonetics">${item.phonetics.map((elem) => {
                  return elem.text ? elem.text + " " : item.phonetic
               })
         }</p>
          </div>
        </div>

         <div class="meaning-cont">
           <div class="grammer">
         <ul>
            ${
               function mappedGrammer(data) {
                     let mappedGrammer = data.meanings.map((elem) => {
                     return ` 
                        <li>
                        <h3 id="pos">${elem.partOfSpeech}</h3>
                        <div class="definitions">
                        <ol>
                        ${
                           function mappedDefinition(data) {
                                 let mappedDefinition = elem.definitions.map((elem) => {
                                 return `
                                    <li>
                                    <p id="definition">${elem.definition}</p>
                                    <span id="example">${elem.example ? elem.example : "Example Not Found"}</span>
                                    </li>`
                                 })
                                   return mappedDefinition.join("")
                              }(elem)
                           }

                      </ol>
                      <div class="antosynon">
                        <p>Synonyms :  <span id="synonyms">${elem.synonyms}</span></p>
                        <p>Antonyms :  <span id="antonyms">${elem.antonyms}</span></p>
                      </div>
                      </div>
                      </li>`
                      })
                        return mappedGrammer.join("")
                  }(item)
               }

               </ul>
              </div>
            </div>
            `
   })

   return mappedResult
}



async function fetchData(){
 let response = await fetch(constructEndPoint());
 let data = await response.json();
 data = JSON.stringify(data);
 data = JSON.parse(data);
 return data;
}


async function useData() {
let fetchedData = await fetchData()
if (fetchedData.title) {
   result.style.display = "none"
   errMessage.style.display  = "flex"
} else {
   result.style.display = "block"
   errMessage.style.display  = "none"
   title.textContent = "Definition for " + fetchedData[0].word
   mappedResult(fetchedData)
   }
}

useData()



