import React from "react";
import axios from "axios";
import ComboBox from "./layout/ComboBox";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import "../styles.css";
import { Pie } from "react-chartjs-2";

const array = [];
let stateind = "";

class Statewise extends React.Component {
  state = {
    isLoading: false,
    chartData: {
      labels: ["Total Cases", "Recoveries", "Deaths"],
      datasets: [
        {
          label: "Statewise",
          backgroundColor: ["#00A6B4", "#2FDE00", "#B21F00"],
          hoverBackgroundColor: ["#003350", "#175000", "#501800"],
          data: [0, 0, 0]
        }
      ]
    }
  };

  searchStates = async text => {
    this.setState({ isLoading: true });
    var stateCopy = Object.assign({}, this.state.chartData);
    const res = await axios.get(
      `https://api-covid19-in.herokuapp.com/getdata?state=${text}`
    );
    res.data.results.map(res =>
      array.push(res.total, res.recoveries, res.deaths)
    );
    res.data.results.map(res => (stateind = res.state));
    stateCopy.datasets[0].label = stateind;
    stateCopy.datasets[0].data.splice(0, 3, ...array);

    array.length = 0;
    this.setState({ chartData: stateCopy, isLoading: false });
  };

  render() {
    return (
      <div style={{ marginTop: 30 }}>
        <ComboBox searchStates={this.searchStates} />
        {this.state.isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <img
              alt="text"
              src={require("./images/piechartLoader.gif")}
              width="300"
              height="250"
            />
          </div>
        ) : (
          <div>
            <Pie
              data={this.state.chartData}
              options={{
                title: {
                  display: true,
                  text:
                    this.state.chartData.datasets[0].label +
                    " Coronavirus Status",
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: "right"
                }
              }}
            />
            <Paper
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                padding: 5
              }}
            >
              {this.state.chartData.datasets[0].data.map((data, index) => {
                let icon, label, color;

                if (index === 0) {
                  color = "#3F51B5";
                  label = "Total Cases";
                  icon = <SentimentDissatisfiedIcon />;
                } else if (index === 1) {
                  color = "#4CAF50";
                  label = "Recoveries";
                  icon = <SentimentVerySatisfiedIcon />;
                } else {
                  color = "#f44336";
                  label = "Deaths";
                  icon = <SentimentVeryDissatisfiedIcon />;
                }

                return (
                  <Chip
                    key={index}
                    style={{
                      margin: 5,
                      backgroundColor: color
                    }}
                    color={"primary"}
                    icon={icon}
                    label={label + " : " + data}
                  />
                );
              })}
            </Paper>
          </div>
        )}
      </div>
    );
  }
}

export default Statewise;
