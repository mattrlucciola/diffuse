// App.js > Main.jsx > Center.jsx > Content.jsx

// react
import React from 'react';

// components
import About from './About';
import ProjectView from './project/ProjectView';

let renderThis = true
// start
export default function Content(){
    return(
        <div className="Content">
            {renderThis ? <About /> : <ProjectView />}
        </div>
    )
}