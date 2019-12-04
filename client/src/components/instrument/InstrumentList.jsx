// App.js > Main.jsx > ProjectView.jsx > ProjectMain.jsx > InstrumentList.jsx

// react
import React from 'react';

// components
import InstrumentContainer from './InstrumentContainer';

// start
export default function InstrumentList({contentObj, save}){
    // state

    // destructuring
    let instrumentArr = contentObj['contentArr'];

    const buildInstrumentList = (_instrumentArr_) => {
        let instElemArr = []
        if (_instrumentArr_) {
            instElemArr = _instrumentArr_.map((instrumentObj, idx) => {
                let idProps = {idStr: `${instrumentObj['name']}${idx}`, instrumentArrIdx: idx}
                return <InstrumentContainer contentObj={contentObj} instrumentObj={instrumentObj} idProps={idProps} save={save} key={`iccc-${idx}`} />
            })
        }
        return instElemArr
    }
    return(
        <div className="InstrumentList">
            {buildInstrumentList(instrumentArr)}
        </div>
    )
}