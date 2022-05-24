import React from 'react'

import './heroSection.css'
import ScrollArrow from '../../images/Hero-arrow-icon.svg'
import BoxOne from '../../images/box-1.svg'
import BoxTwo from '../../images/box-2.svg'
import BoxThree from '../../images/box-3.svg'
import BoxFour from '../../images/box-4.svg'

const HeroSection = () => {
    return (
        <div className="portfolio-hero-section" id="hero">
            <div className="portfolio-hero-main">
            <div className="portfolio-hero-container">
                <img src={BoxOne} className="box-1 box"/>
                <div className="vertical-text">
                <img src={BoxTwo} className="box-2 box"/>
                    <p>Front-End Developer <br/> and embeded system<br/> engineer based<br/> in Lagos, Nigeria.</p>
                    <img src={BoxThree} className="box-3 box"/>

                </div>
                <img src={BoxFour} className="box-4 box"/>
                <div className="main-text">
                    <h1>Hello<span className="red-dot">.</span><br/>I am <br/> Okiki Oriola</h1>

                </div>

            </div>
            <div className="portfolio-social-links">
                <div className="social-links">
                   <div className="social-link"> <p><a href="#">Linkedin</a></p></div>
                   <div className="social-link"> <p><a href="#">Github</a></p></div>
                   <div className="social-link">  <p><a href="#">Twitter</a></p></div>
                   <div className="social-link"> <p><a href="#">Email</a></p></div>
                </div>

            </div>
            </div>
            <div className="scroll-down-section">
                <div className="scroll-down-container">
                    <div className="scroll-down-icon">
                        <a href="#about"><img src={ScrollArrow} className="scroll-icon" alt="scroll"/></a>
                    </div>
                    <div className="scroll-down-text">
                <h1>Scroll down</h1>
                </div>
                </div>
            </div>

            
        </div>
    )
}

export default HeroSection
