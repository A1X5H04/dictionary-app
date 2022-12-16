const searchInput = document.getElementById("input-search");
const micBtn = document.getElementById("mic-btn");
const searchBtn = document.getElementById("search-btn");


      window.onload = () => new AutoSuggestControl("input-search");


      function constructUrl (word, language, version = 'v2') {
        return `result.html?language=${language}&word=${word}`;
      }
      
      
      searchBtn.addEventListener("click", () => {
      

        let word = searchInput.value,
        language = 'en';
      
        return window.location.assign(constructUrl(word, language));
      });

      
      