var React = require('react');
var PropTypes = React.PropTypes;

// function stateless component - only renders UI, no state.
// can write as a function instead of createClass and pass in props as argument.
function GetWeather (props) {
  return (
    <div className="input-group" style={{margin: '5px auto 5px auto'}}>
      <form onSubmit={props.onSubmitLocation}>
        <input className="form-control"
               placeholder="Amsterdam"
               type="text"
               value={props.location}
               onChange={props.onUpdateLocation}
               style={{maxWidth: '108px'}} />
         <span className="input-group-btn">
           <button className="btn btn-success" style={{marginRight: '10px'}}><i className="fa fa-search"></i></button>
         </span>
      </form>
    </div>
  )
}

GetWeather.propTypes = {
  onSubmitLocation: PropTypes.func.isRequired,
  onUpdateLocation: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired
}

module.exports = GetWeather;
