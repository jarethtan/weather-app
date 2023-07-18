const { displayWeather, displayCovid } = require("./display");
const { weatherApiKey } = require("./config");

module.exports.fetchWeather = (capital) => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      capital +
      "&units=metric&appid=" +
      weatherApiKey
  )
    .then((res) => {
      if (res.ok) {
        console.log("Successfully retrieve weather API info");
        return res.json();
      } else {
        console.log("Unscuccessful connection with weather API");
        return Promise.reject(res);
      }
    })
    .then((data) => displayWeather(data))
    .catch((err) => console.log("Error: ", err));
};
