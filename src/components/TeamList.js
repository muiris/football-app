import React from "react";

// import the Teams component
import Team from "./Team";


function TeamList(props) {
  return (
    <div>
      {props.teams.map(c => <Team key={c.id} matchDay={c.matchDay} homeTeam={c.homeTeam}  awayTeam={c.awayTeam} />)}
     </div> 
  ); 
} 

export default TeamList;