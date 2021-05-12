import logo1 from '../images/logo.jpg'
import logo2 from '../images/logo (2).jpg'
import logo3 from '../images/logo (5).jpg'
import logo4 from '../images/icon (2).png'
import logo5 from '../images/icon.png'
import logo6 from '../images/icon.png'

const size = {
  mobileS: '600px',
  tablet: '992px',
  laptop: '1024px',
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`
};


export const features = [
    {
        logo: logo1,
        title: 'sharable smartLink',
        text:'get a sharable smartLink that can be shared with your potential customers to enable them make payment'
    },
    {
        logo: logo2,
        title:'Api Integration',
        text:'payment links can be integrated into your websites and other platforms to enable payment for customers'
    },
    {
        logo: logo5,
        title:'Api Integration',
        text:'payment links can be integrated into your websites and other platforms to enable payment for customers'
    }
]

export const otherFeatures = 
    {
        smartLinks:'We designed Gopaii app for you with maximum simplicity. There’s no need to share your account details before you can recieve payments. From our app you simply generate a smart payment link that can be shared with your potential customers to enable them make payments. No stress, no hassle.',
        apiIntegration:'Should require our payment solution for your website platforms, we got you covered with a API Integration feature. You can easily implement our it on your website and start receiving payments from your clients without any delay and/or interruptions.',
        safetAndSecurity:'Our solution as a payment gateway has satisfied all the required levels of Security Audit and it is PCI DSS Compliant. We take security seriously therefore every payment made via our solutions are 100% secure..'
    }



