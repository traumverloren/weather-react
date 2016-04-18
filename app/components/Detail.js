var React = require('react');
var PropTypes = React.PropTypes;

var Detail = React.createClass({

  render: function() {
    console.log(this.props.location.state.weather.temp.day);
    return (
      <div>
        Detail Component!
        Temperature: 
        {this.props.location.state.weather.temp.day}
      </div>
    );
  }

});

module.exports = Detail;
