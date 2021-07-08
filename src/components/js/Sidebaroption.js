import React from 'react';
import "../css/Sidebaroption.css"

function Sidebaroption({title, Icon}) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOptionicons" /> }
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default Sidebaroption
