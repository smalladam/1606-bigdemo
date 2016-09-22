import React, { PropTypes } from 'react';
import BlogCard from '../components/BlogCard.js'

let data=[
  {index:1,title:"我是菜鸟",data:'2016-9-22',desc:"唱一首雨季的歌，看高山仰止，云卷云舒，撷一捧清泉，一条路，一个人，就这样，与你相忘于江湖！,",url:'A'},
  {index:2,title:"我是菜鸟",data:'2016-9-23',desc:"唱一首雨季的歌，看高山仰止，云卷云舒，撷一捧清泉，一条路，一个人，就这样，与你相忘于江湖！,",url:'B'},
  {index:3,title:"我是菜鸟",data:'2016-9-24',desc:"唱一首雨季的歌，看高山仰止，云卷云舒，撷一捧清泉，一条路，一个人，就这样，与你相忘于江湖！,",url:'C'},
  {index:4,title:"我是菜鸟",data:'2016-9-25',desc:"唱一首雨季的歌，看高山仰止，云卷云舒，撷一捧清泉，一条路，一个人，就这样，与你相忘于江湖！,",url:'D'}
]

class Blog extends React.Component {
  render () {
  return(
    <div style={{width:"100%",marginTop:'20px'}}>
      { data.map( (item,i) => <BlogCard {...item} key={i} /> ) }
    </div>
  )
  }
}

export default Blog;
