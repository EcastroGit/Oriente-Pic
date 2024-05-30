import React from "react";



function Spacer({pixels, backgroundColor}) {
    return(
        <div style={{width:"100%", height:`${pixels}px`, backgroundColor:`${backgroundColor}`}}>

        </div>
    )
}

export default Spacer;