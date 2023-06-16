import { createStore } from 'redux';

const initialState = {
    products: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    }
}

export const store = createStore(reducer);