import React, { useEffect } from 'react'
import * as echarts from 'echarts';
interface Echartechdata {
    type: string;
    count: number;
    ratio: string;
}
export default function EchartsShow({ echdata, }:{echdata:Echartechdata[]}) {
   
   
    useEffect(() => {
        var chartDom = document.getElementById('echarts');
        var myChart = chartDom && echarts.init(chartDom);
        var nameArray = echdata.map(item=>{
            // eslint-disable-next-line
            return '\t\t\t' + item.type + '\t\t\t\t' + item.count +  '\t' + '('+ Number(Number(item.ratio)*100).toFixed(2)   + '%'+')'
        })
        var color=['#E13131','#FF7620','#FFC92B','#20DDB5']
        var data = [];
        var Total =  echdata.length!==0 ? Number(Number(echdata[3].ratio)*100).toFixed(2) + '%' :0
        // var Total =  echdata.length!==0 ? echdata[0].count + echdata[1].count + echdata[2].count + (echdata[3]?echdata[3].count:0) :0
        for (var i = 0; i < echdata.length; i++) {
            data.push({
                value: echdata[i].count,
                // eslint-disable-next-line 
                name: '\t\t\t' + echdata[i].type + '\t\t\t\t' + echdata[i].count +  '\t'  + '('+ Number(Number(echdata[i].ratio)*100).toFixed(2)+ '%' +')',
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        // borderRadius:5,
                        borderColor:color[i],
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
                text: Total ,
                left: '26.5%',
                top: '44%',
                // subtext:'Total item',
                // subtextStyle:{
                //     fontSize: "14px",
                // },
                textStyle: {
                    color: '#ffffff',
                    fontSize: "24px",
                    fontFamily: "Poppins-SemiBold, Poppins",
                    fontWeight:"600"
                }
            },
            legend: [{
                orient: 'vertical',
                data:nameArray,
                selectedMode:false,
                // left: 'right',
                // top: 'center',
                // align: 'left',
                itemGap: 20,
                right:'10%',
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
                avoidLabelOverlap:false,
                radius: ['35%', '70%'],
                width:"80%",
                height:"80%",
                hoverAnimation: true,
                center: ['40%', '50%'],
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
    }, [echdata])
    



    return  <div id="echarts" style={{width:'744px',height:'411px'}}></div>
}