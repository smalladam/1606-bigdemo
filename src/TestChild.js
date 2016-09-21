import React, { PropTypes } from 'react';
import TestChildren from './TestChildren';

class TestChild1 extends React.Component {
  render () {
    return(
      <div>
      儿子辈
      <TestChildren />
      </div>
    )
  }
}

export default TestChild1;
