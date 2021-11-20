import React from 'react'
import left from '../utilities/img/shape/app_btn1.png'
import right from '../utilities/img/shape/app_btn2.png'
import available from '../utilities/img/shape/available-app.png'

function Appstore() {
    return (
        <div className="appstore">
            <div className="app-left">
                <h2>Skezzole Mobile coming soon</h2>
                <div className="app-img">
                    <img src={left} alt="illustration" className="app-btn" />
                    <img src={right} alt="illustration" className="app-btn" />
                </div>
            </div>
            <div className="app-right">
            <img src={available} alt="illustration" className="available_app" />
            </div>
        </div>
    )
}

export default Appstore
