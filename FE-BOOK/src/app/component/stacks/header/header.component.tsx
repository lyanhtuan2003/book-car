import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { css } from '@emotion/react';
import logo from '../../../../assets/img/logo_book_bus.png'
import { Button } from 'antd';
import ButtonRadiusCompoennt from '../../parts/button/button.component';

const HeaderComponent = () => {
    return (
        <>
            <header css={headerCss} className=' bg-gradient-to-b from-bgHeader to-primary h-[120px] fixed w-full z-20 top-0 left-0 '>
            <div className="header-container w-[1128px] m-auto py-6">
                <div className="header__logo ">
                    <Link className='flex justify-center items-center' to="/"><img className='w-[70px]' src={logo} alt="BookBus Logo" /> <h3 className='ml-2 font-semibold text-[20px]'>LetGo5</h3></Link>
                    
                </div>
                <nav>
                <ul className='navMenu__list'>
                        <li className='navMenu__list-link hover-underline-animation underline-animation--active'><Link to={'/'} >Trang chủ</Link></li>
                        <li className='navMenu__list-link hover-underline-animation'><Link to={'/'}>Lịch trinh</Link></li>
                        <li className='navMenu__list-link hover-underline-animation'><Link to={'/check-ticket'}>Tra cứu vé</Link></li>
                        <li className='navMenu__list-link hover-underline-animation'><Link to={'/'}>Hóa đơn</Link></li>
                        <li className='navMenu__list-link hover-underline-animation'><Link to={'/'}>Liên hệ</Link></li>
                        <li className='navMenu__list-link hover-underline-animation'><Link to={'/'}>Về chúng tôi</Link></li>
                    </ul>
                </nav>
                <div className="header__user flex justify-end items-center ">
                    <div>
                        <div className="btn text-[12px]">Đăng kí/ Đăng nhập</div>
                    </div>
                </div>
            </div>   
            </header>
        </>
    )
}

export default HeaderComponent
const headerCss = css`

.header-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navMenu__list{
    display: flex;
    justify-content: center;
    align-items: center;
}
.navMenu__list-link{
    padding: 0px 22px ;
    border-radius: 7px;
    font-weight:600;
    font-size: 1rem;
    color: white;
    transition: all .3s ease;
    &:hover {
        // background-color: #f9a63d;
        // box-shadow: inset -8px -8px 0 rgba(255 255 255 / .5), inset 8px 8px0 rgba(0, 0, 0 / .5);
        // box-shadow: 0 0 10px rgba(0,0,0,.2);
    }
}
.hover-underline-animation {
    display: inline-block;
    position: relative;
  }
  
  .hover-underline-animation::after,
  .hover-underline-animation:active::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 4px;
    bottom: -10px;
    left: 0;
    background-color: #2563eb;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  
  .hover-underline-animation:hover::after,
  .hover-underline-animation:active::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  

.btn{
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    border: none;
    color: #000;
    padding: 5px 10px;
    font-weight: 600;
    border-radius: 7px;
    /*background-image: linear-gradient(to right,#ffc08b ,
        #fbaf41);*/
        background-color: white;
        transition: all .3s ease;
        &:active{
            transform: scale(.9)
            }
            &:disabled{
                opacity: .5;
                cursor: not-allowed;
                }
    
}
.header__login{

}
.header
`