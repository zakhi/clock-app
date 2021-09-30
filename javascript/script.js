let moreButton = document.querySelector(".more-button");

moreButton.addEventListener("click", e => {
    document.querySelector(".quote").classList.toggle("hidden")
    document.querySelector(".details").classList.toggle("hidden")
    moreButton.querySelector("img").classList.toggle("pointing-down")

    const buttonText = moreButton.querySelector("span")
    buttonText.textContent = buttonText.textContent === "More" ? "Less" : "More"
})
