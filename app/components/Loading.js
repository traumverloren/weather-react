var React = require('react');
var homeBg = require('../styles').homeBg;
var jumbotron = require('../styles').jumbotron;

function Loading (props) {
  return (
    <div className="container-fluid" style={homeBg}>
      <div className="jumbotron col-xs-8 text-center" style={jumbotron}>
        <h1 style={{color: '#f1c40f'}}>Loading...</h1>
        <i style={{color: '#f1c40f'}} className="fa fa-spinner fa-spin fa-4x fa-fw margin-bottom"></i>
      </div>
    </div>
  );
}


module.exports = Loading;
