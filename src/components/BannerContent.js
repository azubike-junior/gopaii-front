import React from 'react'
import styled from 'styled-components'
import create from '../images/create.png'
import appStore from '../images/appStore.png'
import googlePlay from '../images/googlePlay.png'
import pci from '../images/pci.png'
import screens from '../images/Screenss.png'
import gopainfo from '../images/gopai-info.png'
import { device } from '../utils/constant'

export default function BannerContent() {
    return (
        <Wrapper>
            <div className='banner-center'>
                <div className='banner-left'>
                 <img src={create} alt="create, get paid, and manage" className='create' />
                <img src={gopainfo} alt="gopaii info" className='info'/>
                <div className='stores'>
                <img src={appStore} alt='appstore' className='app-store' />
                <img src={googlePlay} alt='googlePlay' className='google-store'/>
                </div>
                <img src={pci} alt="pci compliant" className='pci'/>
                </div>
                <img src={screens} alt="screens" className='screens'/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div` 
    margin-top:4rem;
    width:90%;

    .banner-center{
        display: flex;
        justify-content:space-between;
        align-items:center;
        margin-left:auto;
        margin-right:auto;
        width:75%;

        .create {
            width:320px;
            padding-bottom: 1rem;
        }
        .info {
            width:320px;
            margin-bottom: 2rem;
        }
        .stores {
            display: flex;
            justify-content:center;
            align-items: center;
            margin-bottom:1rem;

            .app-store{
                width:140px;
                cursor:pointer;
            }
            .google-store{
                width:170px;
                cursor: pointer;
            }
        }
        .pci {
            width:300px; 
        }

        .screens{
            width: 380px;
        }
    }
    
    @media ${device.tablet} {
        .banner-center {
            display: block;
            align-items:center;
            width:40vw;

            .create {
                width:150%;
                padding-bottom: 1rem;
            }
            .info {
                width:140%;
                margin-bottom: 1rem;
            }
            .stores {
                display: flex;
                justify-content:center;
                align-items: center;

                .app-store{
                    width:50%;
                    padding-left:2rem;
                }
                .google-store{
                    width:65%;
                }
            }
            .pci {
                width:200px; 
            }
            .screens{
                padding-top: 2rem;
                width: 150%;;
            }
        }
    }

`