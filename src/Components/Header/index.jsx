import "./style.css";
import { Fragment } from "react"
import Gambar from "./logo.png"
import Image from "../Image";
import OurTeam from "../OurTeam";
import Footer from "../Footer";
import ImageSlider from "../ImageSlider";
import Rightslide from "../Rightslide";
import Step from "../Step";
import Software from "../Software";
function Header() {
  return (
    <Fragment>

      <div className="header1">
          <div className="header2">
            <div className="header8">
              GORGA PROJECT
            </div>
            <div className="header9">
              <span>Utama</span>
              <span>Tentang</span>
              <span>Kontak</span>
              <span>Galeri</span>
            </div>
            <div className="header10">
              <a className="tombol" href="">Gunakan jasa kami</a>
            </div>
          </div>

          <div className="header3">
            <div className="header4">
              <div className="header6">
                <span><h3>GORGA PROJECT</h3></span>
                <center><ImageSlider /></center>
              </div>
              <div className="header7">
                <Rightslide />
              </div>
            </div>
          </div>
      </div>

      <Image />

      <Step />


      <Software />


      <OurTeam />

      <Footer />

    </Fragment>
  );
}

export default Header;