var React = require('react');
var Loading = require('../components/Loading');
var PropTypes = React.PropTypes;

function puke (obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function Forecast (props) {
  if (props.isLoading === true) {
    return (
    <Loading />
    )
  }
  return (
    <div>
      <h1>Forecast for {props.location} </h1>
      {puke(props)}
    </div>
  );
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
}

module.exports = Forecast;
