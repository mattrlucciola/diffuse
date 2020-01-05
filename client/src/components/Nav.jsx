// App.js > Nav.jsx

// react
import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';

// components
// import x from '.'

// utility functions
import {deleteLsObj} from '../util/localstorage'

// start
// export default function Nav({loginObj, lsObj, checkLsObj}){
export default function Nav({loginObj, lsObj}){
    // destructuring
    const {loggedIn, setLoggedIn} = loginObj;
    const {username} = lsObj;

    // states
    const [search, setSearch] = useState('');
    const [mouseOverPpl, setMouseOverPpl] = useState(false);

    // event handlers
    const onSubmitSearch = (e) => {
        e.preventDefault();
        return <Redirect to={`search${search}`}></Redirect>
    }
    const onChangeSearch = (e) => {
       let newSearch = e.target.value;
       setSearch(newSearch);
    }
    const onClickLogout = async () => {
        deleteLsObj()
        setLoggedIn(() => false)
    }
    // render functions
    const pplDropDown = () => {
        return (
            <div className="pplDropDown-card">
                <div className="logout" onClick={onClickLogout} >Logout</div>
            </div>
        )
    }
    const buildProjectsProfilesLinks = () => {
        let pplElem = (loggedIn) ? (
            <div className="projects-profiles-links">
                <Link to={{pathname: `/project/active/`, state: {projectNavObj:{}}}} className="projects noselect" >Create Project</Link>
                <div className="login-profile noselect" onMouseEnter={(e) => setMouseOverPpl(true)} onMouseLeave={(e) => setMouseOverPpl(false)}>
                    <Link to={`/${username}/`} >{username}</Link>
                    <div className="pplDropDown-container">{mouseOverPpl && pplDropDown()}</div>
                </div>
            </div>
        ):(
            <div className="projects-profiles-links">
                <Link to={`/projects/`} className="projects noselect" >{`Recent Projects`}</Link>
                <Link to={`/login/`} className="login-profile noselect" >{`Login / Register`}</Link>
            </div>
        );
        return pplElem
    }
    // end
    return(
        <div className="Nav">
            <form className='search' onSubmit={onSubmitSearch}>
                <input type="text" className="searchbar" value={search} placeholder='find projects/users' onChange={onChangeSearch} />
            </form>
            <Link to={loggedIn ? `/feed`: `/`}>
                <div className="logo noselect">
                    <div className="left noselect">Diff</div><div className="right noselect">use</div>
                </div>
            </Link>
            {buildProjectsProfilesLinks()}
        </div>
    )
}