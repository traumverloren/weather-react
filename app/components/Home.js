var React = require('react');
var homeBg = require('../styles').homeBg;
var jumbotron = require('../styles').jumbotron;
var jumbotronInput = require('../styles').jumbotronInput;

var GetWeatherContainer = require('../containers/GetWeatherContainer');

var Home = React.createClass({
  initialState: function () {
    lat: '',
    lon: ''
  }
  componentWillMount: function () {
    this.getWeatherGeo();
  },

  getWeatherGeo: function () {
    console.log(this.state);


    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(success, error);
    //     function success(position) {
    //       var lat = position.coords.latitude;
    //       var lon = position.coords.longitude;
    //       console.log(position);
    //       openWeatherHelpers.getGeoLocationForecast(lat, lon)
    //       .then(function (forecastData) {
    //           console.log(forecastData)
    //         });
    //     };
    //     function error() {
    //
    //     };
    //   }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          this.setState({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        }.bind(this),
      function (error) {
        console.log("ERROR")
      })
    }
  },

  render: function () {
    return (
      <div className="container-fluid text-center" style={homeBg}>
        <div className="jumbotron col-xs-8 text-center" style={jumbotron}>
          <h1 style={{color: '#f1c40f'}}>Enter a City</h1>
          <div style={jumbotronInput}>
            <GetWeatherContainer />
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Home;
