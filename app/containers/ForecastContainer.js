var React = require('react');
var Forecast = require('../components/Forecast');
var openWeatherHelpers = require('../utils/openWeatherHelpers');

var ForecastContainer = React.createClass({
// initialState: isLoading: true,
// will fetch forecast api data
// once componentdidmount isLoading: false, forecastData
  getInitialState: function() {
    console.log(this.props);
    return {
      isLoading: true,
      forecastData: {}
    };
  },
  componentDidMount: function() {
    openWeatherHelpers.getForecast(this.props.params.city)
      .then(function (forecastData) {
          this.setState({
            forecastData: forecastData,
            isLoading: false
          })
        }.bind(this));
  },

  render: function() {
    return (
      <Forecast
        location={this.props.params.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData} />
    );
  }

});

module.exports = ForecastContainer;
