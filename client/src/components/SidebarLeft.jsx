// App.js > SidebarLeft.jsx

// react
import React from 'react';

// components
import ProjectSidebar from './sidebar/ProjectSidebar';

// start
export default function SidebarLeft({loggedIn}){
    return(
        <div className="SidebarLeft">
            {loggedIn && <ProjectSidebar />}
        </div>
    )
}