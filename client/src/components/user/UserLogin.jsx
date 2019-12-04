// ROUTE App.js > Main.jsx > UserLogin.jsx

// react
import React, {useState} from 'react';
import {Redirect, Link} from 'react-router-dom';

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
    // const [loginError, setLoginError] = useState({});

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
            try {
                let body = JSON.stringify({username, password});
                let response = await Post(url, body);
                let resJson = await response.json();

                // manage the response
                let httpStatus = response.status;
                let jwt = resJson['token'];
                let userId = resJson['user']['pk'];

                // handle error code
                if ([403].includes(httpStatus)) {
                    alert('something went wrong, 403 status')
                } else {
                    setLsByKey('diffuse_jwt', jwt);
                    setLsByKey('username', username);
                    setLsByKey('user_id', userId);
                    setLoggedIn(() => true);
                    console.log('logged in!')
                }
            } catch (e) {
                let errorStatus = e.status;
                // setLoginError(()=>{return {...e}})
                console.log('\n\nerror (below)\n\n', errorStatus, e)
                for (let i in e) {
                    console.log(i, e[i]);
                }
                console.log('error (above)\n\n')
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
            <Link to={`/user/new/`} className="create-user">{`New here? Click here to signup`}</Link>
        </div>
    )
    
}