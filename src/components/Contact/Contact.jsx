import React from 'react'

import './contact.css'
import EmailIcon from '../../images/email-icon.svg'
import PhoneIcon from '../../images/phone-icon.svg'
import LocationIcon from '../../images/portfolio-location-icon.svg'
import SendIcon from '../../images/button-icon.svg'
import BoxTwo from '../../images/box-2.svg'

const Contact = () => {
    return (
        <div className="contact-section" id="contact">
         <div className="top-contact-line">
                <div className="top-contact-right-line"></div>
            </div>
            <div className="contact-header">
                <h1><span className="blue-text">Con</span>tact</h1>
            </div>

            <div className="contact-main-container">
                <div className="get-in-touch-side">
                    <div className="get-in-touch-header">
                        <h1>Get in touch</h1>
                    </div>
                    <div className="get-in-touch-info">
                        <div className="info">
                            <img src={EmailIcon} alt="mail"/>
                            <p>okikioriola1@gmail.com</p>
                        </div>
                        <div className="info">
                            <img src={PhoneIcon} alt="mail"/>
                            <p>(+234) 708 383 3000</p>
                        </div>
                        <div className="info">
                            <img src={LocationIcon} alt="mail"/>
                            <p>Lagos, Nigeria</p>
                        </div>                                                
                    </div>
                </div>
                <div className="form-side">
                    <form className="contact-form">
                        <div className="first-row">
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="second-row">
                            <textarea placeholder="Message"></textarea>
                        </div>

                        <button className="form-button"><img src={SendIcon}/>Send</button>
                    </form>
                </div>
                <img src={BoxTwo} className="contact-box-2 box"/>

            </div>

            
        </div>
    )
}

export default Contact
