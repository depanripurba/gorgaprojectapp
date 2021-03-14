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
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      autoplay:true,
      nextArrow: <Next />,
      prevArrow: <Next />,
      verticalSwiping: true,
     
    };
    return (
      <div className="contenrightslide"> 
        <Slider {...settings}>
         <Child Judul="Gambar Resolusi Tinggi" Keterangan="Gambar hasil pemotretan adalah gambar dengan resolusi yang tinggi, karena dilengkapi dengan peralatan-peralatan yang memadai"/>
         <Child Judul="Kami Menggunakan Drone" Keterangan="Pengambilan gambar menggunakan Drone adalah pengambilan gambar yang sangat jarang, namun kami melakukannya untuk anda"/>
         <Child Judul="Biaya Terjangkau" Keterangan="Untuk mengabadikan moment dengan kualitas yang bagus tentu saja membutuhkan biaya yang banyak , namun kami mengabadikan moment anda dengan biaya yang terjangkau"/>
        </Slider>
      </div>
    );
  }
}
export default Rightslide;