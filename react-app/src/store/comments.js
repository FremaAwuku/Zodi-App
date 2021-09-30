// Define Action Types as Constants
const SET_COMMENTS = 'comments/setComments'
const ADD_COMMENT = 'comments/addComment'

const REMOVE_COMMENT = 'comments/removeComment'

// Define Action Creators
const setComments = (comments) => ({
    type: SET_COMMENTS,
    comments
})

const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment
})

// const updateComment = (comment) => ({
//     type: UPDATE_COMMENT,
//     comment
// })

const removeComment = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
})

// Define Thunks
export const fetchComments = (postId) => async (dispatch) => {
    const res = await fetch(`/api/horoscope_posts/${postId}/comments`);
    const comments = await res.json()
    dispatch(setComments(comments.comments))
}

export const postComment = (payload) => async (dispatch) =>
{

    const {
        content,
        postId,
        userId
    } = payload

    const data = new FormData()
    data.append("post_id",postId)
    data.append("user_id",userId)
    data.append('content',content)

    console.log(data,"<<<<<THUNK DATA!!!")
    const res = await fetch(`/api/horoscope_posts/${postId}/comments`,{
        method: 'POST',
        body:data
    })

    if (res.ok) {
        const newComment = res.json()
        dispatch(addComment(newComment))
        return newComment
    }
}

export const editComment = (payload) => async (dispatch) => {
    const {
        content,
        commentId,

    } = payload
    const data = new FormData()
    data.append('content',content)

    const res = await fetch(`/api/comments/${commentId}`, {
        method: 'PUT',

        body:data
    })

    if (res.ok) {
        const updatedComment = await res.json();
        dispatch(addComment(updatedComment));
        return updatedComment
    }
}

export const deleteComment = (commentId) => async (dispatch) => {
    const res = await fetch(`/api/comments/${commentId}`, {
        method: 'DELETE'
    })

    if (res.ok) {
        const commentId= await res.json().comment_id
        dispatch(removeComment(commentId))
    }
}
// Define an initial state
const initialState = {};

// Define a reducer
const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENTS: {
            const newState = {}
            const arr = action.comments
            arr.forEach(comment => {
                newState[comment.id] = comment
            })
            return newState
        }
        case ADD_COMMENT: {
            const newState = { ...state }
            newState[action.comment.id] = action.comment
            return newState
        }
        case REMOVE_COMMENT: {
            const newState = { ...state }
            delete newState[action.commentId]
            return newState
        }
        default:
            return state;
    }
}

// Export the reducer
export default commentsReducer
