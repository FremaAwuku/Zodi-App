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


        console.log(payload ,"<<<<<<<<<<<PAYLOAD THUNK")
        const data = new FormData()

        data.append("user_id",userId)
        data.append("first_name",first_name)
        data.append("first_name_id",first_name_id)
        data.append("first_name_sign",first_name_sign)
        console.log(data ,"<<<<<<<<<<<DATA THUNK")
    const response = await fetch(`/api/users/${userId}/zodiac_list`,{
        method:'POST',
        body: data
    });

    if(response.ok){
        const rows = await response.json()
        dispatch(addListRow(rows))
    }
}
export const addListMatch = (payload) =>  async dispatch =>{
    console.log(payload, "<<<<<<<<THUNK PAYLOAD")
    const {
        rowId,
        userId,
        match_name,
        match_name_id,
        match_name_sign,
    }=payload

    const data = new FormData()
    data.append("user_id",userId)
    data.append("match_name",match_name)
    data.append("match_name_id",match_name_id)
    data.append("match_name_sign",match_name_sign)

    console.log(data, "<<<<<<<<THUNK FORM DATA")
const response = await fetch(`/api/users/${userId}/zodiac_list/${rowId}`,{
    method:'PUT',
    body: data
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
