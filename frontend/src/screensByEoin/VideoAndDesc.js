import React from "react";
import "./byEoin.css";
import stoveburning from "../imagesByEoin/stoveburning.png";
import firewoodgraphic from "../imagesByEoin/firewoodgraphic.png";

function VideoAndDesc() {
  return (
    <div className="videoAndDescription">

      <div className="left33">
        <div className="textToSquare">
          <h1>Firewood, delivered...</h1>
        </div>
        <div className="firewoodInfographicDiv">
        <img src={firewoodgraphic} />
        </div>
      </div>

      <div className="right66">
  
        <img src={stoveburning} />
      </div>

    </div>
  );
}

export default VideoAndDesc;
