import React from "react";
import "./styles.css";
import CoronaList from "./components/Results";
import Header from "./components/layout/Header1";
import About from "./components/About";
import News from "./components/News";
import Statewise from "./components/Statewise";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  intervalID;
  state = {
    OfficialResults: [],
    UnOfficialResults: [],
    isLoading: false
  };
  componentDidMount() {
    this.getData();
    this.intervalID = setInterval(this.getData.bind(this), 15000);
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  getData = async () => {
    this.setState({ isLoading: true });
    const official = await axios.get(
      "https://api-covid19-in.herokuapp.com/getdata"
    );
    const unofficial = await axios.get(
      "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"
    );
    this.setState({
      OfficialResults: official.data.results,
      UnOfficialResults: unofficial.data.data.total,
      isLoading: false
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/statewise">
              <Statewise />
            </Route>
            <Route path="/">
              <CoronaList
                OfficialResults={this.state.OfficialResults}
                UnOfficialResults={this.state.UnOfficialResults}
                loading={this.state.isLoading}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
