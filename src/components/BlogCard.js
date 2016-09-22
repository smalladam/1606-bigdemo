import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class BlogCard extends React.Component {
  render () {
    let styles={
      root:{
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        width:'96%',
        height:'',
        borderRadius:'8px',
        margin:'0 auto',
        marginBottom:'20px',
      },
      index:{
       backgroundColor:'#00bcd4',
       borderRadius:'8px 8px 0px 0px',
       textAlign:'center',
       padding:'20px 0',

      },
      top:{
        display:"block",
        margin:"0 auto",
        fontSize:'36px',
        color:'#FFFFFF',
        lineHeight:'70px',
        width:'72px',
        height:'72px',
        border:"2px solid #ffffff",
        borderRadius:'50%',
      },
      content:{
        padding:'16px',
        color:'#727272',
      },
      title:{
        fontSize:'20px',
        marginBottom:'20px'
      },
      data:{
        color:'#00bcd4',
        fontSize:'16px',
        float:"right",
        paddingRight:'12px',
      },
      desc:{
        fontSize:'18px',
        marginBottom:'20px'
      },
      btn:{
        display:'block',
        float:"right",
        border:"2px solid #00bcd4",
        padding:'3px 20px',
        borderRadius:'18px',
        marginTop:'-18px',
      }
    }
let address = `item/${this.props.url}`;
   return(
     <div style={styles.root}>
      <div style={styles.index}>
      <span style={styles.top}>{this.props.index}</span>
      </div>
      <div style={styles.content}>
        <p style={styles.title}>{this.props.title}<em style={styles.data}>{this.props.data}</em></p>
        <p style={styles.desc}>{this.props.desc}</p>
        <Link style={styles.btn} className="blog-btn" to={address}>阅读更多</Link>
      </div>
     </div>
   )
  }
}

BlogCard.defaultProps={
  index:1,
  title:'这里是标题',
  data:'2016-9-22',
  desc:'这里是介绍',
}
BlogCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};
export default BlogCard;
