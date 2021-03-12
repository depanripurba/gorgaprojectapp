import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";
import Child from "./Child";
function Next(){
    return(
        <div>
        </div>
    );
}
class Rightslide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      vertical: true,
      autoplay:true,
      nextArrow: <Next />,
      prevArrow: <Next />,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <div className="contenrightslide">
        <h2><center>Kenapa Gorga Project</center></h2>
        <Slider {...settings}>
         <Child />
         <Child />
         <Child />
         <Child />
         <Child />
         <Child />
         <Child />
         <Child />
         <Child />
        </Slider>
      </div>
    );
  }
}
export default Rightslide;