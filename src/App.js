import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar"
import TeamList from "./components/TeamList";

import axios from "axios";

class App extends Component {

  // default State object
  state = {
    teams: []
  };

  

  componentDidMount() {
    axios.all([
      axios.get('https://api.football-data.org/v2/competitions/PL/matches/?matchday=11', {
        headers: {
          'X-Auth-Token': '74f98bb4071c40b49c2b90ad3aaa219e'
        }
       }),
       axios.get('')
      ])
      .then(([response, odds]) => {
      console.log(response.data.matches);
       console.log(odds);
        // create an array of teams only with relevant data
        const newTeams = response.data.matches.map(c => {
          return {
            id: c.id, 
            homeTeam: c.homeTeam.name, 
            awayTeam: c.awayTeam.name,
            matchDay: c.matchday
          };
        });
        console.log(odds.data);
        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          teams: newTeams
        });

        // store the new state object in the component's state
        this.setState(newState);
        console.log(newState);
      })
      .catch(error => console.log(error));
  }
  
  render() {
    return (
      
      <div className="App">
        
       
        <NavBar game = {"11"} />
      <TeamList teams= {this.state.teams} />
      
      </div>
    );
  }
}
export default App;