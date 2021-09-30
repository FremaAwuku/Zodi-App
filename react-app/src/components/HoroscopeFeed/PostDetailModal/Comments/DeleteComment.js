import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { fetchComments, deleteComment } from '../../../../store/comments';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


function DeleteComment({ commentId, postId }) {

    const history = useHistory()
    const dispatch = useDispatch()


    const handleClick = async (e) => {
        e.preventDefault();

        await dispatch(deleteComment(commentId))
        await dispatch(fetchComments(postId))
    }

    return (



        <>
        <h3
        onClick={handleClick}
        >
        ❌ Delete Comment
        </h3>

        </>




    );
}

export default DeleteComment;
