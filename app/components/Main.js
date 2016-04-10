var React = require('react');
var mainContainer = require('../styles').mainContainer;
var mainHeader = require('../styles').mainHeader;
var headerInput = require('../styles').headerInput;
var GetWeatherContainer = require('../containers/GetWeatherContainer');


var Main = React.createClass({
  render: function () {
    return (
      <div style={mainContainer}>
        <div style={mainHeader}>
          <h4 style={{color: 'white'}}>Weather-React</h4>
          <div style={headerInput}>
            <GetWeatherContainer />
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
