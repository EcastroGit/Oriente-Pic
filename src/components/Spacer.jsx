import React from "react";
import { PropTypes } from 'prop-types';

function Spacer({pixels, backgroundColor}) {
    return(
        <div style={{width:"100%", height:`${pixels}px`, backgroundColor:`${backgroundColor}`}}>

        </div>
    )
}

Spacer.propTypes = {
    pixels: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string
  };

export default Spacer;