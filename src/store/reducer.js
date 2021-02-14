const initialState = {
    calculatedTrainingMax: 0,
    initialWeight: 0,
    newAchievedMax: 0,
    showHomeModal:true,
    showBlock1Modal: true,
    showBlock2Modal: true,
    showBlock3Modal: true,
    showBlock4Modal: true,
    showPostPeakModal: false
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
            console.log('HOME MODAL')
            newState.showHomeModal = action.payload
            return newState
        case 'SET_SHOW_BLOCK1_MODAL':
            console.log('BLOCK 1 MODAL')
            newState.showBlock1Modal = action.payload
            return newState
        case 'SET_SHOW_BLOCK2_MODAL':
            console.log('BLOCK 2 MODAL')
            newState.showBlock2Modal = action.payload
            return newState
        case 'SET_SHOW_BLOCK3_MODAL':
            console.log('BLOCK 3 MODAL')
            newState.showBlock3Modal = action.payload
            return newState
        case 'SET_SHOW_BLOCK4_MODAL':
            console.log('BLOCK 4 MODAL')
            newState.showBlock4Modal = action.payload
            return newState
        case 'SET_SHOW_POST_PEAK_MODAL':
            console.log('BLOCK PEAK MODAL')
            newState.showPostPeakModal = action.payload
            return newState
        default:
            return newState;
    }
}
export default reducer;