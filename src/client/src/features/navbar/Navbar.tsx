import React from 'react'
import { NavbarContainer, SwitchThemeButton } from './Navbar.styles'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeTheme } from '../theme/themeSlice'

const Navbar = () => {
    const dispatch = useAppDispatch()
    const { dark } = useAppSelector((state) => state.theme)
    return (
        <NavbarContainer>
            <SwitchThemeButton
                dark={dark}
                onClick={() => dispatch(changeTheme())}
            >
                Switch Theme
            </SwitchThemeButton>
        </NavbarContainer>
    )
}

export default Navbar
