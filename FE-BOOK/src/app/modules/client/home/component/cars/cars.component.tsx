import { css } from '@emotion/react'
import SwiperListComponent from '~/app/component/stacks/swiper-list/swiper-list.component'

const CarsComponents = () => {
    return (
        <div css={carsCss}>
            <SwiperListComponent title='CARS' />
            <p className='text-one'>Slide show</p>
        </div>
    )
}

export default CarsComponents

const carsCss = css`
.text-one{
    color: black;
    font-size:33px;
}

@media (min-width: 0) and (max-width: 739px) {
    .text-one{
        color: pink;
        font-size:13px;
    }
} 
`