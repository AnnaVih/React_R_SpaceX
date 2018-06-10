import React, { Component } from 'react';

import { Button } from 'reactstrap';

class App extends Component {
  state = {
    info: [],
  };

  render() {
    return (
      <div>
        <Button prop={this.state.info} color="danger">
          Click men
        </Button>
      </div>
    );
  }
}

export default App;
