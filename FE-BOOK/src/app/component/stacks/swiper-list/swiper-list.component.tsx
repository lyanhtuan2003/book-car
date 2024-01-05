import React, { FC } from 'react'

interface ISwiperList {
    title: string
}
const SwiperListComponent: FC<ISwiperList> = ({ title }) => {
    return (
        <>
            <div>{title}</div>
            {/* <p>SDIDE SHOW</p> */}
            {/* https://swiperjs.com/demos */}
        </>
    )
}

export default SwiperListComponent