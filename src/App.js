import React from 'react';
import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';
import LeftNav from './components/LeftNav';
import './main.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      showNav:false
    }
  }
  setNavBarState(){
    this.setState({showNav:window.innerWidth > 760 ? true : false});
  }
  componentDidMount(){
    this.setNavBarState();
    window.onresize = this.setNavBarState.bind(this);
  }
  render () {
    return(
      <div className="content-wrap">
        {this.state.showNav ? <LeftNav /> :  <NavHeader /> }
        <div className="content-main">
          {this.props.children}
        </div>
        {this.state.showNav ? null : <NavFooter />}
      </div>
    )
  }
}

export default App;
