var React = require('react');
var PropTypes = React.PropTypes;
var jumbotron = require('../styles').jumbotron;
var flexContainer = require('../styles').flexContainer;

// function stateless component - only renders UI, no state.
// can write as a function instead of createClass and pass in props as argument.
function GetWeather (props) {
  return (
    <div className="jumbotron col-xs-8 text-center" style={jumbotron}>
      <h1 style={{color: '#f1c40f'}}>Enter a City</h1>
      <div style={flexContainer}>
        <form onSubmit={props.onSubmitLocation}>
          <div className="form-group">
            <input className="form-control"
                   placeholder="Amsterdam, NL"
                   type="text"
                   value={props.location}
                   onChange={props.onUpdateLocation} />
          </div>
          <div className="form-group">
            <button className="btn btn-success">Get Weather</button>
          </div>
        </form>
      </div>
    </div>
  )
};

GetWeather.propTypes = {
  onSubmitLocation: PropTypes.func.isRequired,
  onUpdateLocation: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired
}

module.exports = GetWeather;
