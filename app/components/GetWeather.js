var React = require('react');
var PropTypes = React.PropTypes;

// function stateless component - only renders UI, no state.
// can write as a function instead of createClass and pass in props as argument.
function GetWeather (props) {
  return (
    <form className="form-inline" onSubmit={props.onSubmitLocation}>
      <input className="form-control"
             placeholder="Amsterdam"
             type="text"
             value={props.location}
             onChange={props.onUpdateLocation}
             style={{maxWidth: '120px', display: 'inline-block'}} />
           <button className="btn btn-success" style={{margin: '10px', display: 'inline-block'}}>Get Weather</button>
    </form>
  )
}

GetWeather.propTypes = {
  onSubmitLocation: PropTypes.func.isRequired,
  onUpdateLocation: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired
}

module.exports = GetWeather;
