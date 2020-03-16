export default(state = [], action) => {
    switch(action.type) {
        case 'FECTH_USER':
            return [...state, action.payload];
        default:
            return state;
    }
};