import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

class NavHeader extends React.Component {
  handleBack(){
    this.context.router.goBack();
  }

  reload(){
    location.reload();
  }
  render () {
   return(
     <div className="nav-header">
        <p onClick={this.handleBack.bind(this)}><span className="glyphicon glyphicon-hand-left" aria-hidden="true"></span></p>
        <h3>Smalladam own @{this.props.title}</h3>
        <span className="glyphicon glyphicon-cog" aria-hidden="true" onClick={this.reload.bind(this)}></span>
     </div>
   )
 }
}

NavHeader.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default NavHeader;
