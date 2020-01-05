// App.js > Main.jsx > ProjectList.jsx > ProjectListElem.jsx

// react
import React from 'react';
import {Link} from 'react-router-dom';

// components
// import x from '.'

// start
export default function ProjectListElem({projectObj}){

    // destructuring
    const {user, name, project_slug} = projectObj;

    // global vars
    let {username} = user;

    return(
        <div className="ProjectListElem" key={`PLE${project_slug}`} >
            <div className="author"><Link to={`/${username}/`}>{username}</Link></div>
            <div className="name"><Link to={`/${username}/${project_slug}/`}>{name}</Link></div>
        </div>
    )
}