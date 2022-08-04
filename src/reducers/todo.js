import axios from "axios";

const initialState = {
    items: []
}

const SET_TODOS = "SET_TODOS"
const ADD_TODO = "ADD_TODO"
const CHECK_TODO = "CHECK_TODO"

export const setTodos = (items) => ({
    type: SET_TODOS,
    payload: items
})

export const fetchTodos = () => async (dispatch) => {
    const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch(setTodos(res.data));
}

export const addTodo = (item) => ({
    type: ADD_TODO,
    payload: item
})

export const checkTodo = (index) => ({
    type: CHECK_TODO,
    payload: index
})

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return {
                ...state,
                items: action.payload
            };
        case ADD_TODO:
            // payload là text
            // vị trí của payload chính là vị trí cuối cùng của mảng items
            if (state.items && state.items.length > 0)
                return {
                    ...state,
                    items: [...state.items, {
                        id: state.items.length + 1,
                        title: action.payload,
                        completed: false
                    }]

                }
            else return {
                ...state,
                items: [{
                    id: 1,
                    title: action.payload,
                    completed: false
                }]
            };
        case CHECK_TODO:
            state.items[action.payload].completed = true;
            return {
                ...state,
                items: state.items.map(item => item)
            }
        default:
            return state;
    }
}

export default reducer