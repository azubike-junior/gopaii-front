import React from 'react'
import styled from 'styled-components'
import logo from '../images/gologo.png'
import fb from '../images/Facebook.png'
import twit from '../images/Twitter.png'
import instagram from '../images/Instagram.png'
import youtube from '../images/Youtube.png'
import backgroundPic from '../images/headerBackground.png'
import { device } from '../utils/constant'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <Wrapper>
            <div className='footer-center'>
                <div>
                    <Link to='/'><img src={logo} alt='gofast logo' className='logo'/></Link>
                    <ul className='top-ul'>
                        <li>1st floor Sky Mall Building,</li>
                        <li>Km 46 Novojo Estate,</li>
                        <li>Farm Bus stop, Lekki - Epe</li>
                        <li> Express way, Lagos.</li> 
                        <div className='socials'>
                            <span style={{cursor:'pointer'}}><img src={fb} alt="facebook"/></span>
                            <span style={{cursor:'pointer'}}><img src={twit} alt="twitter" /></span>
                            <span style={{cursor:'pointer'}}><img src={instagram} alt="instagram" /></span>
                            <span style={{cursor:'pointer'}}><img src={youtube} alt="youtube" /></span>
                        </div>
                    </ul>
                </div>  

                <div className='infos'>
                <div className='info'>
                    <span className='each-info'>
                    <ul>
                        <li className='li-head'>Company</li>
                        <li><Link to='/about'>About us</Link></li>
                        <li><Link to='/'>Documentation</Link></li>
                    </ul>
                </span>
                 <span className='each-info'>
                    <ul>
                        <li className='li-head'>Support</li>
                          <li><Link to='/return-policy'>Private Policy</Link></li>
                            <li><Link to='/terms-condition'>Terms and condition</Link></li>
                    </ul>
                </span>
                 <span className='each-info'>
                    <ul>
                    <li className='li-head'>Contact</li>
                    <li>phone: 057588493030</li>
                    <li>Email: gofast@gmail.com</li>
                    <li>Website: gofast.com.ng</li>
                    </ul>
                </span>
                </div>
                  <ul className='nav-ul'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/return-policy'>Policies</Link></li>
                    <li><Link to='/about'>About us</Link></li>
                    <li><Link to='/'>FAQ</Link></li>
                    <li><Link to='/'>Documentation</Link></li>
                    <li><Link to='/terms-condition'>T&C</Link></li>
                </ul>
                </div>
            </div>
             <hr />
              <p className='copyright'> &copy; {new Date().getFullYear()} Gopaii, all right reserved</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: url(${backgroundPic});
    margin-top: -0.5rem;
    padding-bottom:2rem;
    
    .footer-center{
        display: flex;
        justify-content:space-between;
        align-items:center;
        margin-left:auto;
        margin-right:auto;
        width:65%;
        padding: 2rem;

        a {
            text-decoration: none;
            color: #0F2137;
        }

        .top-ul {
            li {
                text-decoration:none;
                list-style: none;
                padding-right: 1rem;
                font-family: Ubuntu;
                font-style: normal;
                text-align: left;
                padding-bottom: 0.5rem;
                color: #0F2137;
            }
        }

        .socials{
            padding-top: 2rem;
            span {
                padding-right:0.7rem;
            }
        }
        p{
            text-align: left;
            font-family: Ubuntu;
            font-style: normal;
            font-weight: 500;
            text-transform: capitalize;
            color: #0F2137;
        }
        .infos {
            margin-top: 1rem;
            .nav-ul {
                display: flex;
                justify-content: space-between;
                padding-top:1rem;

                li {
                    text-decoration:none;
                    list-style: none;
                    padding-right: 1rem;
                    font-family: Ubuntu;
                    font-style: normal;
                    font-weight: 600;
                    color: #0F2137;
                }
            }
        }

        .info {
            display: flex;
            color: #0F2137;
            
            .each-info {
                justify-content:space-between;

                ul {
                    .li-head {
                        font-size: 20px;
                        padding-bottom: 1rem;
                        font-family: Ubuntu;
                        font-style: normal;
                        font-weight: bold;
                    }
                    li {
                        text-decoration: none;
                        list-style: none;
                        text-align: left;
                        padding-bottom: 0.5rem;
                        font-family: Ubuntu;
                        font-style: normal;
                        font-weight: 500;
                        text-transform: capitalize;
                        color: #0F2137;
                    }
                }
            }
        }
       
    }

     hr {
         width: 65%;
         margin-top: -2rem;
         background: #C4C4C4;
         /* background: #293301; */
        opacity: 0.3;
     }

     .copyright{
         font-size: 10px;
     }

     @media ${device.tablet} {
        overflow-x: hidden;
        background: url(${backgroundPic});
        margin-top: -0.5rem;
        padding-bottom:2rem;
        
        .footer-center{
            display: block;
            margin-left:0;
            margin-right:0;
            width: 90%;
            padding: 2rem 0;

            .logo {
                width: 20%;
            }

            .top-ul {
                li {
                    text-decoration:none;
                    list-style: none;
                    padding-right: 1rem;
                    font-family: Ubuntu;
                    font-style: normal;
                    text-align: center;
                    font-size: 13px;
                    padding-bottom: 0.5rem;
                }
            }

            .socials{
                padding-top: 2rem;
                span {
                    padding-right:0.7rem;
                }
            }
            p{
                text-align: left;
                font-family: Ubuntu;
                font-style: normal;
                font-weight: 500;
                text-transform: capitalize;
            }
            .infos {
                margin-top: 1rem;
                .nav-ul {
                    display: flex;
                    justify-content: space-between;
                    padding-top:1rem;

                    li {
                        text-decoration:none;
                        list-style: none;
                        font-size:14px;
                        padding-right: 0rem;
                        font-family: Ubuntu;
                        font-style: normal;
                        font-weight: 600;
                    }
                }
            }

            .info {
                display: flex;
                
                .each-info {
                    justify-content:space-between;

                    ul {
                        .li-head {
                            font-size: 15px;
                            padding-bottom: 1rem;
                            font-family: Ubuntu;
                            font-style: normal;
                            font-weight: bold;
                        }
                        li {
                            text-decoration: none;
                            list-style: none;
                            text-align: left;
                            padding-bottom: 0.5rem;
                            font-family: Ubuntu;
                            font-style: normal;
                            font-weight: 500;
                            font-size:13px;
                            text-transform: none;
                        }
                    }
                }
            }
        
        }

        hr {
            width: 70%;
            margin-top: -2rem;
            background: #C4C4C4;
            /* background: #293301; */
            opacity: 0.3;
        }

        .copyright{
            font-size: 10px;
        }
     }
`