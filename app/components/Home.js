var React = require('react');
var homeBg = require('../styles').homeBg;

var Home = React.createClass({
  render: function () {
    return (
      <div className="container-fluid" style={homeBg}>
        <div className="jumbotron">
          <h2>Hello World!</h2>
          Home.js Container!
        </div>
      </div>
    )
  }
})

module.exports = Home;
