import React from 'react'
import { WeatherElement } from './Weather.styles'
import { getWeatherImage } from '../../utils/getWeatherImage'
import { useTypedSelector } from '../../hooks/useTypedReduxHooks'
import { useTranslation } from 'react-i18next'

export interface IWeatherData {
    date: string
    temperatureC: number
    temperatureF: number
    summary:
        | 'Hot'
        | 'Balmy'
        | 'Warm'
        | 'Freezing'
        | 'Scorching'
        | 'Bracing'
        | 'Sweltering'
        | 'Cool'
        | 'Chilly'
        | 'Mild'
}

const WeatherCard: React.FC<IWeatherData> = ({
    date,
    temperatureC,
    temperatureF,
    summary,
}) => {
    const { language, dark } = useTypedSelector((state) => state.theme)
    const { t } = useTranslation('weather')

    return (
        <WeatherElement dark={dark}>
            <img
                src={getWeatherImage(summary)}
                width={100}
                height={100}
                alt={t(summary)}
            />
            <div>{t(summary)}</div>
            <div>{temperatureC}°C</div>
            <div>{temperatureF}°F</div>
            <div>
                {new Date(date).toLocaleDateString(language, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </div>
        </WeatherElement>
    )
}

export default WeatherCard
