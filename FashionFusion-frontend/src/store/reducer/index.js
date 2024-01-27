import {configureStore} from '@reduxjs/toolkit';
import loginAction from '../action/login_action';

const store = configureStore({
    reducer:{
        login:loginAction.reducer,
    }
});

export default store;