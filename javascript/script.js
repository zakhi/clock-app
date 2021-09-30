const moreButton = document.querySelector(".more-button");

moreButton.addEventListener("click", e => {
    document.querySelector(".quote").classList.toggle("hidden")
    document.querySelector(".details").classList.toggle("hidden")
    moreButton.querySelector("img").classList.toggle("pointing-down")

    const buttonText = moreButton.querySelector("span")
    buttonText.textContent = buttonText.textContent === "More" ? "Less" : "More"
})

const timeData = await fetchTimeData()

document.querySelector(".time").textContent = new Date(timeData.datetime).toLocaleTimeString("en-GB", {
    hour: "2-digit", minute: "2-digit"
})

document.querySelector(".timezone").textContent = timeData.abbreviation
document.getElementById("current-timezone").textContent = timeData.timezone
document.getElementById("day-of-year").textContent = timeData.day_of_year
document.getElementById("day-of-week").textContent = timeData.day_of_week
document.getElementById("week-number").textContent = timeData.week_number

async function fetchTimeData() {
    const response = await fetch("https://worldtimeapi.org/api/ip")
    return await response.json()
}
