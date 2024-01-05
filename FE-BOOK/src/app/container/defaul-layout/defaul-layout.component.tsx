import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterComponent from '~/app/component/stacks/footer/footer.component'
import HeaderComponent from '~/app/component/stacks/header/header.component'

const DefaulLayoutComponent = () => {
    return (
        <div>
            <div>
                <HeaderComponent />
            </div>
            <Outlet />

            <div>
                <FooterComponent />
            </div>
        </div>
    )
}

export default DefaulLayoutComponent