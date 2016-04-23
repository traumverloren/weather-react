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
  var icon = "app/images/" + props.dayData.weather[0].icon + ".png";

  // this is the most inner component, so it has the onClick event that triggers the handleClick
  // event to go back up thru the parents until it gets to the ForecastContainer
  // and then knows to push the route
  return (
    <div onClick={props.handleClick} key={day} style={forecastChild}>
      <h4>{day}</h4>
      <img src={icon}></img>
      <h4>{temp} °F</h4>
    </div>
  )
}

function Forecast (props) {
  if (props.isLoading === true) {
    return (
    <Loading />
    )
  }

  // bind(null, day) is necessary instead of bind(this, day) since it is a child/parent:
  // In real terms, this means if you want to set the first argument by calling .bind on a function...
  // ...passed in via props, pass null as the first argument e.g. this.props.onChange.bind(null, "first arg")
  //...taken from 'this', pass 'this' as the first argument e.g. this.handleChange.bind(this, "first arg")
  return (
    <div>
      <div className="container-fluid">
        <h1 className="text-center" style={{fontFamily: 'Sacramento', fontSize: '60px'}}>{props.location}</h1>
        <div style={forecastParent}>
          {props.forecastData.list.map(function(day) {
            return <DayForecast key={day.dt} handleClick={props.handleClick.bind(null, day)} dayData={day} />
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
