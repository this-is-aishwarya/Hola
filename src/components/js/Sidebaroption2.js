import React from 'react';
import "../css/Sidebaroption2.css"

function Sidebaroption2({title, Icon}) {
    return (
        <div className="sidebarOption2">
            {Icon && <Icon className="sidebarOptionicons" /> }
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default Sidebaroption2
