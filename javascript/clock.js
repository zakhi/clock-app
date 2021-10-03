await Promise.all([fetchTimeData(), fetchCity()])

document.querySelector(".clock").classList.remove("invisible")
document.querySelector(".more-button").classList.remove("invisible")


function fetchTimeData() {
    return fetch("https://worldtimeapi.org/api/ip")
        .then(response => response.json())
        .then(timeData => {
            const date = new Date(timeData.datetime);

            document.querySelector(".time").textContent = date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
            document.querySelector(".timezone").textContent = timeData.abbreviation
            document.getElementById("current-timezone").textContent = timeData.timezone
            document.getElementById("day-of-year").textContent = timeData.day_of_year
            document.getElementById("day-of-week").textContent = timeData.day_of_week
            document.getElementById("week-number").textContent = timeData.week_number
            document.getElementById("simple-greeting").textContent = greetingBy(date.getHours())
            document.querySelector(".greeting img").setAttribute("src", `assets/desktop/icon-${isDaytime(date.getHours()) ? "sun" : "moon"}.svg`)
            document.querySelector("main").classList.toggle("evening", !isDaytime(date.getHours()))
            document.querySelector(".details").classList.toggle("evening", !isDaytime(date.getHours()))
        })
}

function fetchCity() {
    return fetch("https://freegeoip.app/json/")
        .then(response => response.json())
        .then(locationData => {
            document.querySelector(".location").textContent = `In ${locationData.city}, ${locationData.country_code}`
        })
}

function greetingBy(hours) {
    if (isDaytime(hours)) {
        return hours >= 12 ? "Good afternoon" : "Good morning"
    }

    return "Good evening"
}

function isDaytime(hours) {
    return hours >=5 && hours < 18
}
