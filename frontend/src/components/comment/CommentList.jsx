// App.js > ProjectView.jsx > CommentList.jsx

// react
import React from 'react';

// components
import CommentElem from './CommentElem';

// start
export default function CommentList({commentArr}){
    const buildList = () => {
        return commentArr.map((commentObj, idx) => {
            <CommentElem commentObj={commentObj} key={`CommentElem-${idx}`} />
        })

    }
    return(
        <div className="CommentList">
            {buildList()}
        </div>
    )
}