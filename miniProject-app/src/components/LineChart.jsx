import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
        stroke: {
            curve: 'smooth',
          }
      },
      series: [
        {
            name: "Expenses",
            data: [1.4, 2, 29, 1.5, 2.5, 2.8, 3.8, 4.6],
            color: '#FF1654'
          },
          {
            name: "Income",
            data: [20, 29, 37, 36, 44, 45, 50, 58],
          }
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
              type="line"
              height="250"
              width="100%"
              
              
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineChart;