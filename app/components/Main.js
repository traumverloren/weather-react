var React = require('react');
var mainContainer = require('../styles').mainContainer;

var Main = React.createClass({
  render: function () {
    return (
      <div style={mainContainer}>
        <h2>Main.js Container</h2>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
