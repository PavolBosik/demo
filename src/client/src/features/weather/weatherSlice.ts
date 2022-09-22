import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5231' }),
    endpoints: (builder) => ({
        getWeatherForecast: builder.query({
            query: () => 'WeatherForecast',
        }),
    }),
})

export const { useGetWeatherForecastQuery } = weatherApiSlice
