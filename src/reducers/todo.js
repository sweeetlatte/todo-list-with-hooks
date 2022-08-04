import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

// const SET_TODOS = "SET_TODOS"
// const ADD_TODO = "ADD_TODO"
// const CHECK_TODO = "CHECK_TODO"

// export const setTodos = (items) => ({
//     type: SET_TODOS,
//     payload: items
// })

// export const fetchTodos = () => async (dispatch) => {
//     const res = await axios.get(
//         "https://jsonplaceholder.typicode.com/todos"
//     );
//     dispatch(setTodos(res.data));
// }

// export const addTodo = (item) => ({
//     type: ADD_TODO,
//     payload: item
// })

// export const checkTodo = (index) => ({
//     type: CHECK_TODO,
//     payload: index
// })

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_TODOS:
//             return {
//                 ...state,
//                 items: action.payload
//             };
//         case ADD_TODO:
//             // payload là text
//             // vị trí của payload chính là vị trí cuối cùng của mảng items
//             if (state.items && state.items.length > 0)
//                 return {
//                     ...state,
//                     items: [...state.items, {
//                         id: state.items.length + 1,
//                         title: action.payload,
//                         completed: false
//                     }]

//                 }
//             else return {
//                 ...state,
//                 items: [{
//                     id: 1,
//                     title: action.payload,
//                     completed: false
//                 }]
//             };
//         case CHECK_TODO:
//             state.items[action.payload].completed = true;
//             return {
//                 ...state,
//                 items: state.items.map(item => item)
//             }
//         default:
//             return state;
//     }
// }

// function createSlice({
//     // A string name for this slice of state.
//     name: string,
//     // The initial state for the reducer
//     initialState: any,
//     // An object of "case reducers". Key names will be used to generate actions.
//     reducers: Object<string, ReducerFunction | ReducerAndPrepareObject>
//     // A "builder callback" function used to add more reducers, or
//     // an additional object of "case reducers", where the keys should be other
//     // action types
//     extraReducers?:
//     | Object<string, ReducerFunction>
//     | ((builder: ActionReducerMapBuilder<State>) => void)
// })

const todo = createSlice({
    name: "todo",
    initialState,
    reducers: {
        setTodos(state, action) {
            state.items = action.payload;
        },
        addTodo(state, action) {
            if (state.items && state.items.length > 0) {
                state.items = [...state.items, {
                    id: state.items.length + 1,
                    title: action.payload,
                    completed: false
                }]
            }
            else state.items = [{
                id: 1,
                title: action.payload,
                completed: false
            }]
        },
        checkTodo(state, action) {
            state.items[action.payload].completed = true;
        }
    }
})

export const { setTodos, addTodo, checkTodo } = todo.actions;

export const fetchTodos = () => async (dispatch) => {
    const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch(setTodos(res.data));
}

export default todo.reducer