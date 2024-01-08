import React from 'react'
import LeftBookTickets from './left-book-tickets/left-book-tickets.component'
import RightBookTickets from './right-book-tickets/right-book-tickets.component'

const BooktickitsComponent = () => {
    return (
        <div className='bg-[#f3f3f5]'>
            <div className='flex justify-between w-[1128px] m-auto '>
                <div className='w-[65%]'>
                    <LeftBookTickets />
                </div>

                <div>
                    <RightBookTickets />
                </div>
            </div>
        </div>

    )
}

export default BooktickitsComponent