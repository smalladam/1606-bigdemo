import React from 'react';
import { Link } from 'react-router';


class Work extends React.Component {
  render () {
    return(
      <div className="work-container">
        <div className="work-card">
          <Link><img src="http://7xopqp.com1.z0.glb.clouddn.com/contain-none.jpg" /></Link>
          <div className="work-text">
            <h3>作品一</h3>
            <p>2016.9.22</p>
          </div>
        </div>
        <div className="work-card">
          <Link><img src="http://7xopqp.com1.z0.glb.clouddn.com/contain4.jpg" /></Link>
          <div className="work-text">
            <h3>作品一</h3>
            <p>2016.9.23</p>
          </div>
        </div>
        <div className="work-card">
          <Link><img src="http://7xopqp.com1.z0.glb.clouddn.com/contain1.jpg" /></Link>
          <div className="work-text">
            <h3>作品一</h3>
            <p>2016.9.24</p>
          </div>
        </div>
        <div className="work-card">
          <Link><img src="http://7xopqp.com1.z0.glb.clouddn.com/contain2.jpg" /></Link>
          <div className="work-text">
            <h3>作品一</h3>
            <p>2016.9.25</p>
          </div>
        </div>
        <div className="work-card">
          <Link><img src="http://7xopqp.com1.z0.glb.clouddn.com/contain3.jpg" /></Link>
          <div className="work-text">
            <h3>作品一</h3>
            <p>2016.9.26</p>
          </div>
        </div>
        <div className="work-card">
          <Link><img src="http://7xopqp.com1.z0.glb.clouddn.com/contain1.jpg" /></Link>
          <div className="work-text">
            <h3>作品一</h3>
            <p>2016.9.27</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Work;
