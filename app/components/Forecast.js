var React = require('react');
var Loading = require('../components/Loading');
var forecastParent = require('../styles').forecastParent;
var forecastChild = require('../styles').forecastChild;
var utils = require('../utils/dataProcessing');
var getWeekDay = utils.getWeekDay;
var PropTypes = React.PropTypes;

function DayForecast (props) {
  var day = getWeekDay(props.dayData.dt);
  var temp = Math.round(props.dayData.temp.day);
  var description = props.dayData.weather[0].description;
  return (
    <div style={forecastChild}>
      <h4>{day}</h4>
      <h4>{temp} °F</h4>
      <h5>{description}</h5>
    </div>
  )
}

function Forecast (props) {
  if (props.isLoading === true) {
    return (
    <Loading />
    )
  }

  return (
    <div>
      <div className="container">
        <h1 className="text-center" style={{fontFamily: 'Sacramento', fontSize: '60px'}}>{props.location}</h1>
        <div style={forecastParent}>
          {props.forecastData.list.map(function(day) {
            return <DayForecast key={day.dt} dayData={day} />
            })
          }
        </div>
      </div>
    </div>
  );
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
}

module.exports = Forecast;
