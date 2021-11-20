import React from 'react'
import {Link} from 'react-router-dom'

function ReachingUs() {
    return (
        <>
        <div className='reaching-us'>
            <div className="row-contact">
                <h2>We are always reachable.</h2>
                <div className="span">
                    <Link to='/login' className="btn-reach-us">
                        Contact Us
                    </Link>
                </div>
                
            </div>
        </div>
        </>
        
    )
}

export default ReachingUs
