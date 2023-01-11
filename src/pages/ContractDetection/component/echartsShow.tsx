import React, { useEffect } from 'react'
import * as echarts from 'echarts';

export default function EchartsShow({ data, }:{data?:any}) {

    useEffect(() => {
        var chartDom = document.getElementById('echarts');
        var myChart = chartDom && echarts.init(chartDom);
        let list = [
            {percentage: 20, name: "Risky", value: 20},
            {percentage: 30, name: "Attention", value: 30},
            {percentage: 50, name: "Passed", value: 50},
            
        ] 
        var nameArray = list.map(item=>{
            // eslint-disable-next-line
            return '\t\t\t' + item.name + '\t\t\t' + item.value +  '\t\t\t' + item.percentage + '%'
        })
        var color=['#FFAE32',' #FF4C4C','#1DD6D0']
        var data = [];
        for (var i = 0; i < list.length; i++) {
            data.push({
                value: list[i].value,
                // eslint-disable-next-line
                name: '\t\t\t' + list[i].name + '\t\t\t' + list[i].value +  '\t\t\t' + list[i].percentage + '%',
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        // shadowBlur: 5,
                        borderRadius:8,
                        borderColor:color[i],
                        // shadowColor: color[i]
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
            backgroundColor:"rgba(255,255,255,0)",
            color : color,
            tooltip: {
                show: false
            },
            title: {
                text: '300 ',
                left: '14%',
                top: '35%',
                subtext:'Total item',
                subtextStyle:{
                    fontSize: "14px",
                },
                textStyle: {
                    color: '#ffffff',
                    fontSize: "34px",
                    fontFamily: "Poppins-SemiBold, Poppins",
                    fontWeight:"600"
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
                    color: '#fff',
                    fontSize: "16px",
                    fontFamily: "Poppins-Regular, Poppins",
                    LineHeight:'50px'
                },
                //图例标记的图形高度
                itemHeight: 16,
                //图例标记的图形宽度
                itemWidth: 16,
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
                center: ['20%', '50%'],
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
    



    return  <div id="echarts" style={{width:'555px',height:'250px'}}></div>
}