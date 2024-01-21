import React from 'react'
import { Link } from 'react-router-dom'

const MenuAccount = () => {
    return (
        <div className='col-span-12 hidden rounded-2xl border p-2 sm:col-span-3 lg:block'>
            <div className='rounded-lg px-3 py-2'>
                <div className='flex items-center p-2'>
                    <img src="https://futabus.vn/images/header/profile/futaPay.svg" alt="" />
                    <span className='ml-3'>FUTAPay</span>
                </div>
            </div>
            <Link to={"/account-information"}>
                <div className='rounded-lg px-3 py-2'>
                    <div className='flex items-center p-2'>
                        <img src="	https://futabus.vn/images/header/profile/Profile.svg" alt="" />
                        <span className='ml-3'>Thông tin tài khoản</span>
                    </div>
                </div>
            </Link>

            <Link to={"/ticket-purchase-history"}>
                <div className='rounded-lg px-3 py-2'>
                    <div className='flex items-center p-2'>
                        <img src="https://futabus.vn/images/header/profile/History.svg" alt="" />
                        <span className='ml-3'>Lịch sử mua vé</span>
                    </div>
                </div> </Link>


            <div className='rounded-lg px-3 py-2'>
                <div className='flex items-center p-2'>
                    <img src="https://futabus.vn/images/header/profile/Address.svg" alt="" />
                    <span className='ml-3'>Địa chỉ của bạn</span>
                </div>
            </div>


            <div className='rounded-lg px-3 py-2'>
                <div className='flex items-center p-2'>
                    <img src="	https://futabus.vn/images/header/profile/Password.svg" alt="" />
                    <span className='ml-3'>Đặt lại mật khẩu</span>
                </div>
            </div>


            <div className='rounded-lg px-3 py-2'>
                <div className='flex items-center p-2'>
                    <img src="	https://futabus.vn/images/header/profile/Logout.svg" alt="" />
                    <span className='ml-3'>Đăng xuất</span>
                </div>
            </div>

        </div>
    )
}

export default MenuAccount