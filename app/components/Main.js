var React = require('react');
var mainContainer = require('../styles').mainContainer;
var mainHeader = require('../styles').mainHeader;
var headerInput = require('../styles').headerInput;

var Main = React.createClass({
  render: function () {
    return (
      <div style={mainContainer}>
        <div style={mainHeader}>
          <h2 style={{color: 'white'}}>Weather-React</h2>
          <div style={headerInput}>
            <input className="form-control"
                   placeholder="Amsterdam, NL"
                   type="text" />
            <button className="btn btn-success" style={{margin: '10px'}}>Get Weather</button>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
