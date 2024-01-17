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
                                        <img className="team-img" src="https://i.imgur.com/j6MnzN1.jpg" />
                                    </div>
                                    <p className="text-blk name">
                                        Keyona Damm
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
                                        <img className="team-img" src="https://i.imgur.com/PTHvlN9.jpg" />
                                    </div>
                                    <p className="text-blk name">
                                        Jay Hamrick
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
                                        <img className="team-img" src="https://i.imgur.com/Vt7r4N5.png" />
                                    </div>
                                    <p className="text-blk name">
                                        Andrew Bond
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
                                        <img className="team-img" src="https://i.imgur.com/dX2J9Gx.png" />
                                    </div>
                                    <p className="text-blk name">
                                        Mal Durham
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