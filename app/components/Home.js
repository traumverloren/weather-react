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
      isLoading: true
    }
  },

  componentWillMount: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          openWeatherHelpers.getGeoLocationForecast(position.coords.latitude, position.coords.longitude)
          .then(function (forecastData) {
            this.context.router.push('/forecast/' + forecastData.city.name)
          }.bind(this));
      }.bind(this),
      function (error) {
        // TODO
        console.log("ERROR")
      })
    }
  },

  render: function () {
    console.log(this.state.isLoading);
    if (this.state.isLoading) {
      return (<div>Loading...</div>);
    } else {
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
  }
})

module.exports = Home;
