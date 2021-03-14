import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import gambar1 from "./sample01.jpg";
import gambar2 from "./sample02.jpg";
import gambar3 from "./sample03.jpg";
import gambar4 from "./sample04.jpg";

export default class ImageSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true
    };
    return (
      <div className="contenslider">
        <Slider {...settings}>
          <div className="tes">
            <img className="gambar" src={gambar1} alt="" />
          </div>
          <div className="tes">
            <img className="gambar" src={gambar2} alt="" />
          </div>
          <div className="tes">
            <img className="gambar" src={gambar3} alt="" />
          </div>
          <div className="tes">
            <img className="gambar" src={gambar4} alt="" />
          </div>

        </Slider>
      </div>
    );
  }
}