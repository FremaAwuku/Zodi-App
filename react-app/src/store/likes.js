// Define Action Types as Constants

const LOAD_LIKES = 'likes/loadLikes'
// const ADD_LIKE = 'like/addLike'

const REMOVE_LIKE = 'likes/removeLike'

// Define Action Creators
const loadLikes = (likes) => ({
    type: LOAD_LIKES,
    likes
})
// const addLikes = (like) => ({
//     type: ADD_LIKE,
//     like
// })
const deleteLike = (like) => ({
    type: REMOVE_LIKE,
    like
})

export const getPostLikes = (postId) => async (dispatch) => {
    const res = await fetch(`/api/horoscope_posts/${postId}/likes`)
    const likes = await res.json()
    dispatch(loadLikes(likes.likes))
}

export const addPostLike = ({ user_id, post_id }) => async (dispatch) => {

    const data = {
        user_id,
        post_id
    }

    const res = await fetch(`/api/posts/${post_id}/likes`,
        {
            method: 'POST',
            body: JSON.stringify(data)
        });

    if (res.ok) {
        return
    }
}

export const removePostLike = (post_id, like_id) => async (dispatch) => {
    const res = await fetch(`/api/posts/${post_id}/likes/${like_id}`, {
        method: 'DELETE',
    })

    if (res.ok) {
        dispatch(deleteLike(like_id))
    }
}

// Define an initial state
const initialState = {};

// Define a reducer
const likesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LIKES: {
            const newState = {}
            const arr = action.likes
            arr.forEach(like => {
                newState[like.id] = like
            })
            return newState
        }
        case REMOVE_LIKE: {
            const newState = { ...state }
            delete newState[action.like_id]
            return newState
        }
        default:
            return state;
    }
}

export default likesReducer
