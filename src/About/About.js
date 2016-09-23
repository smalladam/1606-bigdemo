import React from 'react';
import echarts from 'echarts';

class About extends React.Component {
  componentDidMount(){

      let option = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['HTML', 'CSS', 'PHOTOSHOP', 'JAVASCRIPT', 'REACT', 'JQUERY'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],

        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[90, 90, 85, 60, 70, 75,]
            }
        ]
    };let myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(option);
  }

  render () {
    return(
      <div className="about-container">
        <h1>我的技能展示</h1>
        <div id="main" style={{width: "800px",height:"600px"}}></div>
        <h1>个人信息</h1>
        <p>喜欢写代码，喜欢睡觉，更喜欢写点东西！</p>
      </div>
    )
  }
}

export default About;
