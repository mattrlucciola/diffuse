// App.js > Main.jsx > HistoryView.jsx > CommitCard.jsx

// react
import React from 'react';
import {Link} from 'react-router-dom';

// modules

// components

// seed
// import {seedProfile, projectArr, historyArr, commitArr, commentArr} from '../../seed/seed';

// start
export default function CommitCard({commitObj, projectId}){
    // destructuring
    let username;
    const {name, author, commitId} = commitObj;
    console.log('commitcard projectObj')
    console.log(commitObj['name'])
    console.log(commitObj['author'])
    console.log(commitObj['midi'])
    console.log('commitcard projectObj')
    
    return(
        <Link to={{pathname:`/${username}/${projectId}/history/${commitId}`, state:{commitObj}}} >
            <div className="CommitCard">
                <div className="name">{name}</div>
                <div className="author">{author}</div>
            </div>
        </Link>
    )
}