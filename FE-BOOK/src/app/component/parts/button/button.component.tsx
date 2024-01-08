import { css } from '@emotion/react'
import React, { FC } from 'react'
interface IButtonRadius {
    content: string
    type?: any,
    bgcolor?: any
}
const ButtonRadiusCompoennt: FC<IButtonRadius> = ({ content, type, bgcolor }) => {
    return (
        <div css={buttonCss(bgcolor)}>
            <button type={type} className=' rounded-2xl py-2 px-6'>
                {content}
            </button>
        </div>
    )
}

export default ButtonRadiusCompoennt

const buttonCss = (bgcolor: any) => css`
button{
    background-color: ${bgcolor ? '#fff' : '#f2754e'};
    color: ${bgcolor ? '#f2754e' : '#fff'};
    border: 1px solid ${bgcolor ? '#c0c6cc' : '#fff'};
}
button:hover{
    background-color: ${bgcolor ? '#f2754e' : '#fff'};
    color: ${bgcolor ? '#c0c6cc' : '#f2754e'};
    border: 1px solid ${bgcolor ? '#c0c6cc' : '#c0c6cc'};
}
`