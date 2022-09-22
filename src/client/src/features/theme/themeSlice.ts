import { createSlice } from '@reduxjs/toolkit'
import { AppThunk } from '../../app/store'

export interface ThemeState {
    dark: boolean
}
const initialState: ThemeState = {
    dark: false,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        themeChanged: (state) => {
            state.dark = !state.dark
        },
    },
})
export const { themeChanged } = themeSlice.actions
export const changeTheme = (): AppThunk => (dispatch) => {
    dispatch(themeChanged())
}
export default themeSlice.reducer
