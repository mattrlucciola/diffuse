// App.js > CommentList.jsx > CommentElem.jsx

// react
import React, {useState} from 'react';

// modules

// components
// import x from '.'

// util
import {Put, Delete} from '../../util/djangoRequest';

// start
export default function CommentElem({commentObj}){
    // state
    const [clickEdit, setClickEdit] = useState(false);

    const onClickDeleteComment = async (e) => {
        e.preventDefault()
        console.log('hey im a comment being deleted')
        // await axios.delete()
        console.log("comment successfully deleted")
    }
    const onClickEditComment = (e) => {
        console.log("EDITING THE COMMENT")
        console.log(`edit: ${e.target.value}`)
        setClickEdit(!clickEdit)
    }
    const onSubmitEditComment = async (e) => {
        console.log("SUBMITTING THE COMMENT")
        console.log(`submit: ${e.target.value}`)
        // await Put(url, body)
        setClickEdit(false)
    }
    const clickElemDropdown = () => {
        return(
            <div className="edit-dropdown">
                this is the DROPDOWN YEAAA
            </div>
        )
    }
    return(
        <div className="CommentElem">
            <div className="content">{commentObj.content}</div>
            <div className="comment-delete" onClick={onClickDeleteComment}>Delete</div>
            <div className="comment-edit" onClick={onClickEditComment}>
                Edit
                {clickEdit && clickElemDropdown()}
            </div>
        </div>
    )
}