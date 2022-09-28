import { createSlice } from '@reduxjs/toolkit'
import { AppThunk } from './store'

export interface ThemeState {
    dark: boolean
    language: string
}

const lsi18NSetting = localStorage.getItem('i18nextLng')

const initialState: ThemeState = {
    dark: false,
    language: lsi18NSetting ? lsi18NSetting : 'en',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        themeChanged: (state) => {
            state.dark = !state.dark
        },
        languageChanged: (state, action) => {
            state.language = action.payload
        },
    },
})
export const { themeChanged, languageChanged } = themeSlice.actions

export const changeTheme = (): AppThunk => (dispatch) => {
    dispatch(themeChanged())
}
export const changeLanguage =
    (language: string): AppThunk =>
    (dispatch) => {
        dispatch(languageChanged(language))
    }

export default themeSlice.reducer
