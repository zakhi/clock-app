const moreButton = document.querySelector(".more-button")

moreButton.addEventListener("click", _ => {
    document.querySelector(".details").classList.toggle("hidden")
    document.querySelector("main").classList.toggle("compact")
    moreButton.querySelector("img").classList.toggle("pointing-down")

    const buttonText = moreButton.querySelector("span")
    buttonText.textContent = buttonText.textContent === "More" ? "Less" : "More"
})
