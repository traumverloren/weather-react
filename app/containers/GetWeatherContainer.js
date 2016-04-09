var React = require('react');
var GetWeather = require('../components/GetWeather');

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
    e.preventDefault();
    var location = this.state.location;
    this.setState({
      location: ''
    });
    console.log(location);
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
