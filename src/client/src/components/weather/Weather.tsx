import React from 'react'
import { WeatherContainer } from './Weather.styles'
import WeatherCard from './WeatherCard'
import { useQuery } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
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

const Weather: React.FC = () => {
    const { isLoading, error, data } = useQuery(['weatherApi'], () =>
        axios
            .get(
                'https://demo-env.eba-tbphsf83.us-west-2.elasticbeanstalk.com/weatherforecast'
            )
            .then((res: AxiosResponse<IWeatherData[]>) => res.data)
    )
    return (
        <WeatherContainer>
            {!isLoading &&
                !error &&
                data &&
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
