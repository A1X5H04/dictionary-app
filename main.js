const searchInput = document.getElementById("input-search");
const micBtn = document.getElementById("mic-btn");
const searchBtn = document.getElementById("search-btn");


      window.onload = () => new AutoSuggestControl("input-search");


      function constructUrl (word, language, version = 'v2') {
        return `result.html?language=${language}&word=${word}`;
      }


      function notify(icon, message) {
          switch (icon) {
            case 'info':
            document.getElementById('notify-icon').innerHTML = '<i class="ph-info-bold"></i>'
            break;
            case 'warn':
            document.getElementById('notify-icon').innerHTML = '<i class="ph-warning-bold"></i>'
            break;
            case 'mic':
            document.getElementById('notify-icon').innerHTML = '<i class="ph-microphone-bold"></i>'
            break;
            case 'no-mic':
            document.getElementById('notify-icon').innerHTML = '<i class="ph-microphone-slash-bold"></i>'
            break
            case 'error':
            document.getElementById('notify-icon').innerHTML = '<i class="ph-circle-wavy-warning"></i>'
            break
          }

          document.getElementById('notify-panel').classList.add('panel-active')
          document.getElementById('notify-content').textContent = message
          setTimeout(() => {
            document.getElementById('notify-panel').classList.remove('panel-active')
          }, 5000)

      }


      if ("webkitSpeechRecognition" in window) {

        notify('mic','Your Browser Does support Speech Recognition API')
        let speechRecognition = new webkitSpeechRecognition()

        speechRecognition.continuous = false
        speechRecognition.interimResults = true;
        speechRecognition.lang = 'en-US'

        speechRecognition.onstart = () => {
          notify('info','Converting your voice to text')
          console.log("listening")
        } 

        speechRecognition.onend = () => {
          notify('warn','Speech Recognition ended...')
          console.warn("Speech Recognition ended... Check your mic permissions")
        } 

        speechRecognition.onerror = () => {
          notify('error','Error Occurred while listening, check console log')
          console.error("Error while listening... Check your mic permissions")
        } 


        let final_transcript = "";

        speechRecognition.onresult = (event) => {

          let interim_transcript = "";

          for (let i = event.resultIndex; i < event.results.length; ++i) {
            // If the result item is Final, add it to Final Transcript, Else add it to Interim transcript
            if (event.results[i].isFinal) {
              final_transcript += event.results[i][0].transcript;
            } else {
              interim_transcript += event.results[i][0].transcript;
            }
          }

          searchInput.value = final_transcript;
        };

        
         micBtn.onclick = () => {
          speechRecognition.start();
          micBtn.style.display = "none"
          document.getElementById("stop-btn").style.display = 'block'
         };
        document.getElementById("stop-btn").onclick = () => {
          console.log('stop Recognition')
          speechRecognition.stop();
          micBtn.style.display = "block"
          document.getElementById("stop-btn").style.display = 'none'
        };

      } else {

        notify('no-mic', "Your Browser Doesn't support Speech Recognition API")

      } 
      

      searchInput.addEventListener('keydown', event => {

        if (event.key == "Enter" && event.keyCode == 13) {

        let word = searchInput.value,
        language = 'en';
      
        return window.location.assign(constructUrl(word, language)); 
        }

      });


      // clearBtn.addEventListener('click', () => searchInput.value = "")
      
      searchBtn.addEventListener('click', () => {

        let word = searchInput.value,
        language = 'en';
      
        return window.location.assign(constructUrl(word, language)); 

      });
