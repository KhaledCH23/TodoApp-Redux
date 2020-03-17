import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, EDIT_TODO } from "../constants/actiontypes";

// let initialId = 0;
export const AddTodo = text => {
    return {
        type: ADD_TODO,
        text,
        // id: ++initialId
        // payload: { id: ++initialId, text }
    };
};
export const RemoveTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id
    };
};
export const CompleteTodo = (id) => {
    return {
        type: COMPLETE_TODO,
        id
    };
};
export const EditTodo = (payload, id) => {
    return {
        type: EDIT_TODO,
        id,
        payload
    };
};