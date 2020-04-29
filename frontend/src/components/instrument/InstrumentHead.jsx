// App.js > ProjectView.jsx > ProjectMain.jsx > InstrumentList.jsx > InstrumentContainer.jsx > InstrumentHead.jsx

// react
import React from 'react';

// style
import './css/InstrumentHead.css';

// components

// start
export default function InstrumentHead({name}){
    /**@type {React.CSSProperties}*/
    const instrumentStyling = {
        display:'flex',
        flexFlow:'row',
        justifyContent:'center',
        alignItems:'center',
    }
    return(
        <div className="InstrumentHead" style={instrumentStyling} >
            {name}
        </div>
    )
}