// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "income",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
          color: "#3498db"
        },
        {
            name: "expenses",
            data: [13, 23, 20, 8, 13, 27, 49, 49], 
            color: "#FF1654"
          },
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height="250"
              width="100%"
              
              
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarChart;