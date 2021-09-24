const LOAD_USER_LIST= 'rows/LOAD_USER_LIST'
const ADD_LIST_ROW= 'row/ADD_LIST_ROW'

const REMOVE_LIST_ROW= 'row/REMOVE_LIST_ROW'

const loadUserList = (rows) =>({
    type: LOAD_USER_LIST,
    rows

})
const addListRow = (row) => ({
    type: ADD_LIST_ROW,
    row
})
const removeListRow = (row_id) => ({
    type: REMOVE_LIST_ROW,
    row_id
})

export const getUserZodiacList = (userId) =>  async dispatch =>{

    const response = await fetch(`/api/users/${userId}/zodiac_list`);

    if(response.ok){
        const rows = await response.json().then(res=>res = res.zodiac_list_rows)
        dispatch(loadUserList(rows))
    }
}
export const addZodiacListRow = (payload) =>  async dispatch =>{
        const {
            userId,
            first_name,
            first_name_id,
            first_name_sign,
        }=payload

        const data= {
            user_id:userId,
            first_name,
            first_name_id,
            first_name_sign,
        }

    const response = await fetch(`/api/users/${userId}/zodiac_list`,{
        method:'POST',
        body: JSON.stringify(data)
    });

    if(response.ok){
        const rows = await response.json()
        dispatch(addListRow(rows))
    }
}
export const addListMatch = (payload) =>  async dispatch =>{
    const {
        userId,
        match_name,
        match_name_id,
        match_name_sign,
    }=payload

    const data= {
        user_id:userId,
        match_name,
        match_name_id,
        match_name_sign,
    }

const response = await fetch(`/api/users/${userId}/zodiac_list`,{
    method:'PUT',
    body: JSON.stringify(data)
});

if(response.ok){
    const added_match= await response.json()
    dispatch(addListRow(added_match))
}
}

export const deleteRow = (payload) => async dispatch =>{
    const row_id = Number(payload)
    const response = await fetch(`/api/zodiac_list/${row_id}`,{
        method: 'DELETE'
    });

    if(response.ok){
        const deletedRow = await response.json()
        const row_id= deletedRow.row_id

        dispatch(removeListRow(row_id))
        return deletedRow
    }


}
const initialState = {}



const zodiacListReducer = (state= initialState, action) =>{
    let newState
    switch(action.type){
        case LOAD_USER_LIST:
            newState = {...state};
            action.rows.forEach(row =>{
                newState[row.id] = row
            })
            return newState

        case ADD_LIST_ROW:
            if(!state[action.row.id]){
                newState = {
                    ...state,
                    [action.row.id]: action.row
                }
                return newState
            }else return{
                ...state,
                [action.row.id]:{
                    ...state[action.row.id],
                    ...action.row
                }

            }
        case REMOVE_LIST_ROW:
            newState = {...state}
            delete newState[action.row_id]
            return newState
        default:
            return state;
    }
}
export default zodiacListReducer
