const initialState = {
    calculatedTrainingMax: 0.0,
    initialWeight: 0,
    newAchievedMax: 0,
    showHomeModal:true,
    showBlock1Modal: true,
    showBlock2Modal: true,
    showBlock3Modal: true,
    showBlock4Modal: true,
    showPostPeakModal: false,
    repsWeekEleven: 0
};

const reducer = (state = initialState, action) =>{
    const newState = {...state}
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
            return newState
        case 'SET_SHOW_BLOCK1_MODAL':
            newState.showBlock1Modal = action.payload
            return newState
        case 'SET_SHOW_BLOCK2_MODAL':
            newState.showBlock2Modal = action.payload
            return newState
        case 'SET_SHOW_BLOCK3_MODAL':
            newState.showBlock3Modal = action.payload
            return newState
        case 'SET_SHOW_BLOCK4_MODAL':
            newState.showBlock4Modal = action.payload
            return newState
        case 'SET_SHOW_POST_PEAK_MODAL':
            newState.showPostPeakModal = action.payload
            return newState
        case 'SET_REPS_WEEK_ELEVEN':
            newState.repsWeekEleven = action.payload
        default:
            return newState;
    }
}
export default reducer;