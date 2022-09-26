import React from 'react'
import { useGetWeatherForecastQuery } from './weatherSlice'
import { getWeatherImage } from '../../utils/getWeatherImage'
import { WeatherContainer, WeatherElement } from './Weather.styles'
import { useAppSelector } from '../../app/hooks'
import { useTranslation } from 'react-i18next'
interface IWeatherData {
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

const Weather = () => {
    const { data, isLoading, isError } = useGetWeatherForecastQuery<{
        data: IWeatherData[]
        isLoading: boolean
        isError: boolean
    }>('')
    const { dark } = useAppSelector((state) => state.theme)
    const { t } = useTranslation('weather')
    return (
        <WeatherContainer>
            {!isLoading &&
                !isError &&
                data.map((w) => (
                    <WeatherElement dark={dark} key={w.date}>
                        <img
                            src={getWeatherImage(w.summary)}
                            width={100}
                            height={100}
                            alt={t(w.summary)}
                        />
                        <div>{t(w.summary)}</div>
                        <div>{w.temperatureC}</div>
                        <div>
                            {new Date(w.date).toLocaleDateString(undefined, {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </div>
                    </WeatherElement>
                ))}
        </WeatherContainer>
    )
}

export default Weather
