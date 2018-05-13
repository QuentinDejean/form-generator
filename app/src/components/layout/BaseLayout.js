import React from 'react';

const styles = {
  fontFamily: 'sans-serif',
  padding: '32px 30% 0',
};

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

    return <div style={styles}>{this.props.children}</div>;
  }
}

export default BaseLayout;
