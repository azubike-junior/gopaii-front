import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import headerBackground from '../images/headerBackground.png'


export default function AboutPage() {
    return (
        <Wrapper>
            <div className='about-center'>
                <h1>Who we are</h1>
                <p>Gopaii (“we”, “us” or “our”) is an online payment gateway that makes it easy for
                    merchants to accept credit and debit card payments online from users or customers.
                    We are an independent contractor for all purposes, providing this website and our
                    services on an independent service provider basis. 
                </p>

            <div className='info'>
                <div>
                    <h3>Our mission</h3>
                    <p>Our vision is to be the world’s largest payment solution company. We want to build a platform where people can do money transfers and offer professional services without barriers.</p>
                </div>

                 <div>
                    <h3>Our vision</h3>
                    <p>Our vision is to be the world’s largest payment solution company. We want to build a platform where people can do money transfers and offer professional services without barriers.</p>
                </div>
                 <div>
                    <h3>Our values</h3>
                    <p>Our vision is to be the world’s largest payment solution company. We want to build a platform where people can do money transfers and offer professional services without barriers.</p>
                </div>
            </div>
            </div>
             <hr />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0rem 2rem;
    padding-top: 1rem;
    background: url(${headerBackground});
    margin-top: -1.4rem;

    .about-center {
        margin-left: auto;
        margin-right:auto;
        width:70%;
        padding-bottom: 2rem;
    }

    h1 {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 30px;
        text-transform: capitalize;
        text-align: left;
        padding-top: 2rem;
        color: #0F2137;
    }
    
    p {
        margin-left: auto;
        margin-right: auto;
        display: block;
        font-family: Ubuntu;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 28px;
        color: #343D48;
        text-align: left;
    }

    h3 {
        font-family: Ubuntu;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 30px;
        text-transform: capitalize;
        text-align: left;
        padding-top: 2rem;
        color: #0F2137;
    }

    @media screen and (max-width: 900px){
        .info {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
    }
`
