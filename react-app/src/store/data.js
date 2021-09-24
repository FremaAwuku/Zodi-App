LOAD_SUN_SIGNS = 'sun_signs/LOAD_SUN_SIGNS'
LOAD_COMPATIBILITIES = 'compatibilities/LOAD_COMPATIBILITIES'

const loadSunSigns= (sun_signs) =>({
    type:LOAD_SUN_SIGNS,
    sun_signs
})

const loadCompatibilities= (compatibilities) =>({
    type:LOAD_COMPATIBILITIES,
    compatibilities
})


//THUNKS
export const getAllSunSigns = () =>  async dispatch =>{
    const response = await fetch(`/api/data/sun_signs`);

    if(response.ok){
        const sun_signs = await response.json().then(res=>res = res.sun_signs)
        dispatch(loadSunSigns(sun_signs))
    }
}

export const getAllCompatibilities = () =>  async dispatch =>{
    const response = await fetch(`/api/data/compatibilities`);

    if(response.ok){
        const compatibilities = await response.json().then(res=>res = res.compatibilities)
        dispatch(loadCompatibilities(compatibilities))
    }
}
const initialState = {}

const dataReducer = (state= initialState, action) =>{
    let newState
    switch(action.type){
        case LOAD_SUN_SIGNS:
            newState = {...state};
            action.sun_signs.forEach(sun_sign =>{
                newState[sun_sign.id] = sun_sign
            })
            return newState
        case LOAD_COMPATIBILITIES:
            newState = {...state};
            action.compatibilities.forEach(comp =>{
                newState[comp.id] = comp
            })
            return newState


        default:
            return state;
    }
}
export default dataReducer
