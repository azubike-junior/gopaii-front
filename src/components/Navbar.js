import React from 'react'
import styled from 'styled-components'
import gologo from '../images/gologo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {device} from '../utils/constant'
import { useStateContext } from '../context/stateContext'
import {Link} from 'react-router-dom'
import headerBackground from '../images/headerBackground.png'


export default function Navbar() {
    const {openSidebar} = useStateContext()
    return (
        <Wrapper>
            <div className='nav-center'>
                <Link to='/'><img src={gologo} alt='gopaii logo'/></Link>
                <div>
                    <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/return-policy'>Policies</Link></li>
                    <li><Link to='/about'>About us</Link></li>
                    <li><Link to='/'>FAQ</Link></li>
                    <li><Link to='/'>Documentation</Link></li>
                    <li><Link to='/terms-condition'>T&C</Link></li>
                    </ul>
                </div>
                 <button>Get Gopaii</button>
                <GiHamburgerMenu onClick={openSidebar} className='sidebar-btn'/>
            </div>
             <hr />
        </Wrapper>
    )
}

const Wrapper = styled.nav`
    background: url(${headerBackground});
    a {
        text-decoration: none;
        color: #0F2137;
    }
    hr {
        margin-top: -1rem;
        background: #293301;
        opacity: 0.1;
    }

    .nav-center {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        align-items: center;
    
        img {
            width: 124px;
            height: 50px;
        }

        ul {
            display: flex;
            text-decoration: none;
            padding: 0 4rem;

            li{
                text-decoration: none;
                padding: 1rem;
                list-style:none;
                font-family: 'Ubuntu', sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 15px;
                line-height: 33px;
            }
        }
        button {
            color: #fff;
            width: 115px;
            height: 40px;
            background: #293301;
            border: 1.5px solid #293301;
            box-sizing: border-box;
            border-radius: 50px;
            letter-spacing: -0.16px;
            cursor:pointer;
        }

        .sidebar-btn{
            display: none;
            color: #293301;
            font-size: 30px;
            cursor:pointer;
        }
    }

    @media ${device.tablet} {
        width:100vw;
        hr {
            margin-top:0.2rem;
            background: #293301;
            opacity: 0.1;
            }
        .nav-center {
            padding-top:1rem;
            justify-content: space-between;
            width:80%;

            ul{
                display: none;
            }
             button {
                color: #fff;
                width: 95px;
                height: 30px;
                background: #293301;
                border: 1.5px solid #293301;
                box-sizing: border-box;
                border-radius: 50px;
                letter-spacing: -0.16px;
            }

            .sidebar-btn{
                display: block;
            }
        }
   }
`
