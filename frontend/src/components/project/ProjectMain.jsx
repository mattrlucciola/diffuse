// App.js > Main.jsx > ProjectView.jsx > ProjectMain.jsx

// react
import React from 'react';

// style
import './css/ProjectMain.css';

// components
import InstrumentList from '../instrument/InstrumentList';

// modules

// start
export default function ProjectMain({loggedIn, projectMainProps, save}){
    // state

    // destructuring variables
    let contentArr = projectMainProps['projectMainObj']['content'];
    let projectName = projectMainProps['projectMainObj']['name'];
    let updateProjectObjContent = projectMainProps['updateProjectObjContent'];

    // render fxns
    // const buildTransport = () => {}
    return(
        <div className="ProjectMain">
            <InstrumentList loggedIn={loggedIn} contentObj={{contentArr, projectName, updateProjectObjContent}} save={save} />
        </div>
    )
}