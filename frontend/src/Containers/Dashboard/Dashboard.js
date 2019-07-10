import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import moment from "moment";
import { Bar } from "react-chartjs-2";
import "./Dashboard.scss";

const GetMatrixList = gql`
  query GetMatrixList {
    GetMatrixList {
      _id
      value
      sensorType
      time
    }
  }
`;

class Dashboard extends Component {
  // this will construct the data for barchart
  constructData = resp => {
    const set = new Set();
    const labels = [];
    const temperature = [];
    const light = [];
    const humidity = [];
    for (let info of resp) {
      set.add(moment(info.time.replace(" ", "")).format("LLL"));
      if (info.sensorType === "temperature") {
        temperature.push(info.value);
      } else if (info.sensorType === "light") {
        light.push(info.value);
      } else {
        humidity.push(info.value);
      }
    }
    const data = {
      datasets: [
        {
          label: "Temperature",
          data: temperature,
          backgroundColor: "rgba(241,116,119,0.2)",
          borderColor: "rgba(241,116,119, 1)",
          borderWidth: 1
        },
        {
          label: "Light",
          data: light,
          backgroundColor: "rgba(119,241,116, 0.2)",
          borderColor: "rgba(119,241,116, 1)",
          borderWidth: 1
        },
        {
          label: "Humidity",
          data: humidity,
          backgroundColor: "rgba(116,150,241, 0.2)",
          borderColor: "rgba(116,150,241, 1)",
          borderWidth: 1
        }
      ],
      labels: [...set]
    };
    return data;
  };
  render() {
    return (
      <Query query={GetMatrixList}>
        {data => {
          const response = data.data.GetMatrixList || [];
          const contructedData = this.constructData(response);

         return (
      <div className="bar-chart-container">
        <Bar
          data={contructedData}
          width={100}
          height={50}
          options={{
            scales: {
              xAxes: [{
              type: "time",
              time: {
              unit: "hour"
              }
              }],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            },
            maintainAspectRatio: false
          }}
        />
      </div>
    );
        }}
      </Query>
    );
  }
}

export default Dashboard;
