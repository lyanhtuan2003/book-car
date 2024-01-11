import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import ButtonRadiusCompoennt from '~/app/component/parts/button/button.component';
import { yupResolver } from '@hookform/resolvers/yup';
import { validateTicket } from '~/app/utils/validateForm';
import { css } from '@emotion/react';

const CustomerInformation = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(validateTicket)
    })
    const onSubmit = (data: any) => console.log(data)
    return (
        <div css={custommerCss} className='bg-white'>
            <div className='flex'>
                <div className='px-4 w-[50%]'>
                    <h2 className='py-3 font-semibold text-[18px]'>Thông tin khách hàng</h2>
                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div className='my-1'>
                            <Controller
                                control={control}
                                name='ticket'
                                render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
                                    <div>
                                        <span className='font-medium text-[14px]'>Họ và tên</span>
                                        <input className='' type='text' value={value} onChange={onChange} ref={ref} />
                                    </div>
                                )}
                            />
                            {errors && <span className='text-red-600'>{errors.ticket?.message}</span>}
                        </div>

                        <div className=''>
                            <Controller
                                control={control}
                                name='phoneNumber'
                                render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
                                    <div>
                                        <span className='font-medium text-[14px]'>Số điện thoại</span>
                                        <input className='' type='text' value={value} onChange={onChange} ref={ref} />
                                    </div>
                                )}
                            />
                            {errors && <span className='text-red-600'>{errors.phoneNumber?.message}</span>}
                        </div>


                        <div className='my-5'>
                            <Controller
                                control={control}
                                name='ticket'
                                render={({ field: { onChange, value, ref }, fieldState: { error } }) => (

                                    <div>
                                        <span className='font-medium text-[14px]'>Email</span>
                                        <input className='' type='text' value={value} onChange={onChange} ref={ref} />
                                    </div>
                                )}
                            />
                            {errors && <span className='text-red-600'>{errors.ticket?.message}</span>}
                        </div>
                    </form>
                </div>

                <div className='w-[45%]'>
                    <h2 className='py-3 font-semibold text-[18px] text-orange-600'>ĐIỀU KHOẢN & LƯU Ý</h2>
                    <p className='text-[14px] font-semibold'>(*) Quý khách vui lòng có mặt tại bến xuất phát của xe trước ít nhất 30 phút giờ xe khởi hành, mang theo thông báo đã thanh toán vé thành công có chứa mã vé được gửi từ hệ thống FUTA BUS LINE. Vui lòng liên hệ Trung tâm tổng đài  <span className='text-orange-600'>1900 6918</span> để được hỗ trợ.</p> <br />

                    <p className='text-[14px] font-semibold'>(*) Nếu quý khách có nhu cầu trung chuyển, vui lòng liên hệ Tổng đài trung chuyển <span className='text-orange-600'>1900 6918</span> trước khi đặt vé. Chúng tôi không đón/trung chuyển tại những điểm xe trung chuyển không thể tới được.</p>
                </div>
            </div>
            <span className='flex p-4'>
                <span> <input type="checkbox" name="" id="" /></span>

                <span className='text-orange-600 underline px-1'>Chấp nhận điều khoản </span>
                <span>đặt vé & chính sách bảo mật thông tin của FUTABusline</span>
            </span>
        </div >
    )
}

export default CustomerInformation

const custommerCss = css`
    .chair {
        box-sizing: border-box;
        border: 0 solid #e5e7eb;
        border-radius: 6px;
    }

    input {
        width: 100%;
        padding: 8px 12px;
        border-radius: 8px;
        border: 1px solid #dde2e8;
        outline: none;
    }

    
input:focus {
    border-color: orange;
    outline: none; 
}
`;