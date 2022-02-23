// API
const API_URL = "https://api.adviceslip.com/advice";

function get(url) {
    return fetch(url).then(resp => resp.json())
}

API = { get }

const quoteP = document.querySelector("p#quote")

function getQuotes() {
    API.get(API_URL).then(data => addQuote(data['slip']['advice']))
}

// FUNCTIONS

function addQuote(quote) {
    quoteP.innerText = quote;
    let fontsNum = Math.floor(Math.random()*fontType.length);
    let coloursNum = Math.floor(Math.random()*colours.length);
    document.getElementById("quote").style.fontFamily=fontType[fontsNum];
    bground.style.backgroundColor = colours[coloursNum]
}

const reloadButton = document.querySelector("#dice")
reloadButton.addEventListener("click", ()=> getQuotes())

// START PAGE
document.body.onload = getQuotes