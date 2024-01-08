import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaulHomeComponent = () => {
    return (
        <>
            <div className='mt-[180px]'>
                <Outlet />
            </div>
        </>
    )
}

export default DefaulHomeComponent