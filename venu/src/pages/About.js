import './stylesheets/About.css';
import Navbar from "../components/Navbar";


// TODO: simple about the team page
function About() {

    return (
        <div>
          <Navbar/>
          <div className="About">

{/*General info at the top of the screen*/}
            <div class="responsive-container-block outer-container">
              <div class="responsive-container-block inner-container">
                <p class="text-blk section-head-text">
                  Meet the Team
                </p>
                <p class="text-blk section-subhead-text">
                  Test text dadadada words go here yay!
                </p>
                <div class="responsive-container-block">

{/*Teammate 1*/}
                  <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                    <div class="team-card">
                      <div class="img-wrapper">
                        <img class="team-img" src="./public/images/chill-dratini-square.jpg">
                      </div>
                      <p class="text-blk name">
                        Name 1
                      </p>
                      <p class="text-blk position">
                        Title 1
                      </p>
                      <div class="social-media-links">
                        <a href="https://github.com/jaythemself" target="_blank">
                          <img src="./public/images/icons8-github-squared-100.png">
                        </a>
                        <a href="https://www.linkedin.com/in/jayhamrick/" target="_blank">
                          <img src="./public/images/icons8-linkedin-100.png">
                        </a>
                        <a href="http://www.gmail.com/" target="_blank">
                          <img src="./public/images/icons8-gmail-logo-100.png">
                        </a>
                      </div>
                    </div>
                  </div>

{/*Teammate 2*/}
                  <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                    <div class="team-card">
                      <div class="img-wrapper">
                        <img class="team-img" src=".//public/images/chill-dratini-square.jpg">
                      </div>
                      <p class="text-blk name">
                        Name 2
                      </p>
                      <p class="text-blk position">
                        Title 2
                      </p>
                      <div class="social-media-links">
                        <a href="http://www.twitter.com/" target="_blank">
                          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg">
                        </a>
                        <a href="http://www.facebook.com/" target="_blank">
                          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg">
                        </a>
                        <a href="http://www.instagram.com/" target="_blank">
                          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg">
                        </a>
                        <a href="http://www.gmail.com/" target="_blank">
                          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg">
                        </a>
                      </div>
                    </div>
                  </div>

{/*Teammate 3*/}
                  <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                    <div class="team-card">
                      <div class="img-wrapper">
                        <img class="team-img" src=".//public/images/chill-dratini-square.jpg">
                      </div>
                      <p class="text-blk name">
                        Name 3
                      </p>
                      <p class="text-blk position">
                        Title 3
                      </p>
                      <div class="social-media-links">
                        <a href="http://www.twitter.com/" target="_blank">
                          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg">
                        </a>
                        <a href="http://www.facebook.com/" target="_blank">
                          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg">
                        </a>
                        <a href="http://www.instagram.com/" target="_blank">
                          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg">
                        </a>
                        <a href="http://www.gmail.com/" target="_blank">
                          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg">
                        </a>
                      </div>
                    </div>
                  </div>

{/*Teammate 4*/}
                  <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                    <div class="team-card">
                      <div class="img-wrapper">
                        <img class="team-img" src=".//public/images/chill-dratini-square.jpg">
                      </div>
                      <p class="text-blk name">
                        Name 4
                      </p>
                      <p class="text-blk position">
                        Title 4
                      </p>
                      <div class="social-media-links">
                        <a href="http://www.twitter.com/" target="_blank">
                          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg">
                        </a>
                        <a href="http://www.facebook.com/" target="_blank">
                          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg">
                        </a>
                        <a href="http://www.instagram.com/" target="_blank">
                          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg">
                        </a>
                        <a href="http://www.gmail.com/" target="_blank">
                          <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg">
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
