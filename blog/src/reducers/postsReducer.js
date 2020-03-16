export default(state = [], action) => {
    switch(action.type) {
        case 'FECTH_POSTS':
            return action.payload;
        default:
            return state;
    }
};