// App.js > SidebarRight.jsx > ProjectSidebar.jsx

// react
import React from 'react';
import {Link} from 'react-router-dom';

// components

// start
export default function ProjectSidebar(){
    const addInstrumentDropdown = () => {
        let instrumentBankArr = []
        return(
            <div className="instrument-dropdown">
                {instrumentBankArr}
            </div>
        )
    }
    let {pathname} = document['location'];
    let sidebarElemArr = [];
    if (pathname && pathname === '/project/active/'){
        sidebarElemArr.push(
            <div className="add-instrument" onClick={() => {addInstrumentDropdown()}} key={`psbr`} >Add Instrument</div>
        );
    }
    return(
        <div className="ProjectSidebar fade-in">
            {sidebarElemArr}
        </div>
    )
}