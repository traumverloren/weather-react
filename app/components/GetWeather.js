var React = require('react');
var jumbotron = require('../styles').jumbotron;
var flexContainer = require('../styles').flexContainer;

var GetWeather = React.createClass({
  render: function() {
    return (
      <div className="jumbotron col-xs-8 text-center" style={jumbotron}>
        <h1 style={{color: '#f1c40f'}}>Enter a City</h1>
        <div style={flexContainer}>
          <form onSubmit={this.props.onSubmitLocation}>
            <div className="form-group">
              <input className="form-control"
                     placeholder="Amsterdam, NL"
                     type="text"
                     value={this.props.location}
                     onChange={this.props.onUpdateLocation} />
            </div>
            <div className="form-group">
              <button className="btn btn-success">Get Weather</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = GetWeather;
