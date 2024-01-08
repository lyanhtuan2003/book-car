import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { css } from '@emotion/react';
import logo from '../../../../assets/img/logo_book_bus.png'
const HeaderComponent = () => {
    return (
        <>
            <header css={headerCss} className='bg-orange-500 h-[150px] fixed w-full z-20 top-0 left-0 '>
                <div className="header-container w-[1128px] m-auto pt-1">
                    <nav className='header__socical'>
                        <ul className='header__socical-list '>
                            <li className='header__socical-link'><Link to="/facebook"><FaFacebookSquare /></Link></li>
                            <li className='header__socical-link'><Link to="/instagram"><FaInstagramSquare /></Link></li>
                            <li className='header__socical-link'><Link to={"/linkin"}><FaLinkedin /> </Link></li>
                        </ul>
                    </nav>
                    <div className="header__logo">
                        <Link to={'/'}><img src={logo} alt="" width={80} /></Link>
                    </div>

                    <div className="header__user">
                        <button className='header__user--login btn'>Log In</button>
                        <button className='header__user--resgister btn'>Sign Up</button>
                    </div>

                </div>
                <div className='navMenu m-[auto]:'>
                    <ul className='navMenu__list'>
                        <li className='navMenu__list-link'><Link to={'/'} >Trang chủ</Link></li>
                        <li className='navMenu__list-link'><Link to={'/'}>Lịch trinh</Link></li>
                        <li className='navMenu__list-link'><Link to={'/check-ticket'}>Tra cứu vé</Link></li>
                        <li className='navMenu__list-link'><Link to={'/'}>Hóa đơn</Link></li>
                        <li className='navMenu__list-link'><Link to={'/'}>Liên hệ</Link></li>
                        <li className='navMenu__list-link'><Link to={'/'}>Về chúng tôi</Link></li>
                    </ul>
                </div>
            </header>

        </>
    )
}

export default HeaderComponent
const headerCss = css`
.header-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header__socical{
    display: inline-block;
    margin-right:100px
}
.header__socical-list{
    list-style: none;
    display: flex;
    gap: 15px;
    font-size: 16px;
    color: white;
}
.navMenu{
   margin-top:20px;
}
.navMenu__list{
    display: flex;
    justify-content: center;
    align-items: center;
}
.navMenu__list-link{
    padding: 0px 32px ;
    border-radius: 7px;
    font-weight:600;
    font-size: 1.4rem;
    color: white;
    transition: all .3s ease;
    &:hover {
        background-color: #f9a63d;
        box-shadow: inset -8px -8px 0 rgba(255 255 255 / .5), inset 8px 8px0 rgba(0, 0, 0 / .5);
        box-shadow: 0 0 10px rgba(0,0,0,.2);
    }
}
.header__logo{
    justify-self: center;
    margin-left: auto;
    margin-right: auto;
}
.btn:first-child{
    margin-right: 8px;
}
.btn{
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    border: none;
    color: #000;
    padding: 8px 16px;
    font-weight: bold;
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