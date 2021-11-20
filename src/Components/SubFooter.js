import React,{useState} from 'react'
import footerLogo from '../utilities/img/logo/logo.png'
import sendimg from '../utilities/img/shape/form_icon.png'
function SubFooter() {
    const[email, setEmail] = useState('')
    return (
        <div className='subfooter'>
            <div className="footer-collect">
                <div className="inner-footer">
                    <img src={footerLogo} alt="footer" className="logo-footer" />
                    <p>Skezzole is your present day <br />solution for sms "wahala".</p>
                </div> 

                <div className="last-footer">
                    
                    <div className="row-footer">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>About</li>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Download</li>
                            <li>Reviews</li>
                        </ul>
                    </div>
                    <div className="row-footer">
                        <h4>Support</h4>
                        <ul>
                            <li>Report a bug</li>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            <li>Sitemap</li>
                            <li>FAQS</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
                
        
            <div className="contact-form">
                <h4>Newsletter</h4>
                <p>No Spam, just one mail per week. </p>
                <form action="" className='form-contact'>
                    <div className="input-group-contact">
                        <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <img src={sendimg} alt="send" class='send'/>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default SubFooter
