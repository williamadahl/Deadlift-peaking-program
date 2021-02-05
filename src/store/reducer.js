const initialState = {
    globalWeight: 69
};

const reducer = (state = initialState, action) =>{
    const newState = {...state}
    switch (action.type) {
        case 'SET_WEIGHT':
            newState.globalWeight = action.payload
            return newState;

        case 'INCREASE_WEIGHT':
            newState.globalWeight += action.payload
            return newState;

        default:
            return newState;
    }
}
export default reducer;