import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice';
import studentReducer from './Slices/studentSlice';


const store = configureStore({
    reducer: {
        auth: authReducer,
        students: studentReducer,
    },
});

export default store;