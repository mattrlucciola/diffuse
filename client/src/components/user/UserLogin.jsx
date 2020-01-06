// ROUTE App.js > Main.jsx > UserLogin.jsx

// react
import React, {useState} from 'react';
import {Redirect, Link} from 'react-router-dom';

// style
import './css/UserLogin.css';

// components

// util
import {setLsByKey} from '../../util/localstorage';
import {Post} from '../../util/djangoRequest';
// import {getCookieByKey} from '../../util/cookies';

// start
export default function UserLogin({loginObj}) {

    // destructuring
    const {loggedIn, setLoggedIn} = loginObj;

    // state
    const [usernameState, setUsernameState] = useState();

    // utility fxns
    
    // event handlers
    const onSubmitLogin = async (e) => {
        e.preventDefault();
        let username, password, userId;
        let formElem = e.target
        for (let idx = 0; idx < formElem.length; idx++) {
            const formInput = formElem[idx];
            if ((formInput.name) && (formInput.name === 'username')) {
                username = formInput.value;
            } else if ((formInput.name) && (formInput.name === 'password')) {
                password = formInput.value;
            }
        }
        username && setUsernameState(() => username)
        if (username && password) {
            let url = '/api/auth/login/';
            let body = {username, password};
            let response; let resJson;
            try {
                response = await Post(url, body);
                let httpStatus = response.status;
                
                // handle error code
                if ([403].includes(httpStatus)) {
                    alert('something went wrong, 403 status')
                }
            } catch (e) {
                alert('failure body: ', e, body)
            }
            try {
                resJson = await response.json();
                
                // manage the response
                let jwt = resJson['token'];
                userId = resJson['user']['pk'];

                setLsByKey('diffuse_jwt', jwt);
                setLsByKey('username', username);
                setLsByKey('user_id', userId);
                setLoggedIn(() => true);
            } catch (e) {
                let errorStatus = e.status;
                alert('\n\nerror (below)\n\n', errorStatus, '\n\n', e)
            }
        } else {
            let msg;
            if (!username && !password) {msg = 'username and password fields'}
            else if (!username) {msg = 'username field'}
            else if (!password) {msg = 'password field'}
            alert(`Please enter ${msg}.`)
        }
    }

    // render functions
    return(
        loggedIn && !!(usernameState) ? <Redirect to={`/${usernameState}/`} /> :
        <div className="UserLogin">
            <form onSubmit={(e) => onSubmitLogin(e)} className="login">
                <input name='username' type="text" className="username" placeholder="Username" autoFocus />
                <input name='password' type="password" className="password" placeholder="Password" />
                <input name='submit' type="submit" className="submit" value="Submit" />
            </form>
            <Link to={`/signup/`} className="create-user">{`New here? Click here to signup`}</Link>
        </div>
    )
    
}