var React = require('react');
var Link = require('react-router').Link;
var mainContainer = require('../styles').mainContainer;
var mainHeader = require('../styles').mainHeader;
var headerInput = require('../styles').headerInput;
var GetWeatherContainer = require('../containers/GetWeatherContainer');


var Main = React.createClass({
  render: function () {
    return (
      <div style={mainContainer}>
        <div style={mainHeader}>
          <Link to="/" style={{textDecoration: 'none'}}>
            <h4 style={{color: 'white'}}>Weather-React</h4>
          </Link>
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
