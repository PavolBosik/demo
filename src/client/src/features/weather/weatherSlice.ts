import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl:
            'https://demo-env.eba-tbphsf83.us-west-2.elasticbeanstalk.com/',
    }),
    endpoints: (builder) => ({
        getWeatherForecast: builder.query({
            query: () => 'weatherforecast',
        }),
    }),
})

export const { useGetWeatherForecastQuery } = weatherApiSlice
