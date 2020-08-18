import React from 'react';
import './App.css';
import BreadingCard from './BreadingCard';
import  API_URL  from './Api';

const data = [
  {
    char_id: 1,
    name: "Walter White",
    birthday: "09-07-1958",
    occupation: [
      "High School Chemistry Teacher",
      "Meth King Pin"
    ],
    img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    status: "Deceased",
    appearance: [1, 2, 3, 4, 5],
    nickname: "Heisenberg",
    portrayed: "Bryan Cranston"
  },
  {
    char_id: 4,
    name: "Walter White Jr.",
    birthday: "07-08-1993",
    occupation: [
      "Teenager"
    ],
    img: "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbA...",
    status: "Alive",
    nickname: "Flynn",
    appearance: [1, 2, 3, 4, 5],
    portrayed: "RJ Mitte",
    category: "Breaking Bad",
    better_call_saul_appearance: []
  },
  
]

class App extends React.Component {

  state = {
    feeds: []
  };

  fetchbreakingbad = () => {
    fetch(API_URL, {
      method: "GET"
    })
      .then(data => data.json())
      .then(response => this.setState({ feeds: response }))
    .catch(error=>console.log(error))
  }
  componentDidMount() {
  this.fetchbreakingbad()
}
  render(){
  return (
    <div className="App">
      {
        this.state.feeds.map(obj => (
          <BreadingCard data={obj}/>
        ))
      }
      
    </div>
  );
  }
}

export default App;
