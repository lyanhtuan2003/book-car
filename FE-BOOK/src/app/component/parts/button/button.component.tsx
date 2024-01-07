import React, { FC } from 'react'
interface IButtonRadius {
    content: string
}
const ButtonRadiusCompoennt: FC<IButtonRadius> = ({ content }) => {
    return (
        <div>
            <button className='bg-orange-600 text-white rounded-2xl py-4 px-6'>
                {content}
            </button>
        </div>
    )
}

export default ButtonRadiusCompoennt