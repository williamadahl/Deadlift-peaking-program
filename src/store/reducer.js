const initialState = {
    calculatedTrainingMax: 0,
    initialWeight: 0,
    newAchievedMax: 0,
    showHomeModal:false
};

const reducer = (state = initialState, action) =>{
    const newState = {...state}
    console.log('Recieved value: ' + action.payload)
    switch (action.type) {
        case 'SET_WEIGHT':
            const inputWeight = parseInt(action.payload)
            newState.initialWeight = inputWeight
            newState.calculatedTrainingMax = inputWeight*0.8
            return newState;

        case 'INCREASE_WEIGHT':
            newState.calculatedTrainingMax += action.payload
            return newState;

        case 'SET_NEW_MAX':
            newState.newAchievedMax = action.payload
            return newState
        case 'SET_SHOW_HOME_MODAL':
            newState.showHomeModal = action.payload
        default:
            return newState;
    }
}
export default reducer;