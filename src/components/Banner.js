import React from 'react'
import styled from 'styled-components'
import headerBackground from '../images/headerBackground.png'
import { device } from '../utils/constant'
import BannerContent from './BannerContent'
import Navbar from './Navbar'

export default function Banner() {
    return (
        <Wrapper>
            <hr />
            <BannerContent/>
        </Wrapper>
)
}

const Wrapper = styled.div`
    background: url(${headerBackground});
    height: calc(100vh - 25px);
    background-repeat:no-repeat;
    margin-bottom:1rem;

    hr {
        margin-top: -1rem;
        background: #293301;
        opacity: 0;
    }

     @media ${device.tablet} {
         margin-top: -0.5rem;
         height: 130%;
         hr {
            margin-top: 0rem;
            background: #293301;
            opacity: 0;
        }
     }
`
