const initialState = {
    calculatedTrainingMax: 0,
    initialWeight: 0,
    newAchievedMax: 0
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

        default:
            return newState;
    }
}
export default reducer;