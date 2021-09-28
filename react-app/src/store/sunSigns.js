const LOAD_SUN_SIGNS = 'sun_signs/LOAD_SUN_SIGNS'

const loadSunSigns= (sun_signs) =>({
    type:LOAD_SUN_SIGNS,
    sun_signs
})
//THUNKS
export const getAllSunSigns = () =>  async dispatch =>{

    const response = await fetch(`/api/data/sun_signs`);

    if(response.ok){
        const sun_signs = await response.json().then(res=>res = res.sun_signs)

        dispatch(loadSunSigns(sun_signs))
    }
}
export const calculateSunSign =({calcMonth, calcDate}) => async dispatch =>{
        const data = new FormData()

        data.append('birth_month', calcMonth)
        data.append('birth_date', calcDate)
        console.log(calcMonth,"<<<<<FRONT END MONTH")
        console.log(calcDate,"<<<<<<<<FRONT END MONTH")
        const response = await fetch('/api/data/sun_signs', {
            method: 'POST',
            body:data
        })
        if(response.ok){
            const sun_sign = await response.json()
            return sun_sign
        }
}

const initialState = {}

export default function sunSignReducer (state= initialState, action){
    let newState
    switch(action.type){
        case LOAD_SUN_SIGNS:
            newState = {...state};
            action.sun_signs.forEach(sun_sign =>{
                newState[sun_sign.id] = sun_sign
            })
            return newState
        default:
            return state;
    }
}
