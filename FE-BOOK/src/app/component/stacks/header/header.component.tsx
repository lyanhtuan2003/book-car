import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
    return (
        <>
            <div>HeaderComponent</div>
            <div>
                <Link to={"/"}>
                    <li >
                        trang chủ
                    </li>
                </Link>
                <Link to={"/detail"}>
                    <li>
                        chi tiết
                    </li>
                </Link>

            </div>
        </>
    )
}

export default HeaderComponent