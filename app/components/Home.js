var React = require('react');
var homeBg = require('../styles').homeBg;
var jumbotron = require('../styles').jumbotron;
var jumbotronInput = require('../styles').jumbotronInput;
var openWeatherHelpers = require('../utils/openWeatherHelpers');

var GetWeatherContainer = require('../containers/GetWeatherContainer');

var Home = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      lat: '',
      lon: '',
      geoLocated: false
    }
  },

  componentWillMount: function () {
    console.log(this.state);

    this.getWeatherGeo();
    // This is null for some reason....
    console.log(this.state.geoLocated);
    if (this.state.geoLocated === true) {
      openWeatherHelpers.getGeoLocationForecast(this.state.lat, this.state.lon)
      .then(function (forecastData) {
        this.setState({
          lat: '',
          lon: '',
          geoLocated: false
        });
        console.log(this)
        this.context.router.push('/forecast/' + forecastData.city.name)
      });
    }
  },

  getWeatherGeo: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          this.setState({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            geoLocated: true
          });
          console.log(this.state)
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
