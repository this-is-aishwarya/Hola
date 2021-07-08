import React from 'react';
import "../css/Sidebaroption4.css"

function Sidebaroption4({title, Icon}) {
    return (
        <div className="sidebarOption4">
            {Icon && <Icon className="sidebarOptionicons" /> }
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default Sidebaroption4
