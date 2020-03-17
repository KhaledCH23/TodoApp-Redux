import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, EDIT_TODO } from "../constants/actiontypes";
const initialState = {
    todo: []
};

function reducer(state = initialState, action) {
    // let initialId=0 
    switch (action.type) {
        case ADD_TODO:
            return {
                todo: [...state.todo.concat({ text: action.text, id: Math.random(), isComplete: false })]
            };
        case REMOVE_TODO:
            return {
                todo: state.todo.filter(el => el.id !== action.id)
            }
        case COMPLETE_TODO:
            return {
                todo: state.todo.map(el =>
                    el.id === action.id ? {...el, isComplete: !el.isComplete } : el
                )
            }
        case EDIT_TODO:
            return {
                todo: state.todo.map(el =>
                    el.id === action.id ? {...el, text: action.payload } : el
                )
            }
        default:
            return state;
    }
}
export
default reducer;