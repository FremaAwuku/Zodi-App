// ACTIONS
const LOAD_ALL_USERS = 'users/LOAD_ALL_USERS'
const LOAD_ONE_USER = 'users/LOAD_ONE_USER'


// ACTION CREATORS
const loadAllUsers = (users) =>({
    type: LOAD_ALL_USERS,
    users
  })


const loadOneUser = (user) =>({
    type: LOAD_ONE_USER,
    user
  })


// THUNK

export const getAllUsers = () => async dispatch =>{

    const response = await fetch(`/api/users`);
    const users = await response.json().then(res=>res = res.users);

      dispatch(loadAllUsers(users))
  }

//   export const getOneUser = () => async (userId) =>{

//     const response = await fetch(`/api/users/${userId}`);
//     const user = await response.json();
//       dispatch(loadOneUsers(user))
//   }





export const updateSunSign = ({
    userId,
    birthMonth,
    birthDate
}) => async dispatch=>{

const data = new FormData()
    data.append("birth_month",birthMonth)
    data.append("birth_date",birthDate)


    console.log(birthMonth,"<<<<<<<<<THUNK MONTH")
    console.log(birthDate,"<<<<<<<<<THUNK DAYYY")
    const response = await fetch(`/api/users/${userId}/sun_sign`,{
        method: 'PUT',
        body:data
    });
    if (response.ok) {
        const updatedUser = await response.json()
        dispatch(loadOneUser(updatedUser))
    }
}









// UPLOAD PHOTO THUNK
export const updateProfilePic = ({profilePic,userId}) => async () => {


    const data = new FormData()
    // console.log(profilePic,"THUNK PROFILE")
    data.append("profile_picture", profilePic)
    // console.log(data,"<<<<<<<<DATA SENT TO BACK")

    const response = await fetch(`/api/users/${userId}/photo`, {
        method: 'PUT',
        body: data
    })

    if (response.ok) {
        const updatedUser = await response.json()
        loadOneUser(updatedUser)
    }
}

const initialState = {}
const userReducer = (state= initialState, action) =>{
    let newState
    switch(action.type){
        case LOAD_ALL_USERS:
        newState = {...state}
        const arr = action.users
        arr.forEach(user => {
          newState[user.id]= user
        })
        return newState

        case LOAD_ONE_USER:
            newState = {...state};
            newState[action.user.id] = action.user
            return newState

        default:
            return state;
    }
}
export default userReducer
