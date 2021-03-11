import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import gambar from "./sample.jpg";

export default class ImageSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true
    };
    return (
      <div className="contenslider">
        <Slider {...settings}>
          <div className="tes">
            <img className="gambar" src={gambar} alt="" />
          </div>
          <div className="tes">
            <img className="gambar" src={gambar} alt="" />
          </div>
          <div className="tes">
            <img className="gambar" src={gambar} alt="" />
          </div>
          <div className="tes">
            <img className="gambar" src={gambar} alt="" />
          </div>
          <div className="tes">
            <img className="gambar" src={gambar} alt="" />
          </div>
          <div className="tes">
            <img className="gambar" src={gambar} alt="" />
          </div>

        </Slider>
      </div>
    );
  }
}