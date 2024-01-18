import './stylesheets/About.css';
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';


function About() {

    return (
        <div>
            <Navbar/>
            <div className="about-team">
                <div className="responsive-container-block outer-container">
                    <div className="responsive-container-block inner-container">
                        <p className="text-blk section-head-text">
                            Meet the Team
                        </p>
                        <p className="text-blk section-subhead-text">
                            VENU is the capstone project of LaunchCode graduates Keyona, Jay, Andrew, and Mal. It was made over the course of six weeks and provided ample opportunity to practice skills new and old.
                        </p>
                        <div className="responsive-container-block">

                        {/* Teammate Card 1*/}
                            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                                <div className="team-card">
                                    <div className="img-wrapper">
                                        <img className="team-img" src="https://i.imgur.com/j6MnzN1.jpg" />
                                    </div>
                                    <p className="text-blk name">
                                        Keyona Damm
                                    </p>
                                    <p className="text-blk position">
                                        Software Developer
                                    </p>
                                    <div className="social-media-links">
                                        <a href="http://www.github.com/" target="_blank">
                                            <FontAwesomeIcon icon={faGithub} className="github-icon" />
                                        </a>
                                        <a href="http://www.linkedin.com/" target="_blank">
                                            <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                                        </a>
                                        {/*target="_blank" should open the link in a new tab*/}
                                        <a href="http://www.gmail.com/" target="_blank">
                                            <FontAwesomeIcon icon={faGoogle} className="gmail-icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        {/* Teammate Card 2 */}
                            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                                <div className="team-card">
                                    <div className="img-wrapper">
                                        <img className="team-img" src="https://i.imgur.com/PTHvlN9.jpg" />
                                    </div>
                                    <p className="text-blk name">
                                        Jay Hamrick
                                    </p>
                                    <p className="text-blk position">
                                        Software Developer
                                    </p>
                                    <div className="social-media-links">
                                        <a href="http://www.github.com/jaythemself" target="_blank">
                                            <FontAwesomeIcon icon={faGithub} className="github-icon" />
                                        </a>
                                        <a href="http://www.linkedin.com/in/jayhamrick" target="_blank">
                                            <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                                        </a>
                                        <a href="http://www.gmail.com/" target="_blank">
                                            <FontAwesomeIcon icon={faGoogle} className="gmail-icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        {/* Teammate Card 3 */}
                            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                                <div className="team-card">
                                    <div className="img-wrapper">
                                        <img className="team-img" src="https://i.imgur.com/Vt7r4N5.png" />
                                    </div>
                                    <p className="text-blk name">
                                        Andrew Bond
                                    </p>
                                    <p className="text-blk position">
                                        Software Developer
                                    </p>
                                    <div className="social-media-links">
                                        <a href="http://www.github.com/" target="_blank">
                                           <FontAwesomeIcon icon={faGithub} className="github-icon" />
                                        </a>
                                        <a href="http://www.linkedin.com/" target="_blank">
                                            <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                                        </a>
                                        <a href="http://www.gmail.com/" target="_blank">
                                            <FontAwesomeIcon icon={faGoogle} className="gmail-icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        {/* Teammate Card 4 */}
                            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                                <div className="team-card">
                                    <div className="img-wrapper">
                                        <img className="team-img" src="https://i.imgur.com/dX2J9Gx.png" />
                                    </div>
                                    <p className="text-blk name">
                                        Mal Durham
                                    </p>
                                    <p className="text-blk position">
                                        Software Developer
                                    </p>
                                    <div className="social-media-links">
                                        <a href="http://www.github.com/" target="_blank">
                                            <FontAwesomeIcon icon={faGithub} className="github-icon" />
                                        </a>
                                        <a href="http://www.linkedin.com/" target="_blank">
                                            <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
                                        </a>
                                        <a href="http://www.gmail.com/" target="_blank">
                                            <FontAwesomeIcon icon={faGoogle} className="gmail-icon" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;