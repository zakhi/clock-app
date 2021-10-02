await fetchQuote()

document.querySelector(".quote button").addEventListener("click", fetchQuote)

async function fetchQuote() {
    const quote = await fetch("https://api.quotable.io/random").then(response => response.json())
    document.querySelector(".quote-text").textContent = quote.content
    document.querySelector(".quote-author").textContent = quote.author
    document.querySelector(".quote").classList.remove("invisible")
}
