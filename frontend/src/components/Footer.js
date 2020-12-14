import React from 'react';
import firewoodstack from "../imagesByEoin/firewoodstack.jpeg";
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Footer(){
    return (
        <footer>
        <div className="footer">

            <div>
            <p>&copy; timberandbarkmulch 2020 - Lynch Tree Surgery.</p>
            <p><LocationOnIcon/> Mullingar, Westmeath, Ireland.</p></div>
        </div>
      <div className="firewoodSection">
        <img src={firewoodstack} />
      </div>
        </footer>
    );
}

export default Footer;