import React from 'react'
import './projectCard.css'

import EyeIcon from '../../images/eye-icon.svg'
import GitHubIcon from '../../images/github-icon.svg'

const ProjectCard = ({projectTitle, projectStack, projectInfo, liveLink, githubLink,id}) => {
    return (
        <div className="project-card" key={id}>
            <div className="dot">
                <div className="blue-dot"></div>

            </div>
            <div className="card-content">
                <div className="card-top-part">
                <div className="project-title">
                    <h1>{projectTitle}</h1>
                </div>
                <div className="stack">
                    <p>{projectStack}</p>
                </div>
                <div className="project-info">
                    <p>{projectInfo}</p>
                </div>
                </div>

                <div className="card-bottom-part">
                    <div className="view">
                        <a href={liveLink}><img src={EyeIcon} className="eye-icon" alt="eye"/>View</a>

                    </div>
                    <div className="github">
                        <a href={githubLink}><img src={GitHubIcon} className="git-icon" alt="git"/>Github</a>

                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default ProjectCard
