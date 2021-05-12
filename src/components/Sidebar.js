import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import headerBackground from '../images/headerBackground.png'
import logo from '../images/gologo.png'
import { useStateContext } from '../context/stateContext'
import {Link} from 'react-router-dom'

function Sidebar() {
    const {isSidebarOpen, closeSidebar} = useStateContext()
    return (
        <Wrapper>
        {isSidebarOpen && (
            <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
             <div className='sidebar-center'>
                <div className='sidebar-header'>
                    <Link to='/'><img src={logo} alt="gopaii" /></Link>
                    <FaTimes className='close-btn' onClick={closeSidebar}/>
                </div>
                <hr />

                <ul>
                    <li onClick={closeSidebar}><Link to='/'>Home</Link></li>
                    <li onClick={closeSidebar}><Link to='/return-policy'>Policies</Link></li>
                    <li onClick={closeSidebar}><Link to='/about'>About us</Link></li>
                    <li onClick={closeSidebar}><Link to='/'>FAQ</Link></li>
                    <li onClick={closeSidebar}><Link to='/'>Documentation</Link></li>
                    <li onClick={closeSidebar}><Link to='/terms-condition'>T&C</Link></li>
                </ul>
                 <button>Get Gopaii</button>
            </div>
            </aside>
        )}
           
        </Wrapper>
    )
}

export default Sidebar;

const Wrapper = styled.div`
    .sidebar {
        background: url(${headerBackground});
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        transform: translate(-100%);
        z-index: -1;

        
        a {
            text-decoration: none;
            color: #0F2137;
        }
    }
   

    .show-sidebar {
        transform: translate(0);
        z-index: 999;
    }

    .sidebar-center {
        margin: 10px;
        padding: 10px 20px;
        transition: all 0.3s linear;

        .sidebar-header {
            img {
                width: 90px;
                height:50px;
            }
            display: flex;
            justify-content: space-between;

        }
        .close-btn {
            float: right;
            font-size:30px;
            padding-top: 20px;
            color: #ccc;
            background: transparent;
            border: none;
            cursor:pointer;
            transition: var(--transition);
        }

        hr{
            background: #293301;
            opacity: 0.1;
        }

        ul {
            li {
                list-style-type: none;
                padding: 5px 0;
                font-size: 15px;
                font-family: 'Ubuntu', sans-serif;
                font-style: normal;
                font-weight: bold;
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
            margin-left: 2.5rem;
        }

    }

     @media screen and (min-width: 992px) {
      display: none;
  }

`
