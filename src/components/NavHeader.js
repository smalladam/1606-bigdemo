import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

class NavHeader extends React.Component {
  reload(){
    location.reload();
  }
  goBack(){
    browserHistory.goBack();
  }
  render () {
   return(
     <div className="nav-header">
        <p><span className="glyphicon glyphicon-hand-left" aria-hidden="true" onClick={this.goBack.bind(this)}></span></p>
        <h3>Smalladam own website</h3>
        <span className="glyphicon glyphicon-cog" aria-hidden="true" onClick={this.reload.bind(this)}></span>
     </div>
   )
  }
}

export default NavHeader;
