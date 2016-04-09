var React = require('react');
var homeBg = require('../styles').homeBg;
var yellowBg = require('../styles').yellowBg;
var flexContainer = require('../styles').flexContainer;
var Home = React.createClass({
  render: function () {
    return (
      <div className="container-fluid" style={homeBg}>
        <div className="jumbotron col-xs-8 text-center" style={yellowBg}>
          <h1 style={{color: '#f1c40f'}}>Enter a City</h1>
          <div style={flexContainer}>
            <form>
              <div className="form-group">
                <input className="form-control"
                       placeholder="City, State"
                       type="text"
                       style={{fontFamily: 'Quicksand'}} />
              </div>
              <div className="form-group">
                <button className="btn btn-success" style={{fontFamily: 'Quicksand'}}>Get Weather</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Home;
