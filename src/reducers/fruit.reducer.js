import { actionsTypes } from '../constants/fruit.actions';


const initialState = {
    fruits: [
        { id: 1, name: "Grape", quantity: 5 },
        { id: 2, name: "Apple", quantity: 10 },
        { id: 3, name: "Orange", quantity: 15 },
    ],
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.ADD_FRUIT:
            return { fruits: [...state.fruits, action.payload] };
        case actionsTypes.REMOVE_FRUIT:
            return { fruits: state.fruits.filter(f => f.id !== action.payload.id) };
        default:
            return state;
    }
}

export default { reducer };