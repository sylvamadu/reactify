import React from 'react'
import {Link} from 'react-router-dom'
import bg from '../utilities/img/gallery/best_pricingbg.jpg'

const details =[
    {
        title:'Bronze',
        price:'3',
        textOne:'1,000 to 5,000 units',
        textTwo:'E-mail support',
        textThree:'10 Free Optimization',
        textFour:'Work hours support  window'
    },
    {
        title:'Silver',
        price:`2.5`,
        textOne:'5,001 t0 10,000 units',
        textTwo:'E-mail support',
        textThree:'10 Free Optimization',
        textFour:'24/7 support'
    },
    {
        title:'Gold',
        price:'2',
        textOne:'Above 10,000 units',
        textTwo:'E-mail support',
        textThree:'10 Free Optimization',
        textFour:'24/7 support'
    },
]
const stylebg={
    'backgroundImage':`url(${bg})`,
    'width': '100%',
    'height': '600px'
}
function SuitablePlan() {
    return (
        <div className="suitable-plans">
            <div className="bg-layout" style={stylebg}>
                <div className="layout">
                    <h2>Choose Your Suitable Plan</h2>
                </div>
            </div>
            <div className="plan-cards">
                {
                    details.map((detail,index)=>(
                    <div class="single-card" key={index}>
                        <div class="card-top">
                            <span>{detail.title}</span>
                            <h4> &#x20A6;{detail.price} <span>/ unit</span></h4>
                        </div>
                        <hr className="line" />
                        <div class="card-bottom">
                            <ul>
                                <li>{detail.textOne}</li>
                                <li>{detail.textTwo}</li>
                                <li>{detail.textThree}</li>
                                <li>{detail.textFour}</li>
                            </ul>
                            <Link to="/login" class="btn-card">Get Started</Link>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SuitablePlan
