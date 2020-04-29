// App.js > Main.jsx

// react
import React from 'react';
import {Route, Switch} from 'react-router-dom';

// components
import About from './About';
// project
import ProjectList from './project/ProjectList';
import ProjectView from './project/ProjectView';
// user
import UserList from './user/UserList';
import UserView from './user/UserView';
import UserCreateForm from './user/UserCreateForm';
import UserLogin from './user/UserLogin';
// history
// import HistoryView from './history/HistoryView';
// import CommitView from './history/commit/CommitView';

// start
export default function Main({loginObj, lsObj}){
    // destructuring
    const {loggedIn, setLoggedIn} = loginObj;
    const {username} = lsObj;

    // state

    return(
        <div className="Main">
            <Switch>
                <Route exact path="/project/active/" render={(props) => <ProjectView loggedIn={loggedIn} props={props} />} />
                <Route exact path="/login/" render={() => <UserLogin loginObj={{loggedIn, setLoggedIn}} username={username} />} />
                <Route exact path="/signup/" render={() => <UserCreateForm loginObj={{loggedIn, setLoggedIn}} />} />
                <Route exact path="/users/" render={(props) => <UserList loggedIn={loggedIn} props={props} />} />
                <Route exact path="/projects/recent/" render={() => <ProjectList loggedIn={loggedIn} />} />
                <Route exact path="/projects/" render={() => <ProjectList loggedIn={loggedIn} />} />
                <Route exact path="/feed/" render={() => <ProjectList loggedIn={loggedIn} />} />

                {/* <Route exact path="/:username/:project_slug/history/:commitId/" render={(props) => <CommitView props={props} />} /> */}
                {/* <Route exact path="/:username/:project_slug/history/" render={(props) => <HistoryView props={props} />} /> */}

                {/* PUT ALL OTHER VIEWS BEFORE THIS SECTION */}
                <Route exact path="/:username/:project_slug/" render={(props) => <ProjectView props={props} />} />
                <Route exact path="/:username/" render={(props) => <UserView loggedIn={loggedIn} props={props} username={username} />} />
                <Route exact path="/" component={About} />
            </Switch>
        </div>
    )
}