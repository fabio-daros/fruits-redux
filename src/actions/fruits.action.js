import { actionsTypes } from "../constants/fruits.constants";

const actions = {
    add: fruit => ({ 
        type: "actionsTypes.ADD_FRUIT",
        payload: fruit,
     }),
    remove: id => ({ 
        type: "actionsTypes.REMOVE_FRUIT",
        payload: id,
     }),
}

export default { actions };