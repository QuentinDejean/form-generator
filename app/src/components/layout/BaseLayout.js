import React from 'react';

class BaseLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: undefined };
  }

  componentDidCatch(error, info) {
    this.setState({ error: info });
  }

  render() {
    if (this.state.error) {
      return (
        <React.Fragment>
          <h1>Something went wrong.</h1>
          <div>{this.state.error}</div>
        </React.Fragment>
      );
    }

    return this.props.children;
  }
}

export default BaseLayout;
