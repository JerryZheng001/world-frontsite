import React from "react";
import ReactEcharts from "echarts-for-react";
import { init } from 'echarts';

// 图例数据
const legendData = ["10%", "10%", "40%", "40%"];

// 饼图数据
const seriesData = [
  { value: 10, name: "10%" },
  { value: 10, name: "10%" },
  { value: 40, name: "40%" },
  { value: 40, name: "40%" },
];

// 模块颜色
const colorList = [
  "#e6e6e6",
  "#dedede",
  "#d1d1d1",
  "#b8b8b8",
];

// 配置项
const option = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)",
  },
  legend: {
    data: legendData,
    orient: "vertical",
    left: "right",
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      selectedMode: "single",
      radius: [0, "50%"],
      label: {
        position: "inner",
        formatter: "{d}%",
      },
      labelLine: {
        show: false,
      },
      itemStyle: {
        borderColor: "#fff",
        borderWidth: 2,
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "18",
          fontWeight: "bold",
        },
      },
      data: seriesData,
    },
  ],
  color: colorList,
};

// React 组件
const PieChart = () => {
  return (
    <ReactEcharts
      echarts={init}
      option={option}
      style={{ height: "400px", width: "100%" }}
    />
  );
};

export default PieChart;
