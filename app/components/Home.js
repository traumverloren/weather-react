var React = require('react');
var homeBg = require('../styles').homeBg;
var jumbotron = require('../styles').jumbotron;
var jumbotronInput = require('../styles').jumbotronInput;

var GetWeatherContainer = require('../containers/GetWeatherContainer');

var Home = React.createClass({
  render: function () {
    return (
      <div className="container-fluid" style={homeBg}>
        <div className="jumbotron col-xs-8 text-center" style={jumbotron}>
          <h1 style={{color: '#f1c40f'}}>Enter a City</h1>
          <div style={jumbotronInput}>
            <GetWeatherContainer />
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Home;
