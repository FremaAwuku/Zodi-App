const LOAD_REQUESTS = 'requests/LOAD_REQUESTS'
const ADD_REQUEST  = 'request/ADD_REQUEST'
const REMOVE_REQUEST = 'requestId/REMOVE_REQUEST'

const load = requests =>({
    type:LOAD_REQUESTS,
    requests
})

const add = request =>({
    type:ADD_REQUEST,
    request
})

const remove = requestId =>({
type:REMOVE_REQUEST,
requestId
})



export const getUserFriendRequests = (userId) => async dispatch =>{
    const response = await fetch(`/api/users/${userId}/incoming_requests`);
    if(response.ok){
        const requests = await response.json().then(res=>res = res.incoming);
        dispatch(load(requests))
    }
}

export const getUserPendingRequests = (userId) => async dispatch =>{
    const response = await fetch(`/api/users/${userId}/pending_requests`);
    if(response.ok){
        const requests = await response.json().then(res=>res = res.pending);
        dispatch(load(requests))
    }
}

export const sendFriendRequests = (payload) => async dispatch =>{
    const payload ={
        userId,
        friendId
    }
    const response = await fetch(`/api/users/${userId}/send_request/${friendId}`,{
        method:'POST',
        body: JSON.stringify({})
    }
    );
    if(response.ok){
        const request= await response.json().
        dispatch(add(request))
    }
}

export const deleteFriendRequests = (requestId) => async dispatch =>{

    const response = await fetch(`/api/friend_request/${requestId}`,{
        method:'DELETE'
    }
    );
    if(response.ok){
        const requestId= await response.json().request_id
        dispatch(remove(requestId))
    }
}

const requestReducer = (state= initialState, action) =>{
    let newState
switch(action.type){
    case LOAD_REQUESTS:
         newState = {...state};
        action.requests.forEach(request => {
            newState[request.id] = request
        })
        return newState

    case ADD_REQUEST:

        if(!state[action.request.id]){
             newState ={
                ...state,
                [action.request.id]: action.request
            }
            return newState
        }else
        return {
            ...state,
            [action.request.id]:{
                ...state[action.request.id],
                ...action.request
            }
        }

    case REMOVE_REQUEST:
         newState = {...state};
        delete newState[action.requestId]
        return newState

    default:
        return state;
}
}
export default requestReducer
