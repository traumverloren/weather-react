var React = require('react');
var Forecast = require('../components/Forecast');
var openWeatherHelpers = require('../utils/openWeatherHelpers');

var ForecastContainer = React.createClass({
// initialState: isLoading: true,
// will fetch forecast api data
// once componentdidmount isLoading: false, forecastData

  // this is needed to push params to new route path
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isLoading: true,
      forecastData: {}
    };
  },
  componentDidMount: function() {
    openWeatherHelpers.getForecast(this.props.routeParams.city)
      .then(function (forecastData) {
          this.setState({
            forecastData: forecastData,
            isLoading: false
          })
        }.bind(this));
  },
  componentWillReceiveProps: function(nextProps) {
    openWeatherHelpers.getForecast(nextProps.routeParams.city)
      .then(function (forecastData) {
          this.setState({
            forecastData: forecastData,
            isLoading: false
          })
        }.bind(this));
  },

  handleClick: function(dayForecast) {
    // Here need to add push to router with city query params and state
    // can use routes to pass state and move around application:
    // https://github.com/reactjs/react-router/blob/master/docs/API.md#pushpathnameorloc
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: dayForecast
      }
    })
  },

  render: function() {
    return (
      <Forecast
        location={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        forecastData={this.state.forecastData}
        handleClick={this.handleClick} />
    );
  }

});

module.exports = ForecastContainer;
