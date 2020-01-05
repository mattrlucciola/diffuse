// App.js > Main.jsx > ProjectView.jsx
// ROUTE FROM App.js > Nav.jsx {}
// ROUTE FROM App.js > Main.jsx > ProjectList.jsx > ProjectListElem.jsx {}
// ROUTE FROM App.js > Main.jsx > UserView.jsx {}

// react
import React, {useState, useEffect} from 'react';

// components
// import CommentList from '../comment/CommentList';
import ProjectNav from './ProjectNav';
import ProjectMain from './ProjectMain';

// style
import './css/ProjectView.css';

// modules

// util
import {GetJSON} from '../../util/djangoRequest';
import {getLsObj} from '../../util/localstorage';
import {initProject} from '../../util/initProject';

// start
export default function ProjectView({loggedIn, props}){
    // destructuring variables
    const {params} = props['match'];
    // const {state} = props['location'];

    // global variables
    const projectSlug = params['project_slug'];
    const projectUsername = params['username'];
    const currentUsername = getLsObj()['username'];
    const currentUserId = getLsObj()['user_id'];
    
    // state
    const [save, setSave] = useState(false);
    const [projectObj, setProjectObj] = useState();
    // const [projectNavObj, setProjectNavObj] = useState();
    const [projectMainObj, setProjectMainObj] = useState();
    
    const resourceId = `${projectUsername}-${projectSlug}`;

    // fxns
    const updateProjectObjContent = (newContentArr) => {
        setProjectObj(() => {return {...projectObj, content: newContentArr}})
    }
    const setAllProjectObjects = (_json_) => {
        if (!_json_) {
            _json_ = projectObj;
            _json_['user'] = {username:currentUsername, userId:currentUserId}
        }
        // let newProjectNavObj = {
        //     user: _json_['user'],
        //     name: _json_['name'],
        //     project_slug: _json_['project_slug'],
        //     collaborators: _json_['collaborators'],
        // }
        let newProjectMainObj = {
            name: _json_['name'],
            content: _json_['content'],
        }
        // setProjectNavObj(() => {return {...newProjectNavObj}})
        setProjectMainObj(() => {return {...newProjectMainObj}})
    }
    
    // effect
    useEffect(() => {
        const requestProjectById = async () => {
            let url = `/api/project/${resourceId}/`;
            try {
                let resJson = await GetJSON(url);
                resJson && setAllProjectObjects(resJson);
                setProjectObj(() => {return {...resJson}});
            } catch (e) {
                alert("Error in ProjectView: requesting", url, e)
            }
        }
        if (document.location.pathname === '/project/active/') {
            const newProject = initProject(currentUsername, currentUserId)
            setProjectObj(() => {return {...newProject}})
            setAllProjectObjects(newProject)
        } else {
            requestProjectById()
        }
    }, [document.location.pathname])
    return(
        <div className="ProjectView">
            {projectObj && <ProjectNav loggedIn={loggedIn} projectNavProps={{projectObj, projectSlug}} saveProps={{save, setSave}} currentUsername={currentUsername} />}
            {projectObj && <ProjectMain loggedIn={loggedIn} projectMainProps={{projectMainObj, updateProjectObjContent}} save={save} currentUsername={currentUsername} />}
            {/* <CommentList /> */}
        </div>
    )
}
