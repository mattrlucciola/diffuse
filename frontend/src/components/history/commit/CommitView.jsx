// App.js > Main.jsx > HistoryView.jsx > CommitCard.jsx > CommitView.jsx

// react
import React from 'react';
import {Link} from 'react-router-dom';

// modules

// components

// seed
// import {seedProfile, projectArr, historyArr, commitArr, commentArr} from '../../seed/seed';

// start
export default function CommitView({props}){
    // destructuring
    let commitObj = props['location']['state']['commitObj'];
    const {name, author, midi} = commitObj;
    console.log('commitcard projectObj')
    console.log(commitObj['name'])
    console.log(commitObj['author'])
    console.log(commitObj['commitId'])
    console.log(commitObj['midi'])
    console.log('commitcard projectObj')
    
    return(
        <Link>
            <div className="CommitView">
                <div className="name">{name}</div>
                <div className="author">{author}</div>
                <div className="midi">{midi}</div>
            </div>
        </Link>
    )
}