import React from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperListComponent from '~/app/component/stacks/swiper-list/swiper-list.component'

const VoucherComponent = () => {

    const arrayImg = [
        "https://storage.googleapis.com/futa-busline-cms-dev/343x184_4x_29d182ce55/343x184_4x_29d182ce55.png",
        "https://storage.googleapis.com/futa-busline-web-cms-prod/Zalo_11b66ecb81/Zalo_11b66ecb81.png",
        // "https://storage.googleapis.com/futa-busline-cms-de…Pay_2_57b0471834/Banner_FUTA_Pay_2_57b0471834.png",
        "https://storage.googleapis.com/futa-busline-web-cms-prod/343x184_ea6055b4a6/343x184_ea6055b4a6.png",
        "https://storage.googleapis.com/futa-busline-web-cms-prod/Zalo_11b66ecb81/Zalo_11b66ecb81.png"

    ]
    return (
        <div>
            <SwiperListComponent title='Khuyến Mại Nổi Bật' >
                {arrayImg?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt='' />
                    </SwiperSlide>
                ))}
            </SwiperListComponent>
        </div>
    )
}

export default VoucherComponent