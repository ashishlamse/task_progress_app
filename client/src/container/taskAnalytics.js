import React from "react";
import ReactEcharts from "echarts-for-react";

export default class TaskAnalytics extends React.Component {
  constructor() {
    super();
    this.state = {
      xAxisArray: [
        "20/1/2021",
        "21/1/2021",
        "22/12/2021",
        "23/1/2021",
        "24/1/2021",
        "25/1/2021",
        "26/1/2021",
        "08/1/2021",
        "03/1/2021",
        "06/1/2021"
      ],
      taskPerDayArr: [
        { createdDate: "20/1/2021", value: 2 },
        { createdDate: "21/1/2021", value: 5 },
        { createdDate: "22/12/2021", value: 7 },
        { createdDate: "23/1/2021", value: 8 },
        { createdDate: "24/1/2021", value: 1 },
        { createdDate: "25/1/2021", value: 2 },
        { createdDate: "26/1/2021", value: 10 },
        { createdDate: "08/1/2021", value: 1 },
        { createdDate: "03/1/2021", value: 18 },
        { createdDate: "06/1/2021", value: 23 }
      ]
    };
  }

  render() {
    return (
      <div className="container-fluid  parent-div center" >
        <div className="col-md-12 col-sm-12 div-center-align-bread">
          <span className="parent">
            {"Tasks Statistics"}
          </span>
        </div>
        <div className="row margin-top-div">
          <ReactEcharts
            option={{
              toolbox: {
                orient: "horizontal",
                feature: {
                  magicType: {
                    type: ["line", "bar"],
                    title: {
                      line: "Line Chart",
                      bar: "Bar Chart"
                    }
                  }
                }
              },
              xAxis: {
                type: "category",
                boundaryGap: false,
                data: this.state.xAxisArray,
                name: "Tasks creation logs",
                nameLocation: "center",
                nameGap: 28,
                nameTextStyle: {
                  fontWeight: "bolder"
                }
              },
              yAxis: {
                type: "value",
                name: "Tasks created per day",
                nameLocation: "center",
                nameGap: 28,
                nameTextStyle: {
                  fontWeight: "bolder"
                }
              },
              series: [
                {
                  data: this.state.taskPerDayArr,
                  type: "line",
                  areaStyle: {
                    color: "#d2e9f2"
                  },
                  lineStyle: {
                    color: "#73c0de"
                  },
                  itemStyle: {
                    color: "#0057b8"
                  }
                }
              ]
            }}
            style={{ height: "380px", width: "100%" }}
          />
        </div>
      </div>
    );
  }
}
