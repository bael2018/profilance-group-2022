import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/newsSlice'
import { newsApi } from './query/newsApi'
import notificationRefucer from './slices/notification'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        notify: notificationRefucer,
        [newsApi.reducerPath]: newsApi.reducer
    },
    middleware: defautlMiddleware => defautlMiddleware().concat(newsApi.middleware)
})