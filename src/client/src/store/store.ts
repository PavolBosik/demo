import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import themeReducer from './themeSlice'
import { weatherApiSlice } from './weatherSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [weatherApiSlice.reducerPath]: weatherApiSlice.reducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherApiSlice.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
