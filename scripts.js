function GetRhymingWords() {
    console.log("userInput value: " + document.getElementById("userInput").value)
    var rhymeURL = "https://api.datamuse.com/words?rel_rhy=" + document.getElementById('userInput').value
    console.log(rhymeURL)
    fetch(rhymeURL)
        .then(response => response.json())
        .then(function(JSONResponse) {
            console.log(JSON.stringify(JSONResponse))
            var RhymingWord = JSONResponse.map(function(obj) {return obj["word"]})
            RhymingWord = JSON.stringify(RhymingWord);
            console.log(typeof RhymingWord)
            for(var i = 0; i<RhymingWord.length; i++){
                if(RhymingWord.charAt(i) == ','){
                   RhymingWord = RhymingWord.replace(RhymingWord[i],' ')
                }
                if(RhymingWord.charAt(i) == '['){
                    RhymingWord = RhymingWord.replace(RhymingWord[i],' ')
                }
                 if(RhymingWord.charAt(i) == ']'){
                    RhymingWord = RhymingWord.replace(RhymingWord[i],' ')
                }
            }
            
            document.getElementById("responseBody").innerHTML = RhymingWord;
        })
        .catch(error => console.log("Error: ", error))
}