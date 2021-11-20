import React from 'react'

const details = [
    {
        icon: 'fa fa-link',
        title:'SMS API',
        desc: 'Easily integrate our sms api to your application.'
    },
    {
        icon: 'fa fa-user',
        title:'SMS personalization',
        desc: 'You can personalize your sms to specify names of recipients.'
    },
    {
        icon: 'fa fa-users',
        title:'Referral Programs',
        desc: 'You can earn as much as you can by referring friends.'
    },
]
function UpcomingFeature() {
    return (
        <div className='upcoming'>
            <h2>Upcoming Features!</h2>

            <section className="service-area ">
                <div class="services">
                    {
                       details.map((detail,index)=>(
                        <div className="services-card" key={index}>
                            <div className="service-icon">
                                <span><i class={detail.icon}></i></span>
                            </div> 
                            <div className="service-cap">
                                <h4>{detail.title}</h4>
                                <p>{detail.desc}</p>
                            </div>
                        </div>
                       )) 
                    }
                        
                </div>
            </section>
                    
        </div>
    )
}

export default UpcomingFeature
