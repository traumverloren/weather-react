var React = require('react');
var forecastParent = require('../styles').forecastParent;
var dayDetail = require('../styles').dayDetail;
var utils = require('../utils/dataProcessing');
var getWeekDay = utils.getWeekDay;

var Detail = React.createClass({
  render: function() {
    var dayData = this.props.location.state.weather;
    var day = getWeekDay(dayData.dt);
    var highTemp = Math.round(dayData.temp.max);
    var lowTemp = Math.round(dayData.temp.min);
    var humidity = dayData.humidity;
    var description = dayData.weather[0].description;
    var icon = "app/images/" + dayData.weather[0].icon + ".png";

    console.log(dayData);
    return (
      <div className="container-fluid">
        <div style={forecastParent}>
          <div style={dayDetail}>
            <h1 className="text-center" style={{fontFamily: 'Sacramento', fontSize: '60px'}}>{this.props.routeParams.city}</h1>
            <h4>{day}</h4>
            <img src={icon}></img>
            <h5>{description}</h5>
            <h4>High: {highTemp} °F</h4>
            <h4>Low: {lowTemp} °F</h4>
            <h4>Humidity: {humidity}%</h4>

          </div>
        </div>
      </div>
    );
  }

});

module.exports = Detail;
