import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slice/authSlice'
import {api} from '../api/index'


const store = configureStore({
    reducer : {
        auth : authReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 

export {store}