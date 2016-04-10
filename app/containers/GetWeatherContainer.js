var React = require('react');
var GetWeather = require('../components/GetWeather');
var openWeatherHelpers = require('../utils/openWeatherHelpers');

var GetWeatherContainer = React.createClass({
  getInitialState: function() {
    return {
      location: ''
    }
  },

  handleUpdateLocation: function (e) {
    this.setState({
      location: e.target.value
    })
  },

  handleSubmitLocation: function (e) {
    console.log(this.state.location);
    // openWeatherHelpers.getCurrentWeather(this.state.location);
    openWeatherHelpers.getForecast(this.state.location);
    e.preventDefault();
    this.setState({
      location: ''
    });
  },

  render: function () {
    return (
      <GetWeather
        onSubmitLocation={this.handleSubmitLocation}
        onUpdateLocation={this.handleUpdateLocation}
        location={this.state.location} />
    )
  }
})

module.exports = GetWeatherContainer;
