import React from "react";
import "./App.css";
import BreadingCard from "./BreadingCard";
import API_URL from "./Api";

class App extends React.Component {
  state = {
    feeds: [],
  };

  fetchbreakingbad = () => {
    fetch(API_URL, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((response) => this.setState({ feeds: response }))
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    this.fetchbreakingbad();
  }
  render() {
    return (
      <div>
        <h1 className="breaking__top">Breaking Bad API</h1>
        <div className="App">
          {this.state.feeds.length > 0 ? (
            this.state.feeds.map((obj) => <BreadingCard data={obj} />)
          ) : (
            <h1 className="breaking">Loading...</h1>
          )}
        </div>
      </div>
    );
  }
}

export default App;
