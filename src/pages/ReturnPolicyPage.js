import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import headerBackground from '../images/headerBackground.png'

export default function ReturnPolicyPage() {
    return (
        <Wrapper>
            <div  className='return-center'>
            <h1>Our Policies</h1>

            <h3>Introduction</h3>
            <p>This privacy policy explains your privacy rights regarding Gopaii (“we”, “us” or “our”)
            collection, use, storage, sharing and protection of your personal information across our
            website, payment platforms (“APIs”), Software Applications (“Apps”) ,email newsletter,
            services and tools regardless of how you access or use them. </p>
            <p>However, this Privacy Policy does not apply to services that are not owned by Gopaii,
            including third-party websites and the services of other Gopaii merchants.
            Gopaii offers an online payment platform that makes it easy for merchants to accept
            electronic payments from customers.
            This Privacy Policy is intended to set certain standards across the operations of Gopaii.</p>

            <h3>Objectives</h3>
            <p>This Privacy Policy statement is to provide all merchants whose Personal Information
            we hold with description of the types of Personal Information we collect, the purposes
            for which we collect that Personal Information, the other parties with whom we may
            share it and the measures we take to protect the security of the data.</p>
            <p>We retain your personal data to fulfill our legal and regulatory obligations and if your
            account is closed, we reserve the right to retain and access the data for as long as
            required to comply with applicable laws.
            </p>

             <h3>Personal data</h3>
            <p>Gopaii does not sell, trade or rent personal information to anyone. However this are
                same of the ways in which Gopaii (“we”, “us” or “our”) will use the personal data
                provided us includes: to take, process or deliver your order, process or obtain payment
                or notify you of the status of your order; in connection with keys, access codes or other
                information as may be required to permit you to access our partners' sites to receive
                products, updates or services; to provide it to industry and credit related organizations
                for security, credit or fraud prevention purposes; to provide you with technical support;
                to monitor service or purchasing patterns; to manage risk and protect the site. to
                communicate to you; to provide you with service updates, announcements, and other
                product offerings; to send you, with your consent, newsletters or promotional emails or
                undertake other promotional activities; and to permit you to participate in online surveys
                and polls, assuming you voluntarily agree to provide such information in connection with
                these surveys and polls.</p> 
                <p>The personal data we receive may as well be transferred to
                other countries or regions for processing. We will undertake to obligate any person or
                entity receiving such information to process any such information in accordance with
                this Privacy policy and in accordance with applicable laws. By submitting your order
                either to our partner or to us, you consent to the use of your personal data as set forth
                above and the transfer of that data as outlined..</p>

            <h3>How we protect your information</h3>
            <p>Gopaii shall create adequate controls in order to protect the integrity and confidentiality
            of Personal Information, both in digital and physical format and to prevent Personal
            Information from being vulnerable.
            </p>
             <h3>UPDATE TO THIS PRIVACY POLICY</h3>
            <p>Gopaii may revise this privacy policy. The revised privacy policy will become effective as
                20days from the published date. In the event that the revised version includes a
                substantial change, we will provide you with 20days prior notice on our official blog at
                http://gopaii.online/blog
            </p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0rem 2rem;
    padding-top: 1rem;
    background: url(${headerBackground});
    margin-top: -1.4rem;

    .return-center {
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
        font-size: 16px;
        line-height: 30px;
        text-transform: capitalize;
        text-align: left;
        padding-top: 01rem;
        color: #0F2137;
    }
`