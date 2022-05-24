import React from 'react'

import './footer.css'
import FooterArrow from '../../images/footer-arrow.svg'

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-container">
                <div className="footer-text-right">
                    <h4>Design by <span className="wade-text">Wade</span></h4>

                </div>
                <div className="footer-text-center">
                    <h4>&copy; 2022 Kikitech</h4>
                </div>
                <div className="arrow-up">
                    <a href="#hero"><img src={FooterArrow} className="footer-arrow"/></a>

                </div>
            </div>
            
        </div>
    )
}

export default Footer
