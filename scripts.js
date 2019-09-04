function GetRhymingWords() {
    console.log("userInput value: " + document.getElementById("rhymeUserInput").value)
    var rhymeURL = "https://api.datamuse.com/words?rel_rhy=" + document.getElementById('rhymeUserInput').value
    console.log(rhymeURL)
    fetch(rhymeURL)
        .then(response => response.json())
        .then(function(JSONResponse) {
            console.log(JSON.stringify(JSONResponse))
            console.log(typeof JSONResponse)
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
            
            DisplayResults(RhymingWord);
        })
        .catch(error => console.log("Error: ", error))
}

function GetNickNames() {
    console.log("UserInput: "+ document.getElementById("nicknameUserInput").value);
    var NickNameURL = "http://api.friendlyrobot.fr/v1/nicknames/" + document.getElementById("nicknameUserInput").value
    fetch(NickNameURL)
        .then(response => response.json())
        .then(function(JSONResponse){
            console.log(JSON.stringify(JSONResponse))
            console.log(typeof JSONResponse)
            var nickname = JSONResponse.nicknames.map(function(obj) {return obj["nickname"]})
            nickname = JSON.stringify(nickname);
            DisplayResults(nickname);
        })
}

function DisplayResults(result) {
    for(var i = 0; i<result.length; i++){
        if(result.charAt(i) == ','){
            result = result.replace(result[i],' ')
        }
        if(result.charAt(i) == '['){
            result = result.replace(result[i],' ')
        }
         if(result.charAt(i) == ']'){
            result = result.replace(result[i],' ')
        }
    }
    document.getElementById("responseBody").innerHTML = result;
}