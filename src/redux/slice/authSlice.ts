
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    token: string | null;
}

const initialState: AuthState = {
    token: localStorage.getItem("token") || null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUp: (state, action: PayloadAction<{ token: string }>) => {
            state.token = action.payload.token;
            localStorage.setItem("token", state.token);
        },
        login: (state, action: PayloadAction<{ token: string }>) => {
            state.token = action.payload.token;
            localStorage.setItem("token", state.token);
        },
        logOut: (state) => {
            state.token = null;
            localStorage.removeItem("token");
        }
    }
})

export const { signUp, login, logOut } = authSlice.actions;

export default authSlice.reducer;