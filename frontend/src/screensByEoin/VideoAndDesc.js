import React from "react";
import "./byEoin.css";
import stoveburning from "../imagesByEoin/stoveburning.png";
import firewoodgraphic from "../imagesByEoin/firewoodgraphic.png";
import { Link } from 'react-router-dom';

function VideoAndDesc() {
  return (
    <div className="videoAndDescription">
      <div className="left33">
        <div className="textToSquare">
          <div className="firewoodInfographicDiv">
            <img src={firewoodgraphic} />
          </div>
          <div className="main-text-block">
            <h1>Firewood. Delivered.</h1>
            <h5>
              Order online and get firewood delivered in Westmeath.
              <br /> Seasoned and dried by air or kiln.
            </h5>
          </div>
          <div className="orderNowButton">
            <Link to="/"><h2 className="orangeText">Order Now</h2></Link>
          </div>
        </div>
      </div>

      <div className="right66">
        <img src={stoveburning} />
      </div>
    </div>
  );
}

export default VideoAndDesc;
