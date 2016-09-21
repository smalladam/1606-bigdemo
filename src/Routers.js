import React from 'react';
import { Router,Route, hashHistory,IndexRoute } from 'react-router';

import App from './App';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import Work from './Work/Work';
import About from './About/About';


 class Routers extends React.Component {
  render () {
   return(
     <Router history={hashHistory}>
       <Route path='/' component={App}>
         <IndexRoute component={Home} />
           <Route path='/blog' component={Blog} />
           <Route path='/work' component={Work} />
           <Route path='/about' component={About} />
       </Route>
     </Router>
   )
  }
}

export default Routers
