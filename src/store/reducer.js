const initialState = {
    globalWeight: 69
};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'SET_WEIGHT':
            console.log('set_weight')
            console.log(action.payload)
            console.log(state.globalWeight)
            const newState = {...state}
            newState.globalWeight = action.payload
            return newState;
                // return {...state, globalWeight: state.globalWeight + action.payload};
        default:
            console.log('default')
            return state;

    }
}
export default reducer;