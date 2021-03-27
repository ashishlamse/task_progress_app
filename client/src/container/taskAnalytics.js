import React from "react";
import ReactEcharts from "echarts-for-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory, withRouter } from "react-router-dom";
import { getStatistics } from '../redux/actions/stats'
import _ from 'lodash'
import EmptyPage from '../component/emptyPage'
import Loading from "../component/loading";

class TaskAnalytics extends React.Component {
  constructor() {
    super();
    this.state = {
      xAxisArray: [],
      taskPerDayArr: []
    };
  }

  componentDidMount() {
    this.getStatsReport();
  }

  getStatsReport = () => {
    this.props
      .dispatch(getStatistics())
      .then(() => {
        let result = this.props.statsSuccessFailure;
        if (result && result.isSuccess) {
          console.log("getStatsReport -> result", result);
          let data = result.response.count;
          data.map((item) => {
            item.createdDate = item.date;
            item.value = item.count
          })
          let xAxisArray = _.map(result.response.count, 'date');
          this.setState({
            taskPerDayArr: data,
            xAxisArray: xAxisArray
          })
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  render() {
    return (
      <div className="container-fluid  parent-div center" >
        <div className="col-md-12 col-sm-12 div-center-align-bread">
          <span className="parent">
            {"Tasks Statistics"}
          </span>
        </div>
        {
          this.state.taskPerDayArr && this.state.taskPerDayArr.length ?
            < div className="row margin-top-div">
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
            :
            this.props.isFetching || <EmptyPage />
        }
        <Loading isFetching={this.props.isFetching} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.statistics.isFetching,
    statsSuccessFailure: state.statistics.statsSuccessFailure,
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    getStatistics
  }),
  dispatch,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TaskAnalytics))