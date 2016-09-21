import React from 'react';
import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';
import LeftNav from './components/LeftNav';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      showNav:false,
      title:'Home'
    }
  }
  setNavBarState(){
    this.setState({showNav: window.innerWidth > 760 ? true : false});
  }
  componentDidMount(){
    this.setNavBarState();
    window.onresize = this.setNavBarState.bind(this);
  }
  componentWillReceiveProps(){
    this.setTitle();
  }
  componentWillMount(){
    this.setTitle();
  }
  setTitle(){
    this.setState({
      title: this.context.router.isActive('/',true) ? 'Home' :
              this.context.router.isActive('/blog') ? 'Blog' :
              this.context.router.isActive('/work') ? 'Work' :
              this.context.router.isActive('/about') ? 'About' : 'Item'
    })
  }
  render () {
    return(
      <div className="content-wrap">
        {this.state.showNav ? <LeftNav title={this.state.title}  /> : <NavHeader title={this.state.title}/> }
        <div className="content-main">
          {this.props.children}
        </div>
        {this.state.showNav ? null : <NavFooter />}
      </div>
    )
  }
}
App.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default App;
