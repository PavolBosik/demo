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
}

const Navbar: React.FC<INavbar> = ({ onChangeLanguage }) => {
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
            <SwitchLanguage dark={dark} onChange={(e) => onChangeLanguage(e)}>
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
