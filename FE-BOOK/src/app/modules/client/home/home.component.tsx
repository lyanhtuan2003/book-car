import React from 'react'
import CarsComponents from './component/cars/cars.component'
import FlightsComponent from './component/flights/flights.component'
import HottelComponents from './component/hottel/hottel.component'

const HomeComponent = () => {
    return (
        <div>
            <CarsComponents />
            <FlightsComponent />
            <HottelComponents />
        </div>
    )
}

export default HomeComponent