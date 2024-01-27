import {createSlice} from '@reduxjs/toolkit';

const loginAction = createSlice({
    name: 'login',
    initialState: {
        isLogged: null,
    },
    reducers:{
        login(state, action){
            const newId = action.payload;

            state.isLogged={
                id: newId.id
            };
        }
    }
});

export const login_Actions = loginAction.actions;

export default loginAction;