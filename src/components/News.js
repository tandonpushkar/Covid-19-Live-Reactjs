import React from "react";
import SwipeableViews from "react-swipeable-views";
import axios from "axios";
import "../styles.css";
class News extends React.Component {
  state = {
    News: [],
    isLoading: false
  };
  async componentDidMount() {
    this.setState({ isLoading: true });
    const res = await axios.get("https://api-covid19-in.herokuapp.com/news");
    this.setState({ News: res.data.results, isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 100
          }}
        >
          <img
            alt="text"
            width="330"
            height="420"
            src={require("./images/cardloading.gif")}
          />
          ;
        </div>
      );
    } else {
      return (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <img
              alt="text"
              src={require("./images/swipe.gif")}
              width="150"
              height="100"
            />
          </div>
          <SwipeableViews enableMouseEvents resistance>
            {this.state.News.map(res => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <div className="news-card">
                  <img
                    alt="text"
                    className="image"
                    style={{ width: "100%" }}
                    src={res.image}
                  />
                  <div className="news-text">
                    <h2 className="title">{res.title}</h2>
                    <p className="description">
                      {res.snippet}{" "}
                      <a
                        className="url"
                        href={res.news_link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        read more
                      </a>
                    </p>

                    <span className="topic">Health</span>
                  </div>
                </div>
              </div>
            ))}
          </SwipeableViews>
        </div>
      );
    }
  }
}

export default News;
