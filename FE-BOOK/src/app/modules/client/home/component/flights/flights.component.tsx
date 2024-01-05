import React from 'react'
import SwiperListComponent from '~/app/component/stacks/swiper-list/swiper-list.component'

const FlightsComponent = () => {
    return (
        <div>
            <SwiperListComponent title='FLIGHTS' />
            <p className='text-red-600'>Slide show</p>
        </div>
    )
}

export default FlightsComponent