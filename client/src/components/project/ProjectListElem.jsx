// App.js > Main.jsx > ProjectList.jsx > ProjectListElem.jsx

// react
import React from 'react';
import {Link} from 'react-router-dom';

// style
import './css/ProjectList.css';

// components

// start
export default function ProjectListElem({projectObj}){

    // destructuring
    const {user, name, project_slug, created_dt} = projectObj;

    // global vars
    let {username} = user;

    const formatDt = (dt) => {
        let dtStr = `${dt}`;
        let dtArr = dtStr.split('T');
        let [date, time] = dtArr;
        time = time.split(':')
        time = `${time[0]}:${time[1]}`
        
        let newDtStr = `${date} ${time}`;
        return newDtStr
    }
    return(
        <div className="ProjectListElem" key={`PLE${project_slug}`} >
            <div className="author"><Link to={`/${username}/`}>{username}</Link></div>
            <div className="name"><Link to={`/${username}/${project_slug}/`}>{name}</Link></div>
            <div className="date">{created_dt && formatDt(created_dt)}</div>
        </div>
    )
}