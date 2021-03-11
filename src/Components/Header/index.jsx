import "./style.css";
import { Fragment } from "react"
import Gambar from "./logo.png"
import Image from "../Image";
import OurTeam from "../OurTeam";
import Footer from "../Footer";
import ImageSlider from "../ImageSlider";
import Rightslide from "../Rightslide";
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
        </div>
        <div className="header3">
          <div className="header4">
            <div className="header6">
              <span>Contoh Hasil</span>
              <center><ImageSlider/></center>
            </div>
            <div className="header7">
              <Rightslide />
            </div>
          </div>
          <div className="header5">
            <a className="tombol" href="">Gunakan jasa kami</a>
          </div>
        </div>
      </div>
      <div>
        <Image />
      </div>
      <div>
        <OurTeam />
      </div>
      <Footer />
    </Fragment>
  );
}

export default Header;