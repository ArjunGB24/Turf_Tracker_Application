import React from "react";
import "./LandingPage.css";
import letsplay from "../images/logo.png";
import video from "../images/project.mp4";



const LandingPage = () => {
  return (
    <>
      <section class="home-banner">
        <div class="banner-bg">
          <video
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source
              // src="https://vod-progressive.akamaized.net/exp=1664199317~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4322%2F14%2F371611850%2F1542947603.mp4~hmac=de11926946b07701ca7d2cfa364bd5db58f886a8cb1e4a83733a21a9251afcd1/vimeo-prod-skyfire-std-us/01/4322/14/371611850/1542947603.mp4"
              // src="https://www.shutterstock.com/shutterstock/videos/1063305274/preview/stock-footage-animation-of-multi-coloured-confetti-falling-over-empty-sports-stadium-competition-victory.webm"
                  // src="https://www.shutterstock.com/shutterstock/videos/1057447372/preview/stock-footage-sport-stadium-video-background-with-asphalt-surface-playground-flashing-lights-and-cheering-crowd.webm"
              // src="https://www.playspots.in/wp-content/themes/playspots/assets/videos/beach-soccer.mp4"
                  
              type="video/mp4"
            ></source>
          </video>
          <div class="container-fluid h-100">
            <div class="row h-100 d-flex align-items-center">
              <div class="col-md-6 d-md-none">
                <div class="banner-img-wrap">
                  <img
                    src="https://www.playspots.in/wp-content/themes/playspots/assets/images/phone2.png"
                    class="img-fluid left-img"
                    alt=""
                  />
                  <img
                    src="https://www.playspots.in/wp-content/themes/playspots/assets/images/phone1.png"
                    class="img-fluid right-img"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="banner-caption-wrap">
                  <h1 class="tlt">
                    <br />
                    <br />
                  </h1>
                  {/* <img class="logo" src={letsplay}></img> */}

                  <h1 class="tlt">
                    <b><i>Welcome</i></b>
                    <br />
                    <b><i>To</i></b>
                    <br />
                    <b><i> KRIDANGAN </i></b>
                  </h1>
                  <h2></h2>
                  <div class="banner-btns">
                    <a href="/Login" class="btn trans-btn"  >
                      <b>To Book Venue</b>
                    </a>

                     <a href="/register" class="btn trans-btn">
                      <b>To Get Listed</b>
                    </a> 
                  </div>
                </div>
              </div>

              <div class="col-md-6 d-none d-md-block">
                <div class="banner-img-wrap">
                  <img
                   //src="https://pngimg.com/uploads/cricket/cricket_PNG126.png"
                     //src="https://www.playspots.in/wp-content/themes/playspots/assets/images/phone2.png"
                    class="img-fluid left-img"
                    alt=""
                  />
                  <img
                    //src="http://pngimg.com/uploads/football_player/small/football_player_PNG4.png"
                     // src="http://pngimg.com/uploads/cricket/cricket_PNG105.png"

                    //src="https://www.playspots.in/wp-content/themes/playspots/assets/images/phone1.png"
                    class="img-fluid right-img"
                    alt=""
                  />
                </div> 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ***************** */}

      <section class="app-features-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              <div class="feature-wrap wow animated fadeIn slow">
                <img
                  src="https://www.playspots.in/wp-content/uploads/2020/02/search.png"
                  class="img-fluid wow animated bounceIn slower"
                  alt="Playspots"
                />
                <h4 class="wow animated fadeInUp slow">Search</h4>
                <div class="content">
                  <p>
                    Are you looking to play after work, organize your Sunday
                    Five's football match? Explore the largest network of sports
                    facilities whole over the India
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-wrap wow animated fadeIn slow">
                <img
                  src="https://www.playspots.in/wp-content/uploads/2020/02/book.png"
                  class="img-fluid wow animated bounceIn slower"
                  alt="Playspots"
                />
                <h4 class="wow animated fadeInUp slow">Book</h4>
                <div class="content">
                  <p>
                    Once you’ve found the perfect ground, court or gym, Connect
                    with the venue through the Book Now Button to make online
                    booking & secure easier payment
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature-wrap wow animated fadeIn slow">
                <img
                  src="https://www.playspots.in/wp-content/uploads/2020/02/play.png"
                  class="img-fluid wow animated bounceIn slower"
                  alt="Playspots"
                />
                <h4 class="wow animated fadeInUp slow">Play</h4>
                <div class="content">
                  <p>
                    You’re the hero, you’ve found a stunning turf or court,
                    booked with ease and now its time to play. The scene is set
                    for your epic match.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
