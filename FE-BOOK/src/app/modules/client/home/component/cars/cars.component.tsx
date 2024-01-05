import React from 'react'
import SwiperListComponent from '~/app/component/stacks/swiper-list/swiper-list.component'

const CarsComponents = () => {
    return (
        <div>
            <SwiperListComponent title='CARS' />
            <p className='text-red-600'>Slide show</p>
        </div>
    )
}

export default CarsComponents