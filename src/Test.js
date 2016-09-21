import React, { PropTypes } from 'react';
import TestChild from './TestChild';

class Test extends React.Component {
  render () {
    getChildContext(){
      return{color:'purple'};
    }
    return(
      <div>
        爷爷辈的
        <TestChild />
      </div>
    )

  }
}
Test.childContextTypes = {
  color: React.PropTypes.string
};

export default Test;
