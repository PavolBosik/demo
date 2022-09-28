import React from 'react'
import { useGetWeatherForecastQuery } from '../../store/weatherSlice'
import { WeatherContainer } from './Weather.styles'
import WeatherCard from './WeatherCard'
interface IWeatherData {
    // dark?: string
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

const Weather: React.FC = () => {
    const { data, isLoading, isError } = useGetWeatherForecastQuery<{
        data: IWeatherData[]
        isLoading: boolean
        isError: boolean
    }>('')
    return (
        <WeatherContainer>
            {!isLoading &&
                !isError &&
                data.map((weather, index) => (
                    <WeatherCard
                        key={index}
                        date={weather.date}
                        temperatureC={weather.temperatureC}
                        temperatureF={weather.temperatureF}
                        summary={weather.summary}
                    />
                ))}
        </WeatherContainer>
    )
}

export default Weather
