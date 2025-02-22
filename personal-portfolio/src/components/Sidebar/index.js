import { NavLink } from 'react-router-dom';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin, faRProject} from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => (
    
    <div className='nav-bar'>
        
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#694665" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#694665" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="project-link" to="/project">
                <FontAwesomeIcon icon={faRProject} color="#694665" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#694665" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/maitreyee-d-8241ab203'>
                    <FontAwesomeIcon icon={faLinkedin} color="#694665" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/mait002'>
                    <FontAwesomeIcon icon={faGithub} color="#694665" />
                </a>
            </li>
        </ul>

    </div>
)


export default Sidebar;