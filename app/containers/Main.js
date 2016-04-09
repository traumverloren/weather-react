var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Main.js Container</h2>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
