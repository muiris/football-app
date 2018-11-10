import React from "react";
import "./Team.css";

import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

function Team(props) {
  return (
    <div className="team">
      <span>{props.homeTeam} <Button>D</Button> {props.awayTeam}</span>
    </div>
  );
}

Team.propTypes = {
  homeTeam: PropTypes.string.isRequired
};

export default Team;