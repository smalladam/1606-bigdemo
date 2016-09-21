import React, { PropTypes } from 'react'

class TestChildren extends React.Component {
  componentDidMount(){
    console.log(this.context);
  }
  render () {
   return(
     <div>
     孙子辈
     </div>
   )
  }
}

TestChildren.contextTypes = {
  color: React.PropTypes.string
};
export default TestChildren;
