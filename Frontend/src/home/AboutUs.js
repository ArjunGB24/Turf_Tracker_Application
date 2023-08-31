
import React from "react";
import roshani from "../images/roshani.jpg";
import Arjun from "../images/Arjun.jpg";
import bhushan from "../images/bhushan.jpg";
import pratik from "../images/pratik.jpg";


import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div class="container1 aboutus">
        <div class="row">
          <div class="col-md-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>

              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img src={roshani} alt="roshani" />
                  </div>
                  <div className="img-text">
                    <h2>Roshani Bhadane</h2>
                    <p>
                      Hi, I am Roshani Bhadane. I am currently pursuing PG-DAC
                      from IET, Pune.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img src={Arjun} alt="Arjun" />
                  </div>
                  <div className="img-text">
                    <h2>Arjun Bhandwalkar</h2>
                    <p>
                      Hi, I am Arjun Bhandwalkar. I am currently pursuing 
                      PG-DAC from IET, Pune.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img src={bhushan} alt="bhushan" />
                  </div>
                  <div className="img-text">
                    <h2>Bhushan More</h2>
                    <p>
                      Hi, I am Bhushan More. I am currently pursuing 
                      PG-DAC from IET, Pune.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-box">
                  <div className="img-area">
                    <img src={pratik} alt="pratik" />
                  </div>
                  <div className="img-text">
                    <h2>Pratik Thorat</h2>
                    <p>
                      Hi I am Pratik Thorat. I am currently pursuing 
                      PG-DAC from IET, Pune.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutUs;
