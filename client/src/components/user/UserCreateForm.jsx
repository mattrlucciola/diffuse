// ROUTE App.js > Main.jsx > UserCreateForm.jsx

// react
import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

// modules

// components

// util
import {setLsByKey} from '../../util/localstorage';
import {Post, PostJSON} from '../../util/djangoRequest';

// start
export default function UserCreateForm({loginObj}){
    // destructuring
    const {loggedIn} = loginObj;

    // state
    const [username, setUsername] = useState('');

    // event handlers
    const onSubmitLogin = async (e, data) => {
        let url = '/api/auth/login/';
        let resJSON;
        if (data) {
            setUsername(() => data['username'])
            resJSON = await PostJSON(url, data)
        } else {
            e.preventDefault();
            let usernameValue, passwordValue;
            let formElem = e.target
            for (let idx = 0; idx < formElem.length; idx++) {
                const formInput = formElem[idx];
                if ((formInput.name) && (formInput.name === 'username')) {
                    usernameValue = formInput.value;
                } else if ((formInput.name) && (formInput.name === 'password')) {
                    passwordValue = formInput.value;
                }
            }
            usernameValue && setUsername(() => usernameValue)
            if (usernameValue && passwordValue) {
                data = {username: usernameValue, password: passwordValue};
                resJSON = await PostJSON(url, data)
            } else {
                let msg;
                if (!usernameValue && !passwordValue) {msg = 'username and password fields'}
                else if (!usernameValue) {msg = 'username field'}
                else if (!passwordValue) {msg = 'password field'}
                alert(`Please enter ${msg}.`)
                return
            }
        }
        setLsByKey('diffuse_jwt', resJSON['token'])
    }
    const onSubmitSignup = async (e) => {
        e.preventDefault();
        let formElemArr = e.target;
        let data = {};
        for (let idx = 0; idx < formElemArr.length; idx++) {
            const formElem = formElemArr[idx];
            let key = formElem['name'];
            data[key] = formElem['value']
        }
        
        let url = `/api/user/`
        let resJSON = await PostJSON(url, data);
        if (true){}
        else {
            onSubmitLogin(e)
        }
    }

    // effects
    useEffect(()=>{
        return <Redirect to={`/${username}/`} />;
    }, [loggedIn, username])

    // render fxns
    const buildInput = (type, name, placeholder) => {
        if (name === 'phone') {
            return <input type={type} name={name} className={name} placeholder={placeholder} />
        } else {
            return(
                <input type={type} name={name} className={name} placeholder={placeholder} />
            )
        }
    }
    const buildUserForm = () => {
        return(
            <form onSubmit={(e) => onSubmitSignup(e)} className="user-form">
                <div className="part-1">
                    {buildInput('email', 'email', 'Email')}
                    {buildInput('text', 'username', 'Userame')}
                    {buildInput('password', 'password', 'Password')}
                </div>
                <div className="part-2">
                    {buildInput('text', 'firstname', 'First Name')}
                    {buildInput('text', 'lastname', 'Last Name')}
                    {buildInput('phone', 'phone', 'Phone')}
                    {buildInput('date', 'dob', 'Birthdate')}
                </div>
                <div className='part-3'>
                    {buildInput('url', 'profilepicture', 'Profile Picture')}
                </div>
                {buildInput('submit', 'submit', 'Submit')}
            </form>
        )
    }
    return(
        <div className="UserCreateForm" >
            <div className="title">Register</div>
            {buildUserForm()}
        </div>
    )
}