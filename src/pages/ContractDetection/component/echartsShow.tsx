import React, { useEffect } from 'react'
import * as echarts from 'echarts';

export default function EchartsShow({ data }:{data?:any}) {

    useEffect(() => {
        var chartDom = document.getElementById('echarts');
        var myChart = chartDom && echarts.init(chartDom);
        let list = [
            {percentage: 20, name: "医养健康", value: 20},
            {percentage: 30, name: "文化创意", value: 30},
            {percentage: 50, name: "新一代信息技术产业", value: 50},
            
        ] 
        var nameArray = list.map(item=>{
            // eslint-disable-next-line
            return item.name + '\t\t\t' + item.value + '个' + '\t\t\t' + item.percentage + '%'
        })
        var color=['#2ca1ff','#0adbfa','#febe13']
        var data = [];
        for (var i = 0; i < list.length; i++) {
            data.push({
                value: list[i].value,
                // eslint-disable-next-line
                name: list[i].name + '\t\t\t' + list[i].value + '个' + '\t\t\t' + list[i].percentage + '%',
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        shadowBlur: 5,
                        borderRadius:5,
                        borderColor:color[i],
                        shadowColor: color[i]
                    }
                }
            }, {
                value: 1,
                name: '',
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        color: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(0, 0, 0, 0)',
                        borderWidth: 0
                    }
                }
            });
        }
        var option = {
            backgroundColor:"#061740",
            color : color,
            tooltip: {
                show: false
            },
            title: {
                text: '签约项目分类',
                left: '18%',
                top: 'center',
                textStyle: {
                    color: '#ffffff',
                    fontWeight: 'bold',
                    fontSize: "13px",
                }
            },
            legend: [{
                
                orient: 'vertical',
                data:nameArray,
                // left: 'right',
                // top: 'center',
                // align: 'left',
                // itemGap: 1,
                right:10,
                top: 'center',
                textStyle: {
                    color: 'rgba(36, 173, 254, 1)',
                    fontSize: "12px",
                },
                //图例标记的图形高度
                itemHeight: 10,
                //图例标记的图形宽度
                itemWidth: 10,
            },
            ],
            toolbox: {
                show: false
            },
            series: [{
                name: '',
                type: 'pie',
                clockWise: false,
                radius: ['120%', '140%'],
                // width:"55%",
                // height:"55%",
                hoverAnimation: true,
                center: ['30%', '50%'],
                top:"center",
                itemStyle: {
                    normal:{
                        label: {
                            show:false
                        }
                    }
                },
                data: data
            }]
        }; 
       ( option && myChart) && myChart.setOption(option);
      return () => {
        
      }
    }, [])
    



    return  <div id="echarts" style={{width:'500px',height:'300px'}}></div>
}