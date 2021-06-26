import React from 'react';
import "./Sidebaroption3.css"

function Sidebaroption3({title, Icon}) {
    return (
        <div className="sidebarOption3">
            {Icon && <Icon className="sidebarOptionicons" /> }
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default Sidebaroption3
