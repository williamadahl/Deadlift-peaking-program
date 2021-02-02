export const reducer = (state, action) => {
    if(action.type === 'CLOSE_MODAL'){
        return{...state, isModalOpen: false};
    }
    throw new Error('no matiching action type');
};