// App.js > SidebarLeft.jsx

// react
import React from 'react';

// components
import ProjectSidebar from './project/ProjectSidebar';

// start
export default function SidebarLeft({loggedIn}){
    const placeholderSidebar = () => {
        return(
            <div className="left-sidebar placeholderSidebar">
                Click to sign in or sign up here!
            </div>
        )
    }
    return(
        <div className="SidebarLeft">
            {loggedIn ? <ProjectSidebar />: placeholderSidebar()}
        </div>
    )
}