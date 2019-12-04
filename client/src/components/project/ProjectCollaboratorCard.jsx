// App.js > ProjectList.jsx > ProjectListElem.jsx > ProjectCollaboratorCard.jsx

// react
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// components
// import x from '.'

// start
export default function ProjectCollaboratorCard({projectNavObj}){
    // destructuring
    const {collaborators} = projectNavObj;

    // states
    const [collaboratorsArr, setCollaboratorsArr] = useState(collaborators ? collaborators: [])

    // functions
    const buildCollaboratorList = () => {
        return collaboratorsArr.map((collaborator, idx) => {
            return(
                <div className="collaborator"  key={`collab-name-${idx}`}>
                    <Link to={`/${collaborator['username']}/`}>{collaborator['username']}</Link>
                </div>
            )
        })
    }

    return(
        <div className="ProjectCollaboratorCard" key={`pcc--${projectNavObj['user']['username']-projectNavObj['project_slug']}`} >
            <div className="title">Add</div>
            <div className="collaborator-container">
                {buildCollaboratorList(collaborators)}
            </div>
        </div>
    )
}