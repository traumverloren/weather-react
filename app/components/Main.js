var React = require('react');
var Link = require('react-router').Link;
var mainContainer = require('../styles').mainContainer;
var mainHeader = require('../styles').mainHeader;
var headerInput = require('../styles').headerInput;
var GetWeatherContainer = require('../containers/GetWeatherContainer');
var openWeatherHelpers = require('../utils/openWeatherHelpers');

var Main = React.createClass({

  componentDidMount: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
        function success(position) {
          var lat = position.coords.latitude;
          var lon = position.coords.longitude;
          console.log(position);
          openWeatherHelpers.getGeoLocationForecast(lat, lon)
          .then(function (forecastData) {
              console.log(forecastData)
            });
        };
        function error() {

        };
      }
  },

  render: function () {
    return (
      <div style={mainContainer}>
        <div style={mainHeader}>
          <Link to="/" style={{textDecoration: 'none'}}>
            <h4 style={{color: 'white'}}>Weather-React</h4>
          </Link>
          <div style={headerInput}>
            <GetWeatherContainer />
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
