import React from 'react';

// react-hot-loader/docs/Troubleshooting.md
// https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md
import '!style!css!sass!../styles/app.scss';

const Container = React.createClass({
  render () {
    return (
      <div className="container">
        js successful loaded
      </div>
    );
  }
});

export default Container;
