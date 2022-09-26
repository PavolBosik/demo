import React from 'react'
import {
    NavbarContainer,
    SwitchLanguage,
    SwitchThemeButton,
} from './Navbar.styles'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeTheme } from '../theme/themeSlice'
import { availableLanguages } from '../../i18n'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const dispatch = useAppDispatch()
    const { dark } = useAppSelector((state) => state.theme)
    const { t, i18n } = useTranslation()
    const handleChangeLanguage = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        i18n.changeLanguage(event.target.value)
    }
    return (
        <NavbarContainer>
            <SwitchThemeButton
                dark={dark}
                onClick={() => dispatch(changeTheme())}
            >
                {t('switchTheme')}
            </SwitchThemeButton>
            <SwitchLanguage
                dark={dark}
                onChange={(e) => handleChangeLanguage(e)}
            >
                {availableLanguages.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
            </SwitchLanguage>
        </NavbarContainer>
    )
}

export default Navbar
