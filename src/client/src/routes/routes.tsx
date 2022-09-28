import React from 'react'
import { Route, Routes as BaseRoutes } from 'react-router-dom'
import Counter from '../features/counter/Counter'
import Weather from '../features/weather/Weather'

import { ApplicationLocations } from '../types/common/applications-locations.dto'

const Routes = () => {
    return (
        <BaseRoutes>
            <Route path={ApplicationLocations.HOME} element={<Counter />} />
            <Route path={ApplicationLocations.WEATHER} element={<Weather />} />
        </BaseRoutes>
    )
}

export default Routes
