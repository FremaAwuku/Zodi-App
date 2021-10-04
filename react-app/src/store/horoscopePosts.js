// Actions
const LOAD_POSTS= 'post/LOAD_POSTS'
const LOAD_ONE = 'posts/LOAD_ONE'
const ADD_POST= 'post/ADD_POST'
const REMOVE_POST= 'post/REMOVE_POST'

//Action Creators
const loadPosts = (posts) =>({
    type: LOAD_POSTS,
    posts

})
const loadOne = (post) =>({
    type: LOAD_ONE,
    post

})
const addPost = (post) => ({
    type: ADD_POST,
    post
})

const remove = (postId) => ({
    type: REMOVE_POST,
    postId
})

//THUNKS
export const getAllHoroscopePosts = () =>  async dispatch =>{
    const response = await fetch(`/api/horoscope_posts`);

    if(response.ok){
        const posts = await response.json().then(res=>res = res.horoscope_posts)

        dispatch(loadPosts(posts))
    }
}

export const getOneHoroscopePost = (postId) => async dispatch =>{
    const response = await fetch(`/api/horoscope_posts/${postId}`)

    if(response.ok){
        const post = await response.json()
        dispatch(loadOne(post))
    }
}
export const getUserHoroscopePosts = (userId) =>  async dispatch =>{

    const response = await fetch(`/api/users/${userId}/horoscope_posts`);

    if(response.ok){
        const posts = await response.json().then(res=>res = res.users_posts)
        dispatch(loadPosts(posts))
    }
}
export const createHoroscopePost = (payload) => async dispatch =>{
    console.log(payload,"<<<<<<<<<ADD POST THUNK PAYLOAD")
    const {
       userId,
        horoscope,
        content
    } = payload



const data = new FormData()
data.append("user_id",userId)
data.append("horoscope",horoscope)
data.append("content",content)
console.log(data,"<<<<<<<<<ADD POST THUNK DATA")
const response = await fetch(`/api/horoscope_posts`,{
    method: 'POST',
    body: data
    // body:JSON.stringify(payload)

});
if(response.ok){
    const newPost = await response.json()
    dispatch(addPost(newPost))
    return
}
}

export const editHoroscopePost = (payload) => async dispatch =>{

    const {
        content,
        post_id
    } = payload

    const data = new FormData()
    data.append('content' ,content)
    const response = await fetch(`/api/horoscope_posts/${post_id}`,{
        method: 'PUT',
        body: data
    });
    if(response.ok){
        const post = await response.json()
        dispatch(addPost(post))
    }

}

export const deleteHoroscopePost = (payload) => async dispatch =>{
    const post_id = Number(payload)
    const response = await fetch(`/api/horoscope_posts/${post_id}`,{
        method: 'DELETE'

    });

    if(response.ok){

        dispatch(remove(post_id))
       
    }


}




//INITIAL STATE
const initialState = {}



const horoscopePostReducer = (state= initialState, action) =>{
    let newState
    switch(action.type){
        case LOAD_POSTS:
            newState = {...state};
            action.posts.forEach(post =>{
                newState[post.id] = post
            })
            return newState

        case LOAD_ONE:
            newState = {...state};
            newState[action.post.id] = action.post
            return newState

        case ADD_POST:
            if(!state[action.post.id]){
                newState = {
                    ...state,
                    [action.post.id]: action.post
                }
                return newState
            }else return{
                ...state,
                [action.post.id]:{
                    ...state[action.post.id],
                    ...action.post
                }

            }
        case REMOVE_POST:
            newState = {...state}
            delete newState[action.postId]
            return newState
        default:
            return state;
    }
}
export default horoscopePostReducer
