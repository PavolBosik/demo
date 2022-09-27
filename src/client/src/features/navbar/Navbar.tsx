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

interface INavbar {
    onChangeLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void
    language: string
}

const Navbar: React.FC<INavbar> = ({ onChangeLanguage, language }) => {
    const dispatch = useAppDispatch()
    const { dark } = useAppSelector((state) => state.theme)
    const { t } = useTranslation()
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
                onChange={(e) => onChangeLanguage(e)}
                defaultValue={language}
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
