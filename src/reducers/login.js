import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
    token: null
})

// const LOGIN_SUCCESS = "LOGIN_SUCCESS"

// export const loginSuccess = ({ token }) => ({
//     type: LOGIN_SUCCESS,
//     payload: token
// })

// export const login = ({ email, password }) => async (dispatch) => {
//     const res = await axios.post(
//         "https://codersx-swagger.glitch.me/api/auth/login",
//         {
//             email,
//             password
//         }
//     );
//     dispatch(loginSuccess(res.data));
// };

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 token: action.payload
//             }
//         default:
//             return state
//     }
// }

// function createSlice({
//     // A name, used in action types
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

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.token = action.payload.token;
        }
    }
})

const { loginSuccess } = auth.actions;

export const login = ({ email, password }) => async (dispatch) => {
    const res = await axios.post(
        "https://codersx-swagger.glitch.me/api/auth/login",
        {
            email,
            password
        }
    );
    dispatch(loginSuccess(res.data));
};

export default auth.reducer;