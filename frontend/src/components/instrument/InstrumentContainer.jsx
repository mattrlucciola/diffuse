// App.js > Main.jsx > ProjectView.jsx > ProjectMain.jsx > InstrumentList.jsx > InstrumentContainer.jsx

// react
import React from 'react';

// style
import './css/InstrumentContainer.css';

// components
import InstrumentHead from './InstrumentHead';
import InstrumentCanvas from './InstrumentCanvas';

// start
export default function InstrumentContainer({contentObj, instrumentObj, idProps, save}){
    // destructure props
    const {name, midi} = instrumentObj;
    return(
        <div className="InstrumentContainer">
            <InstrumentHead name={name} />
            <InstrumentCanvas contentObj={contentObj} midi={midi} idProps={idProps} save={save} />
        </div>
    )
}