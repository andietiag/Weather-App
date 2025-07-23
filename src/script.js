function showCity(event) {
  event.preventDefault();
  let searchBar = document.querySelector("input.search-city");
  let newTitle = document.querySelector("h1");
  newTitle.innerHTML = `${searchBar.value}`;
  let apiKey = "4cfo2b293cf1a7894a8e2380489tdbd3";
  let units = "metric";
  let newApiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchBar.value}&key=${apiKey}&units=${units}`;
  axios.get(newApiUrl).then(showTemperature);
}

function showTemperature(response) {
  let currentTemp = response.data.temperature.current;
  let currentHumi = response.data.temperature.humidity;
  let currentWind = response.data.wind.speed;
  let currentCondi = response.data.condition.description;
  let currentIcon = response.data.condition.icon_url;
  currentTemp = Math.round(currentTemp);
  currentHumi = Math.round(currentHumi);

  let displayTemp = document.querySelector("#current-temp-number");
  displayTemp.innerHTML = `${currentTemp}`;
  let displayHumi = document.querySelector("#current-humi-number");
  displayHumi.innerHTML = `${currentHumi}%`;
  let displayWind = document.querySelector("#current-wind-number");
  displayWind.innerHTML = `${currentWind} km/hr`;
  let displayCondition = document.querySelector(
    "#current-condition-description"
  );
  displayCondition.innerHTML = `${currentCondi}`;
  let displayIcon = document.getElementById("icon");
  displayIcon.src = `${currentIcon}`;
}

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let now = new Date();
let currentDay = now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();

if (hours < 10) {
  hours = `0${hours}`;
}

if (minutes < 10) {
  minutes = `0${minutes}`;
}

let displayDayDetails = document.querySelector("#day-details");
displayDayDetails.innerHTML = `${weekDays[currentDay]} ${hours}:${minutes}`;

let city = "Hermosillo";
let apiKey = "4cfo2b293cf1a7894a8e2380489tdbd3";
let units = "metric";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
axios.get(apiUrl).then(showTemperature);

let searchForm = document.querySelector("form.search");
searchForm.addEventListener("submit", showCity);
