const React = require('react');
const ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h1>Welcome to Commons</h1>
      </div>
    );
  }
})

ReactDOM.render(<App/>, document.getElementById('react-container'));