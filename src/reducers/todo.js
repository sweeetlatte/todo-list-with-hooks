import axios from "axios";

const initialState = {
    items: []
}

const SET_TODOS = "SET_TODOS"

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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}

export default reducer