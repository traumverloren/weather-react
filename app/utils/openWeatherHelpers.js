var axios = require('axios');

var key = "7d6e5d14a038fa9ca260ed2b87ee4799";
var base_url = "http://api.openweathermap.org/data/2.5/";

var helpers = {
  getCurrentWeather: function (location) {
    return axios.get(base_url + "weather?q=" + location + "&type=accurate&APPID=" + key)
    .then(function (currentData) {
      console.log("currentData", currentData.data);
    })
  },

  getForecast: function (location) {
    return axios.get(base_url + "forecast/daily?q=" + location + "&type=accurate&APPID=" + key + "&cnt=5")
    .then(function (forecastData) {
      console.log("forecastData", forecastData.data);
    })
  }
};

module.exports = helpers;
