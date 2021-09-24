const LOAD_COMPATIBILITIES = 'compatibilities/LOAD_COMPATIBILITIES'


const loadCompatibilities= (compatibilities) =>({
    type:LOAD_COMPATIBILITIES,
    compatibilities
})

export const getAllCompatibilities = () =>  async dispatch =>{
    const response = await fetch(`/api/data/compatibilities`);

    if(response.ok){
        const compatibilities = await response.json().then(res=>res = res.compatibilities)
        dispatch(loadCompatibilities(compatibilities))
    }
}
const initialState = {}

export default function compatibilityReducer (state= initialState, action) {
    let newState
    switch (action.type) {
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
