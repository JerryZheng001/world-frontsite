import ReactEchars from 'echarts-for-react'
import React,{ useMemo } from 'react'
// import * as echarts from 'echarts'

export default function Line({yName,type,data,xData}:{yName?:string,type:string,data:any,xData:any}) {
  const option = useMemo(() => {
    const optionDefault = {
      backgroundColor: '#fff',
      // title:yName,
      title:{
        text:yName,
        x:20,
        y:10,
        textStyle: {
          color: 'rgba(0, 0, 0, 0.3)',
          fontSize:'14px',
          fontWeight: 'normal'
        }
      },
      grid: {
        top: '15%',
        left: '3%',
        right: '8%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        // name:'Last 24h',
        data: xData,
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 0, 0, 0.3)'
          }
        },
        axisLabel: {
          textStyle: {
            color: 'rgba(0, 0, 0, 0.3)'
          }
        }
      },
      yAxis: {
        type: 'value',
        // name: yName,
        axisLine: {
          lineStyle: {
            color: 'rgba(0, 0, 0, 0.3)'
          }
        }
      },
      series: [
        {
          data: data,
          type: type|| 'line',
          itemStyle: {
            normal: {
              lineStyle: {
                width: 5,
              }
            }
          }
        }
      ],
      color: ['#42B6D6']
    }
    return optionDefault
    
  },[data,xData,type,yName])


  return (
    <ReactEchars option={option} notMerge={true} />
  )
}