// App.js > Main.jsx > UserView.jsx
// ROUTE FROM App.js > Main.jsx > ProjectList.jsx > ProjectListElem.jsx
// ROUTE FROM App.js > Main.jsx > ProjectView.jsx > ProjectNav.jsx {}
// ROUTE FROM App.js > ProjectList.jsx > ProjectListElem.jsx > ProjectCollaboratorCard.jsx {}

// react
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

// style
import './css/UserView.css';

// modules

// util
import {GetJSON} from '../../util/djangoRequest';

// components
// import x from '.'

// start
export default function UserView({props}){
    // state
    const [userObj, setUserObj] = useState({});

    // destructure
    const {params} = props['match'];

    // global vars
    const username = params['username'];

    // fxns
    const renderProjectsArr = () => {
        let projectsArr = userObj['project'];
        let projectElemsArr = projectsArr.map((projectObj, idx) => {
            // destructuring
            let {name, user, project_slug, created_dt, collaborators} = projectObj; // not sure what to do w resource_id or updated_dt
            // let {name, user, project_slug, resource_id, created_dt, updated_dt, collaborators} = projectObj;
            return(
                <div className="project-info" key={`uvpa-${idx}`} >
                    <Link to={`/${user['username']}/${project_slug}/`} >
                        <div className="project-name" >{name}</div>
                    </Link>
                    <div className="collaborator-ct">{`${collaborators.length} collaborator${collaborators.length > 1 ? 's':''}`}</div>
                    <div className="dt-created">{created_dt}</div>
                </div>
            )
        })
        return <div className="project-list" >{projectElemsArr}</div>
    }

    // effects
    useEffect(()=>{
        const requestUserByUsername = async () => {
            let url = `/api/user/${username}/`;
            let resJSON = await GetJSON(url);
            setUserObj(() => {return {...resJSON}})
        }
        requestUserByUsername()
    }, [username])

    return(
        <div className="UserView">
            <div className="right-side">
                <div className="profile-picture"><img src={userObj['profile_picture']} alt='Profile Pictire'/></div>
                <div className="name">
                    <div className="first-name">{userObj['first_name']}</div>
                    <div className="last-name">{userObj['last_name']}</div>
                </div>
                <div className="username">{userObj['username']}</div>
                <div className="contact-info">
                    {/* <div className="phone">{userObj['phone']}</div>
                    <div className="email">{userObj['email']}</div>
                    <div className="address">{userObj['address']}</div> */}
                </div>
            </div>
            
            {userObj['project'] && renderProjectsArr()}
        </div>
    )
}