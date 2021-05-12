import React from 'react'
import styled from 'styled-components';
import { device, features, otherFeatures } from '../utils/constant';
import smartLinkShare from '../images/Smartlink Image.png'
import safetyAndSecurity from '../images/Safety and security Image.png'
import apiIntegration from '../images/Api Integration Image.png'
import watermark from '../images/api-watermark.jpg'

export default function FeaturesBanner() {
    return (
        <Wrapper>
            <div className='features'>
                <p className='quality-f'>Quality Features</p>
                <h2 className='unique-f'>Experience Our Unique Features</h2>
                <div className='features-section'>
                    {features.map((feature, index) => (
                        <div key={index} className='feature' > 
                            <img src={feature.logo} alt="logos"/>
                            <div>
                                <h4>{feature.title}</h4>
                                <p>{feature.text}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
                    <div className='other-features'>
                        <img src={watermark} alt="" className='imgs' />
                        <div className='each-feature'>
                            <img src={smartLinkShare} alt="share smartLinks" />
                            <div className='info'>
                            <h2 className='text-left'>Generate and share your smartLink</h2>
                            <p className='text-left'>{otherFeatures.smartLinks}</p>
                            </div>
                        </div>
                        <div className='api-mobile'>
                            <img src={apiIntegration} alt="monitor transactions" />
                            <div className='info'>
                            <h2 className='text-right'>Api Integration is made available for your website</h2>
                            <p className='text-right'>{otherFeatures.apiIntegration}</p>
                            </div>
                        </div>
                        <div className='different-feature'>
                            <div className='info'>
                            <h2 className='text-right'>Api Integration is made available for your website</h2>
                            <p className='text-right'>{otherFeatures.apiIntegration}</p>
                            </div>
                            <img src={apiIntegration} className='api-img' alt="monitor transactions" />
                        </div>
                        <div className='each-feature'>
                            <img src={safetyAndSecurity} alt="monitor transactions" />
                            <div className='info' >
                                <h2 className='api-int text-left'>Safety and security of all transactions is 100% assured</h2>
                                <p className='text-left'>{otherFeatures.safetAndSecurity}</p>
                            </div>
                        </div>
                    </div>
                <div>
                
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-top:3rem;
    color: #0F2137;

    //features-style
    .features {
        display: block;
        margin-left: auto;
        margin-right: auto;

        .quality-f {
            font-family: 'Ubuntu', sans-serif;
            text-align: center;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing:0.1rem;
            color: #244886;
        }
        .unique-f {
            font-family: Ubuntu;
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 55px;
            text-align: center;
            letter-spacing: -1.5px;
            color: #0F2137;
            margin-top: -0.7rem;
        }
        .features-section {
            padding: 3rem 6rem;
            display: grid;
            grid-template-columns:350px 350px 350px;
            justify-content: space-between;
            align-items: center;
            margin-top: -2rem;

            img {
                width: 70px;
                height: 70px;
                padding-top: 2rem;
                padding-right:2rem;
            }
            
            .feature {
                display: flex;
                justify-content: space-between;

                h4 {
                    font-family: Ubuntu;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 30px;
                    text-transform: capitalize;
                    text-align: left;
                    margin-bottom: -0.2rem;
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
            }

        }

        // other-features
        .other-features{
            margin-left: auto;
            margin-right: auto;
            margin-top:2rem;
            margin-bottom:2rem;
            position: relative;

            .api-mobile {
                display:none;
            }

            .imgs {
                position: absolute;
                top: 30%;
                width: 250px;
                left: 10%;
                z-index: -1;
            }

             
            //for web structure
            .different-feature {
                 display: flex;
                justify-content: space-between;
                align-items: center;
                margin-left: auto;
                margin-right: auto;
                width:70%;
                padding:2rem;
                margin-top: 3rem;

                   img {
                        width: 400px;
                    }

                 .info {
                    margin-right:2rem;
                    margin-left:2rem;
                    width:100%;
                    z-index: 99;
                 }
                h2 {
                    font-family: Ubuntu;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 35px;
                    line-height: 55px;
                    display: flex;
                    align-items: center;
                    text-align: right;
                    letter-spacing: -1.2px;  
                }

                p{
                    line-height: 1.6;
                    font-family: Ubuntu;
                }

                .text-left {
                    text-align:left
                }
                .text-right {
                    text-align:right
                }
                
            }

            .each-feature {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            width:70%;
            padding:2rem;
            margin-top: 3rem;

            img {
                width: 400px;
            }

            .info {
                margin-right:2rem;
                margin-left:2rem;
                width:100%;
                z-index: 99;

                .api-feature{
                    position: relative;
                }

                h2 {
                    font-family: Ubuntu;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 35px;
                    line-height: 55px;
                    display: flex;
                    align-items: center;
                    text-align: right;
                    letter-spacing: -1.2px;  
                }

                p{
                    line-height: 1.6;
                    font-family: Ubuntu;
                }

                .text-left {
                    text-align:left
                }
                .text-right {
                    text-align:right
                }

                .api-int {
                    width: 120%;
                }

            }
            }
        }
    }

    //responsive style
    @media ${device.tablet} {
         .features {
            .quality-f {
                font-size: 12px;
            }
            .unique-f {
                font-size: 24px;
            }
            .features-section {
                padding: 1rem 5rem;
                display: inline-block;
                justify-content: space-between;
                align-items: center;
                margin-top:0rem;

                img {
                    width: 20%;
                    height: 40%;
                    padding-top: 2rem;
                    text-align: center;
                }
                
                .feature {
                    display: block;

                    h4 {
                        font-size: 17px;
                        margin-bottom: -0.2rem;
                        text-align: center;
                    }

                    p {
                        font-size: 14px;
                        text-align: center;
                    }
                }

            }
             .other-features{
                margin-right: 0;
                margin-top:2rem;
                position: relative;

                .different-feature {
                    display:none;
                }

                .api-mobile {
                    display: block;
                    align-items: center;
                    margin-left: auto;
                    margin-right: auto;
                    width:80%;
                    padding:2rem;
                    margin-top: 1rem;

                     img {
                        width: 50%;
                        margin-left: 2rem;
                    }

                    h2 {
                        font-family: Ubuntu;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 22px;
                        line-height: 32px;
                        display: flex;
                        align-items: center;
                        letter-spacing: -1.2px;  
                    }

                    p{
                        line-height: 1.6;
                        font-family: Ubuntu;
                        font-size: 14px;
                    }

                    .api-int {
                        width: 105%;
                    }
                }

            .imgs {
                position: absolute;
                top: 35%;
                width: 40%;;
                left: 10%;
                z-index: -1;
            }

            .each-feature {
                display: block;
                align-items: center;
                margin-left: auto;
                margin-right: auto;
                width:80%;
                padding:2rem;
                margin-top: 1rem;

                img {
                    width: 60%;
                    margin-left: 2rem;
                }

                .info {
                    z-index: 99;
                     display:block;
                    margin: 0 auto;

                    .api-feature{
                        position: relative;
                    }

                    h2 {
                        font-family: Ubuntu;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 22px;
                        line-height: 25px;
                        display: flex;
                        align-items: center;
                        letter-spacing: -1.2px;  
                    }

                    p{
                        line-height: 1.6;
                        font-family: Ubuntu;
                        font-size: 14px;
                    }

                    .api-int {
                        width: 105%;
                    }
                }
            }
        }
        }
    }

`
