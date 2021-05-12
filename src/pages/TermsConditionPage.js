import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import headerBackground from '../images/headerBackground.png'

export default function TermsConditionPage() {
    return (
        <Wrapper>
            <div className='terms-center'>
            <h1>Terms and Conditions</h1>

            <h3>Introduction</h3>
            <p>These Website Terms and Conditions (“Terms”) contained herein on this webpage is a
            legal agreement between you, as a prospective customer of Gofast International
            Projects Limited and Gopaii services (Gofast, “we”, “our” or “us”) and shall govern your
            access to and use of Gopaii services which include all pages within the Gopaii website,
            mobile applications and other products and services (collectively referred to as the
            “Services”).
           </p>
            <p> These Terms apply in full force and effect to your use of the Services and by using any
            of the Services, you expressly accept all terms and conditions contained herein in full
            and without limitation or qualification. If you do not agree to be bound by the terms and
            conditions of this Agreement, you may not use this Site or any of the Services.
            Gopaii reserves the right to amend this Agreement at any time by posting a revised
            version on this website. Except if otherwise stated, all amendments shall be effective
            thirty (40) days after publication on this Site .</p>

            <h3>Age Restriction</h3>
            <p>Our website and services are directed to people from the ages of 18 and above. You are
            only permitted to use the Services if you are aged 18 or older.
            We do not knowingly transact or provide any services to children under 18.</p>

            <h3>eligibility</h3>
            <p>Both Sellers and Buyers of products and services ("Products") can use the Service.
                Unless otherwise stated, all provisions in this Agreement apply to both Sellers and
                Buyers.
            </p> 
            <p>You agree that any information you give to us ("User Information") will stay in our
                records until termination of this Agreement, for whatever reason, in which case such
                information will be removed from our systems and/or returned to you and/or destroyed.
            </p>
            <p> You agree that we do not need additional consent to store, use and transmit data to
                third parties provided that this is strictly necessary for the performance of our customer
                support duties as agreed and as part of due diligence for detection of money laundering
                and terrorist funding and subject to any Data Protection or terms agreed herein relating
                to the confidentiality of information.
            </p>

            <h3>register</h3>
            <p>To use Gopaii, you have to create a Gopaii account by downloading the Gopaii mobile
                app and registering. To register, you will provide us with certain information such as your
                email, first name, last name, phone number, business name and Corporate Affairs
                Commission Certificate (for register business) and we may seek to verify your
                information, (by ourselves or through third parties), after which we will approve your
                account unless deemed risky. You give us permission to do all these.
            </p>

            <h3>change of information</h3>
            <p>In the event that you change any information provided to us at registration including
                your business name, address,and Corporate Affairs Commission Certificate (for
                register business), or where a corporate restructuring occurs you agree to notify us
                within 21 days of such change. We may be unable to respond to you if you contact us
                from an address, telephone number or email account that is not registered with us
            </p>

            <h3>representations and warranties</h3>
            <p>You represent and warrant to Gopaii that: </p>
            <ul className='funds-s'>
                <p>you are duly organised, authorised and in good standing under the laws of the
                    Federal Republic of Nigeria or any state, region or country of your organisation
                    and are duly authorised to do business in all other states, regions or countries
                    in which your business operates.
                </p>
                <p>
                    You maintain the value and reputation of Gopaii to the best of your ability
                </p>
                <p>
                    If you are a Seller, you have had ample opportunity to obtain legal advice
                    regarding the legal effects of this Agreement. You can deliver your full legal
                    name, street address, telephone number and email address by postal mail or
                    email to your Buyer(s) and grant Gopaii access to records of this
                    correspondence.
                </p>
            </ul>

            <h3>customer verification</h3>
            <p>
                You accept that, you are solely responsible for verifying the identities of your customers,
                ensuring that they are authorised to carry out the transactions on your platform, and
                determining their eligibility to purchase your products and services on your platform.
                You are also required to maintain information and proof of service or product delivery to
                your customer and will be required to submit these details to Gopaii when a dispute
                occurs that needs a resolution.
            </p>

            <h3>verification</h3>
            <p >
            Gopaii Users must be verified for the security of our service. We may ask our users at
            any time to become verified to comply with Anti-Money Laundering and Anti-Terrorist
            Financing Legislation. If you refuse to complete account verification, your account may
            be suspended regardless of any or all pending or unsettled transactions
            </p>

            <h3>funds settlement</h3>
            <p>You hereby agreed as follows:</p>
                <ul className='funds-s'>
                    <p>
                        That settlement of funds due to Merchants shall be wired into the Merchant wallet
                        with Gopaii
                    </p>
                    <p>
                        That such settlement shall be mature on the basis of T+5
                    </p>
                    <p>
                        That you will initial fund withdrawal from your Gopaii dashboard
                    </p>
                    <p>
                        That such funds shall be processed directly to merchant from Gopaii account.
                    </p>
                </ul>

            <p>When you receive funds in your Gopaii account, applicable transaction fees will be
            deducted for that transaction.
            Each party to this agreement is responsible for their respective expense, taxes or other
            forms of financial obligations.
            </p>

            <h3>withdrawal money</h3>
            <p>
                You have the option of withdrawing to your bank account by bank transfer. In
                compliance with Anti-Money Laundering and Anti-Terrorist Funding Legislation, certain
                limits will be imposed on withdrawals from Gopaii accounts whether verified or
                unverified.
            </p>

            <h3>return withdrawal</h3>
            <p>
                When you withdraw funds by bank transfer and the amount is returned due a closed
                account or unable to locate, you will be liable to pay a N2000 fee per incident as well as
                any other associated fees passed on by correspondent banks. Please ensure that you
                provide accurate data before initiating a bank transfer
            </p>

            <h3>account balance</h3>
            <p>
                You are not required to carry a negative balance in your Gopaii account. You may
                deposit funds at any time. However, if your Gopaii account has a negative balance, you
                agree to deposit funds into your account to cover the negative balance. If you do not,
                we reserve the right to recover the funds by any means necessary, including the
                involvement of a collections or law enforcement agency.
            </p>

            <h3>buyer protection</h3>
            <p>
                When a buyer makes a payment for any purchase of product and/or services, the fund
                is not released to the Seller until after twelve(12) days from the date of which the
                payment was made. The Buyer is expected to report any fraud within these days if there
                is any
            </p>

            <h3>seller protection</h3>
            <p>
                The Sellers are protected from unjust claims from any Buyer. If any issue is resolved in
                favour of the Seller, the buyer may be banned from using the services on VoguePay
            </p>

            <h3>refunds</h3>
            <p>
                When a buyer has filled our dispute resolution form with respect to a transaction, the
                buyer and/or the seller may be required to provide some or all of the following
            </p>
            <ul className='funds-s'>
                <p>
                    A proof of physical postage/delivery, email delivery, refund and/or replaced
                    product
                </p>
                <p>
                    A copy of the original item description.
                </p>
                <p>
                    Return/Refund Policy applicable to the buyer at the time of purchase.
                </p>
                <p>
                    Terms and conditions agreed to by the buyer prior to purchase
                </p>
            </ul>

            <h3>chargebacks</h3>
            <p>
                Any account that receives fraudulent funds or funds that have been disputed by the
                debit/credit card owner will be reversed. If you receive funds in your account from the
                debit/credit card owner's credit/debit card or bank account and the credit/debit card or
                ACH transaction is reversed, you agree to hold Gopaii harmless for the reversal fee and
                agree to reimburse Gopaii immediately by any means necessary. If Chargebacks
                exceeds 1% of transactions per month consecutively, then Gopaii can invoke its right to
                terminate this contract. Chargebacks returns and reversals may lead to immediate
                account termination and/or a penalty fee. Furthermore, in the event of a chargeback or
                reversal, any Gopaii fees (such as "receiving" fees) will not be refunded.
                In other to further cater for chargeback, Gopaii reserves the right to place rolling
                reserves on your account.
            </p>

            <h3>complaints</h3>
            <p>
                If you have any complaints about our Services,can contact us at
                support@gofast.com.ng           
            </p>
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

    .terms-center {
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
        padding-top: 2rem;
        color: #0F2137;
    }
    .funds-s {
        li {
            list-style-type:decimal;
            padding:0rem;
            font-family: Ubuntu;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 28px;
            color: #343D48;
        }
    }
    .refunds {
        li {
            padding:0rem;
            font-family: Ubuntu;
            font-style: normal;
            font-weight: normal;
            font-size: 13px;
            line-height: 28px;
            color: #343D48;
        }
    }
`