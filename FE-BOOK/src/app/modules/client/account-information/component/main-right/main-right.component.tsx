import { Upload } from 'antd'
import React from 'react'
import ButtonRadiusCompoennt from '~/app/component/parts/button/button.component'

const MainRight = () => {
    return (
        <div>
            <h2 className='font-medium text-[23px]'>Thông tin tài khoản</h2>
            <div className='text-gray-500 mt-2 text-[13px] font-normal sm:text-[15px]'>
                Quản lý thông tin hồ sơ để bảo mật tài khoản
            </div>

            <div className='mt-6 rounded-2xl border p-6'>
                <div className='flex'>
                    <div className='w-[30%]'>
                        <div className='flex justify-start sm:justify-center'>
                            <img src="https://futabus.vn/images/banners/avatar_test.svg" alt="" className='h-[100px] min-w-[100px] rounded-full object-cover sm:h-[200px] sm:w-[200px]' />
                        </div>
                        <div className='text-center mt-4'>
                            <Upload>  <button className='border border-gray-400 rounded-xl px-6 py-3'>Chọn ảnh</button></Upload>
                            <p>Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG</p>
                        </div>

                    </div>


                    <div className='px-16'>
                        <p >Họ và tên  :   <b className='px-7'>Lý Anh Tuấn</b></p>
                        <p className='py-3'>Số điện thoại :   <b className='px-2'>0323823822</b></p>
                        <p>Giới tính  :   <b className='px-7'>Nam</b></p>
                        <p className='py-3'>Email  :   <b className='px-7'>tuan@gmail.com</b></p>
                        <p>Họ và tên  :   <b className='px-7'>Invalid date</b></p>
                        <p className='py-3'>Dịa chỉ  :   <b className='px-7'>Hà nội</b></p>
                        <p>Nghề nghiệp  :   <b className='px-7'>dev</b></p>
                        <div className='text-center mt-4'>
                            <ButtonRadiusCompoennt content='Cập nhật' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainRight