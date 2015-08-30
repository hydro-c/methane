var React = require("react");
// var Header = require("./header");
// var Footer = require("./footer");

var Page = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
});

React.render(<Page />, document.querySelector("#main"));
