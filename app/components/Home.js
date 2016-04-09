var React = require('react');
var homeBg = require('../styles').homeBg;
var jumbotron = require('../styles').jumbotron;
var flexContainer = require('../styles').flexContainer;

var Home = React.createClass({
  render: function () {
    return (
      <div className="container-fluid" style={homeBg}>
        <div className="jumbotron col-xs-8 text-center" style={jumbotron}>
          <h1 style={{color: '#f1c40f'}}>Enter a City</h1>
          <div style={flexContainer}>
            <form>
              <div className="form-group">
                <input className="form-control"
                       placeholder="Amsterdam, NL"
                       type="text" />
              </div>
              <div className="form-group">
                <button className="btn btn-success">Get Weather</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Home;
