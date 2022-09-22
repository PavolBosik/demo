import React from 'react'
import { NavbarContainer, SwitchThemeButton } from './Navbar.styles'
import { useAppDispatch } from '../../app/hooks'
import { changeTheme } from '../theme/themeSlice'

const Navbar = () => {
    const dispatch = useAppDispatch()
    return (
        <NavbarContainer>
            <SwitchThemeButton onClick={() => dispatch(changeTheme())}>
                Switch Theme
            </SwitchThemeButton>
        </NavbarContainer>
    )
}

export default Navbar
