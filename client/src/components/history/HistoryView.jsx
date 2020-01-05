// App.js > Main.jsx > HistoryView.jsx
// ROUTE FROM: App.js > Main.jsx > ProjectView.jsx > ProjectNav.jsx {projectObj}

// react
import React from 'react';

// modules

// components
import CommitCard from './commit/CommitCard';

// start
export default function HistoryView({props}){
    // destructuring
    const {params, location} = props['match']
    const historyArr = location['state']['projectObj']['history']
    const projectId = params['id']

    const buildHistoryArr = () => {
        let historyElemArr = historyArr.map((commitObj, idx) => {
            return <CommitCard commitObj={{...commitObj, commitId:idx}} projectId={projectId} key={`har-${idx}`} />
        })
        return historyElemArr
    }
    return(
        <div className="HistoryView">
            {(historyArr.length > 0) && buildHistoryArr()}
        </div>
    )
}