var inputText = document.querySelector("#input-txt");
var btnTranslate = document.querySelector("#btn-translate");
var outputText = document.querySelector("#output");

var serverURL= "https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(text){
    return serverURL+"?text="+text;
}

function errorHandler(error){
    console.log("error occured: ",error);
    alert("Something went wrong. Please try again later.")
}

function eventHandler(){
    var txt = inputText.value;

    fetch(getTranslationURL(txt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", eventHandler)

    