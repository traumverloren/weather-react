var React = require('react');
var homeBg = require('../styles').homeBg;
var GetWeatherContainer = require('../containers/GetWeatherContainer');

var Home = React.createClass({
  render: function () {
    return (
      <div className="container-fluid" style={homeBg}>
        <GetWeatherContainer />
      </div>
    )
  }
})

module.exports = Home;
