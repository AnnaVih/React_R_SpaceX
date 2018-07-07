import React, { Component } from 'react';

import Aux from '../hoc/Aux/Aux';

class About extends Component {
  state = {
    data: '',
  };

  render() {
    return (
      <Aux>
        <div data={this.state.data}>About SPACEX</div>
      </Aux>
    );
  }
}

export default About;
