var React = require('react');
var GetWeather = require('../components/GetWeather');
var openWeatherHelpers = require('../utils/openWeatherHelpers');

var GetWeatherContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
    console.log(this.context);
    // openWeatherHelpers.getCurrentWeather(this.state.location);
    openWeatherHelpers.getForecast(this.state.location);
    e.preventDefault();
    this.setState({
      location: ''
    });

    // Here need to add push to router with city query params
    this.context.router.push('/forecast/' + this.state.location)
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
