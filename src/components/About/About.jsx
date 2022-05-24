import React from 'react'
import './about.css'
import ProfilePicture from '../../images/about-picture.svg'
import CssIcon from '../../images/css-icon.svg'
import HtmlIcon from '../../images/html-icon.svg'
import JsIcon from '../../images/js-icon.svg'
import ReactIcon from '../../images/react-icon.svg'
import PythonIcon from '../../images/python-icon.svg'
import BoxOne from '../../images/box-1.svg'
import BoxTwo from '../../images/box-2.svg'
import BoxFour from '../../images/box-4.svg'


const About = () => {
    return (
        <div className="about-section" id="about">
            <div className="about-container">
                <div className="left-side">
                    <div className ="about-picture">
                        <img src={ProfilePicture} alt="profile"/>

                    </div>
                    <div className="download-cv">

                    </div>
                    <img src={BoxFour} className="about-box-4 box"/>

                </div>
                <div className="right-side">
                <img src={BoxOne} className="about-box-1 box"/>
                    <div className="right-header">
                        <h1><span className="blue-text">Abo</span>ut</h1>
                    </div>
                    <div className="about-text">
                        <p>I am a <span className="blue-text">front end developer</span>.  I create interactive experiences for amazing people using modern web technology. I am currently in my final year studying Electrical and Electronics Engineering in the University of Lagos. I aim to apply my knowledge of coding, electrical engineering, innovation and debugging to help move the industry forward.</p>

                    </div>
                    <div className="skills-part">
                        <div className="skills-header">
                            <h1><span className="blue-text">Ski</span>lls</h1>
                            
                        </div>
                        <div className="skills-list">
                            <div className="skill">
                                <img src={CssIcon} alt="skill"/>
                                <h4>CSS</h4>
                            </div>
                            <div className="skill">
                                <img src={HtmlIcon} alt="skill"/>
                                <h4>HTML</h4>
                            </div>
                            <div className="skill">
                                <img src={JsIcon} alt="skill"/>
                                <h4>JAVASCRIPT</h4>
                            </div>
                            <div className="skill">
                                <img src={ReactIcon} alt="skill"/>
                                <h4>REACT</h4>
                            </div>
                            <div className="skill">
                                <img src={PythonIcon} alt="skill"/>
                                <h4>PYTHON</h4>
                            </div>
                        </div>
                        <img src={BoxTwo} className="about-box-2 box"/>
                        
                        
                    </div>

                </div>
            </div>

            
        </div>
    )
}

export default About
