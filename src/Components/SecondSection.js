import React from 'react'
import slide from '../utilities/img/hero/slide_1.png'

const details = [
    {
        icon: 'fa fa-paper-plane',
        title: 'High Delivery Rate',
        desc: 'Our SMS is reliable and quick.'
    },
    {
        icon: 'fa fa-thumbs-up',
        title: 'Affordable Cost',
        desc: 'You can send SMS as low as 99.9Kobo/sms'
    },
    {
        icon: 'fa fa-headphones',
        title: 'Customer Support',
        desc: 'We offer 24/7 customer support. Our livechat and email channels are always open.'
    },
    {
        icon: 'fa fa-undo',
        title: 'Refund Policy',
        desc: 'We have a customer friendly refund policy.'
    },
]

function SecondSection() {
    return (
        <div className='second-section'>
            <img src={slide} alt="curved" className="curved-img" />
   
            <div className="section-info">
                <h2>What to find here!</h2>
                <div className="features">
                    {
                        details.map((detail,index)=>(
                            <div className="cards" key={index}>
                                <div className="features-icon">
                                    <span><i class={detail.icon}></i></span>
                                </div>
                                <div className="features-caption">
                                    <h3>{detail.title}</h3>
                                    <p>{detail.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>          
    )
}

export default SecondSection
