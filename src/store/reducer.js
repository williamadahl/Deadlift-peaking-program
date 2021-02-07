const initialState = {
    globalWeight: parseFloat(69),
    initialWeight: parseInt(0),
    newAchievedMax: parseInt(0)
};

const reducer = (state = initialState, action) =>{
    const newState = {...state}
    console.log('Recieved value: ' + action.payload)
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