import './stylesheets/About.css';
import Navbar from "../components/Navbar";


// TODO: simple about the team page
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
                            Test text dadadada words go here yay!
                        </p>
                        <div className="responsive-container-block">
                            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                                <div className="team-card">
                                    <div className="img-wrapper">
                                        <img className="team-img" src="https://i.imgur.com/PtRFodz.png" />
                                    </div>
                                    <p className="text-blk name">
                                        Teammate 1
                                    </p>
                                    <p className="text-blk position">
                                        Software Developer
                                    </p>
                                    <div className="social-media-links">
                                        <a href="http://www.twitter.com/" target="_blank">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
                                        </a>
                                        <a href="http://www.facebook.com/" target="_blank">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                                        </a>
                                        <a href="http://www.instagram.com/" target="_blank">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
                                        </a>
                                        {/*target="_blank" should open the link in a new tab*/}
                                        <a href="http://www.gmail.com/" target="_blank">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                                <div className="team-card">
                                    <div className="img-wrapper">
                                        <img className="team-img" src="https://i.imgur.com/TvnNIbrh.jpg" />
                                    </div>
                                    <p className="text-blk name">
                                        Teammate 2
                                    </p>
                                    <p className="text-blk position">
                                        Software Developer
                                    </p>
                                    <div className="social-media-links">
                                        <a href="http://www.twitter.com/" target="_blank">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
                                        </a>
                                        <a href="http://www.facebook.com/" target="_blank">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                                        </a>
                                        <a href="http://www.instagram.com/" target="_blank">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
                                        </a>
                                        <a href="http://www.gmail.com/" target="_blank">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                                <div className="team-card">
                                    <div className="img-wrapper">
                                        <img className="team-img" src="https://i.imgur.com/jfqloduh.png?1" />
                                    </div>
                                    <p className="text-blk name">
                                        Teammate 3
                                    </p>
                                    <p className="text-blk position">
                                        Software Developer
                                    </p>
                                    <div className="social-media-links">
                                        <a href="http://www.twitter.com/" target="_blank">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
                                        </a>
                                        <a href="http://www.facebook.com/" target="_blank">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                                        </a>
                                        <a href="http://www.instagram.com/" target="_blank">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
                                        </a>
                                        <a href="http://www.gmail.com/" target="_blank">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                                <div className="team-card">
                                    <div className="img-wrapper">
                                        <img className="team-img" src="https://i.imgur.com/HrBZObdh.png" />
                                    </div>
                                    <p className="text-blk name">
                                        Teammate 4
                                    </p>
                                    <p className="text-blk position">
                                        Software Developer
                                    </p>
                                    <div className="social-media-links">
                                        <a href="http://www.twitter.com/" target="_blank">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg" />
                                        </a>
                                        <a href="http://www.facebook.com/" target="_blank">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg" />
                                        </a>
                                        <a href="http://www.instagram.com/" target="_blank">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg" />
                                        </a>
                                        <a href="http://www.gmail.com/" target="_blank">
                                            <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg" />
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