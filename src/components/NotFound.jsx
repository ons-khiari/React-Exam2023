import React, { Component } from 'react';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: false
    };
  }

  componentDidMount() {
    this.showTimeout = setTimeout(() => {
      this.setState({ showMessage: true });
      this.hideTimeout = setTimeout(() => {
        this.setState({ showMessage: false });
      }, 3000);
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.showTimeout);
    clearTimeout(this.hideTimeout);
  }

  render() {
    return (
      <div>
        <h2>404 - Not Found</h2>
        {this.state.showMessage && <p>Redirect to Movies page</p>}
      </div>
    );
  }
}

export default NotFound;