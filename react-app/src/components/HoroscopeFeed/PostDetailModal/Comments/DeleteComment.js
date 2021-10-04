import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchComments, deleteComment } from '../../../../store/comments';


function DeleteComment({ commentId, postId }) {


    const dispatch = useDispatch()


    const handleClick = async (e) => {
        e.preventDefault();

        await dispatch(deleteComment(commentId))
        await dispatch(fetchComments(postId))
    }

    return (



        <>
        <button
        className="secondary-button"
        onClick={handleClick}
        >
         Delete Comment 🗑️
        </button>

        </>




    );
}

export default DeleteComment;
