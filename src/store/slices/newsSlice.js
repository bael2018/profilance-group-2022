import { createSlice } from "@reduxjs/toolkit";
import { visitors } from "../../api";

const initialState = {
    isLogged: false,
    userName: 'Гость',
    isUser: visitors.viewer,
    isModalActive: false,
    isEditModal: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: state => {
            state.isLogged = true
        },
        logoutSuccess: state => {
            state.isLogged = false
        }, 
        setEditModal: state => {
            state.isEditModal = !state.isEditModal
        },
        setUser: (state , action) => {
            state.isUser = action.payload.user;
            state.userName = action.payload.name;
        },
        clearUser: state => {
            state.isUser = visitors.viewer;
            state.userName = 'Гость';
        },
        setModal: state => {
            state.isModalActive = !state.isModalActive
        }
    }
})

export const { 
    setUser, 
    loginSuccess, 
    setModal, 
    clearUser, 
    logoutSuccess, 
    setEditModal 
} = authSlice.actions
export default authSlice.reducer