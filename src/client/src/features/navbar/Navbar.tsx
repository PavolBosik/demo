import React from 'react'
import {
    NavbarContainer,
    SwitchLanguage,
    SwitchThemeButton,
} from './Navbar.styles'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { changeLanguage, changeTheme } from '../theme/themeSlice'
import { availableLanguages } from '../../i18n'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ApplicationLocations } from '../../types/common/applications-locations.dto'

const Navbar: React.FC = () => {
    const dispatch = useAppDispatch()
    const { dark, language } = useAppSelector((state) => state.theme)
    const { t, i18n } = useTranslation()

    const handleChangeLanguage = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        i18n.changeLanguage(event.target.value).then()
        dispatch(changeLanguage(event.target.value))
    }

    const navigate = useNavigate()
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
                defaultValue={language}
            >
                {availableLanguages.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
            </SwitchLanguage>
            <SwitchThemeButton
                dark={dark}
                onClick={() => navigate(ApplicationLocations.HOME)}
            >
                {t('home')}
            </SwitchThemeButton>
            <SwitchThemeButton
                dark={dark}
                onClick={() => navigate(ApplicationLocations.WEATHER)}
            >
                {t('weather')}
            </SwitchThemeButton>
        </NavbarContainer>
    )
}

export default Navbar
