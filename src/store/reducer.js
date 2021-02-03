const initialState = {
    globalWeight: 69
};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'SET_WEIGHT':
                return {...state, globalWeight: state.globalWeight + action.value};
        default:
            return state;
    }
}
export default reducer;