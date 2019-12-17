// App.js > Main.jsx > ProjectView.jsx > ProjectNav.jsx

// react
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// components
import ProjectCollaboratorCard from './ProjectCollaboratorCard';

// util
import {getLsByKey, getLsObj} from '../../util/localstorage';
import {Put, Post, Delete} from '../../util/djangoRequest';
import {slugify} from '../../util/slugify';

// start
export default function ProjectNav({loggedIn, projectNavProps, saveProps, currentUsername}){
    // destructuring variables
    const {projectObj, projectSlug} = projectNavProps;
    const projectUserObj = projectObj['user'];
    const currentUserObj = {username: getLsObj()['username'], id: getLsObj()['user_id']}
    const collaboratorsArr = projectObj['collaborators']
    const {save, setSave} = saveProps;

    // state
    const [showCollab, setShowCollab] = useState(false)
    const [toggleSED, setToggleSED] = useState(false)
    const [changeTitleBool, setChangeTitleBool] = useState(false)
    const [titleStr, setTitleStr] = useState(projectObj['name'] ? projectObj['name']: 'New Project')

    // event handlers
    const onClickSaveProject = async (e) => {
        e.preventDefault();
        let url = `/api/project/`;
        let requestBody = {...projectObj};
        requestBody['project_slug'] = slugify(projectObj['name']);
        requestBody['resource_id'] = slugify(`${projectObj['user']['username']}-${projectObj['name']}`);
        delete requestBody['user'];
        if (document.location.pathname === '/project/active/') {
            await Post(url, JSON.stringify(requestBody));
        } else {
            url = `/api/project/${requestBody['resource_id']}/`
            delete requestBody['resource_id']
            await Put(url, requestBody, getLsObj()['diffuse_jwt']);
        }
    }
    const onClicktoggleCollaboratorCard = () => {
        setShowCollab(!showCollab)
    }
    const onClickChangeTitle = () => {
        setChangeTitleBool(()=>{return true})
    }
    const onChangeChangeTitle = (e) => {
        let newTitle = e.currentTarget.value
        console.log(newTitle)
        setTitleStr(() => {return newTitle})
    }
    const onSubmitChangeTitle = (e) => {
        e.preventDefault()
        
        // save/partial update to database if its an existing project
        if (collaboratorsArr) {
            // on create project: create a project entry in database with name: "untitled-${Date.now()}"
            // on click in title, open the form to allow for local editing
            // on typing, update the content in the form locally
            // on blur or submit, check if name is duplicate > show an alert
            // on blur or submit, check if name is duplicate > revert to old name
            // on successful submit update the project name, slug, and resourceId
            url = `/api/project/${requestBody['resource_id']}/`
            delete requestBody['resource_id']
            await Put(url, requestBody, getLsObj()['diffuse_jwt']);
            ;
        }

        // exit the input
        setChangeTitleBool(()=>{return false})
    }

    // render fxns
    const buildSaveEditDelete = () => {
        return (
            <div className="save-edit-delete-container noselect" onClick={() => {setToggleSED(!toggleSED); setSave(() => !save)}} >
                |||
                {toggleSED ? (
                    <div className="s-e-d-dropdown fade-in" >
                        <div className="save" onClick={(e) => {onClickSaveProject(e)}} >Save</div>
                        {/* <div className="edit" onClick={(e) => {onClickEditProject(e)}} >Edit</div> */}
                        <div className="delete" onClick={(e) => {Delete(e)}} >Delete</div>
                    </div>
                ): <div></div>
                }
            </div>
        )
    }
    const buildCollaboratorCard = () => {
        return (
            showCollab && <div className="collab-card fade-in noselect"><ProjectCollaboratorCard projectNavObj={projectObj} /></div>
        )
    }
    const buildTitleElem = () => {
        return(
            <div className="title">{titleStr}</div>
        )
    }
    const buildEditTitleElem = () => {
        return(
            <form onSubmit={e => {onSubmitChangeTitle(e)}}>
                <input type="text" className="title-edit" value={titleStr} onChange={e => {onChangeChangeTitle(e)}} onBlur={e => {onSubmitChangeTitle(e)}} autoFocus />
                <input type="submit" className="title-edit-submit" value='' />
            </form>
        )
    }

    // save, edit, {(view collaborators) + (add collaborator) + (collaborator count)}, {history + (history count)}
    return(
        <div className="ProjectNav" >
            <div className="title-container" onClick={(e) => {onClickChangeTitle(e)}} >{changeTitleBool ? buildEditTitleElem(): buildTitleElem()}</div>
            <div className="sub-nav">
                <div className="creator" ><Link to={`/${projectUserObj['username']}/`} >{projectUserObj['username']}</Link></div>
                <div className="collaborate-history-container noselect" >
                    <div className="collab-link noselect" onClick={() => {onClicktoggleCollaboratorCard()}} >
                        {collaboratorsArr ?
                            `${collaboratorsArr.length} Collaborator${(collaboratorsArr.length > 1) ? 's': ''}`:
                            `Add Collaborators`
                        }
                    </div>
                    {buildCollaboratorCard()}
                    {
                        <div className="history-link noselect">
                            <Link to={{pathname: `/${projectUserObj['username']}/${projectSlug}/history/`, state: {projectObj}}} >History</Link>
                        </div>
                    }
                </div>
                {projectUserObj['username'] === currentUserObj['username'] && buildSaveEditDelete()}
            </div>
        </div>
    )
}