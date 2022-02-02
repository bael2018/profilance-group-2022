import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: '',
    description: '',
    title: '',
    isActive: false
}

const notification = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setNotification: (state , action) => {
           state.description = action.payload.description;
           state.status = action.payload.status;
           state.title = action.payload.title;
           state.isActive = true
        },
        clearNotification: state => {
            state.description = '';
            state.status = '';
            state.title = '';
            state.isActive = false
        }
    }
})

export const { setNotification , clearNotification } = notification.actions
export default notification.reducer