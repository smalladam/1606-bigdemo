import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class LeftNav extends React.Component {

  render () {
   return(
     <div className="Left-Nav">
         <h3>Smalladam@{this.props.title}</h3>
         <Link activeStyle={{color:"#673AB7"}} onlyActiveOnIndex={true} to="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>&nbsp;&nbsp;Home</Link>
         <Link activeStyle={{color:"#673AB7"}} to="/blog"><span className="glyphicon glyphicon-book" aria-hidden="true"></span>&nbsp;&nbsp;Blog</Link>
         <Link activeStyle={{color:"#673AB7"}} to="/work"><span className="glyphicon glyphicon-edit" aria-hidden="true"></span>&nbsp;&nbsp;Work</Link>
         <Link activeStyle={{color:"#673AB7"}} to="/about"><span className="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;&nbsp;About</Link>
     </div>
   )
  }
}


export default LeftNav;
