import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class NavFooter extends React.Component {
  render () {
   return(
     <div className="nav-footer">
         <Link activeStyle={{color:"#673AB7"}} onlyActiveOnIndex={true} to="/"><span className="glyphicon glyphicon-home"></span><br/>Home</Link>
         <Link activeStyle={{color:"#673AB7"}} to="/blog"><span className="glyphicon glyphicon-book"></span><br/>Blog</Link>
         <Link activeStyle={{color:"#673AB7"}} to="/work"><span className="glyphicon glyphicon-edit"></span><br/>Work</Link>
         <Link activeStyle={{color:"#673AB7"}} to="/about"><span className="glyphicon glyphicon-user"></span><br/>About</Link>
     </div>
   )
  }
}

export default NavFooter;
