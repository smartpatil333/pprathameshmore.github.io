window.onload = getQuote;

function getQuote() {

    fetch('https://quote-garden.herokuapp.com/api/v2/quotes/random').then(res => res.json())
        .then(quote => {
            document.getElementById('quote').innerHTML = "<p>" + quote.quoteText + "</p><p>" + quote.quoteAuthor + "</p>";
        });
}