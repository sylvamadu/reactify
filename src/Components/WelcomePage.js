import React,{useState} from 'react'
import hero from '../utilities/img/hero/hero_right.png'
import {Link} from 'react-router-dom'
import brandlogo from '../utilities/img/logo/logo.png'
import SecondSection from './SecondSection'
import UpcomingFeature from './UpcomingFeature'
import SuitablePlan from './SuitablePlan'
import Appstore from './Appstore'
import ReachingUs from './ReachingUs'
import SubFooter from './SubFooter'
import footerLogo from '../utilities/img/logo/logo.png'



function WelcomePage() {
    const[click, setClick] = useState(false)
    
    const styleblock ={
        'display':'block'
    }
    const stylenone ={
        'display':'none'
    }
    return (
        <div className='welcome'>
            <div className="top-cover">
                <section className="head">
                    <img src={brandlogo} alt="brand" className="brand" />
                    <div className="right-head">
                        <div className="login-register">
                            <Link to='/login'>Login</Link>
                            <Link to='/register'>Register</Link>
                        </div>
                        <span><i className="fa fa-bars" onClick={()=>setClick(!click)}></i></span>
                    </div>
                    <ul class="linkz-toggle" style={click?styleblock:stylenone}>
                        <li>Home</li>
                        <li>Feature</li>
                        <li>Services</li>
                        <li>Pricing</li>
                        <li>Pages</li>
                        <li><Link to="/login" title='login' class='login-btn'>Login</Link></li>
                    </ul>
                </section>
                <header>
                    <img src={brandlogo} alt="brand" className="brand" /> 
                    <ul class="linkz">
                        <li>Home</li>
                        <li>Feature</li>
                        <li>Services</li>
                        <li>Pricing</li>
                        <li>Pages</li>
                        <li><Link to="/login" title='login' class='login-btn'>Login</Link></li>
                    </ul>
                </header>
                <div className="first-section">
                    <div class="row">
                        <div class="col left-side">
                            <h1>Swift Bulk SMS Dispatch With Skezzole</h1>
                            <p>Solved! 99.9% SMS delivery rate</p>
                            <Link to='/login' title='Login' className='btn-btn'>
                            Get Started
                            </Link>
                        </div>
                        <div class="col">
                            <img src={hero} alt="hero" className="hero" />
                        </div>
                    </div>
                </div>
            </div>
            <SecondSection />
            <UpcomingFeature />
            <SuitablePlan />
            <Appstore />
            <ReachingUs />
            <SubFooter />
            <footer>
                <p>
                Copyright &copy; 2021 All rights reserved | powered by <img src={footerLogo} alt="" width="80"/>  template by <Link to="https://colorlib.com/" target="_blank">Colorlib</Link>
                </p>
            </footer>
            <div className='circle'>
                <span><i className="fa fa-arrow-up"></i></span>
            </div>
        </div>
    )
}

export default WelcomePage
