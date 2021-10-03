const LOAD_FRIENDS = 'friends/LOAD'
const ADD_FRIEND= 'friend/ADD_FRIEND'
const REMOVE_FRIEND= 'friendId/REMOVE_FRIEND'


const load = friends =>({
    type:LOAD_FRIENDS,
    friends
})

const add = friend =>({
    type:ADD_FRIEND,
    friend
})

const remove = friendId =>({
type:REMOVE_FRIEND,
friendId
})

export const getUserFriends = (userId) => async dispatch =>{
    // console.log("<<<<<<<<<<<<<<<IN THUNK")
    const response = await fetch(`/api/users/${userId}/friends`);
    if(response.ok){
        const friends = await response.json().then(res=>res = res.user_friends);
        // console.log(friends,"<<<<<<FRIENDS IN THUNK")
        dispatch(load(friends))
    }
}

export const addFriend = ({userId,friendId}) => async dispatch =>{

    const response = await fetch(`/api/users/${userId}/add_friend/${friendId}`,{
        method:'POST',
        body: JSON.stringify({})
    }
    );
    // if(response.ok){
    //     const user_friendship = await response.json().then(res=>res = res.user_friendship)
    //     const friend_to_user = await response.json().then(res=>res = res.friend_to_user)

    //     dispatch(add(user_friendship))
    //     dispatch(add(friend_to_user))
    // }
}

export const deleteFriend = ({userId,friendId}) => async dispatch =>{

    const response = await fetch(`/api/users/${userId}/delete_friend/${friendId}`,{
        method:'DELETE'
    });
    if(response.ok){
  

        const friend= await response.json().then(res=>res = res.friend_id)
        dispatch(remove(friend))
        // dispatch(remove(userId))

    }
}
const initialState = {}
const friendReducer = (state= initialState, action) =>{
    let newState
switch(action.type){
    case LOAD_FRIENDS:
         newState = {...state};
        action.friends.forEach(friend => {
            newState[friend.id] = friend
        })
        return newState

    case ADD_FRIEND:
        if(!state[action.friend.id]){
             newState ={
                ...state,
                [action.friend.id]: action.friend
            }
            return newState
        }else
        return {
            ...state,
            [action.friend.id]:{
                ...state[action.friend.id],
                ...action.friend
            }
        }
    case REMOVE_FRIEND:
         newState = {...state};
        delete newState[action.friendId]
        return newState

    default:
        return state;
}
}
export default friendReducer
