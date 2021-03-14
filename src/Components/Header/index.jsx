import "./style.css";
import { Fragment } from "react";
import { GoChevronDown } from "react-icons/go"
import Gambar from "./logo.png";
import Image from "../Image";
import OurTeam from "../OurTeam";
import Footer from "../Footer";
import ImageSlider from "../ImageSlider";
import Rightslide from "../Rightslide";
import Step from "../Step";
import Software from "../Software";
import Brand from "../Brand";
import Kemampuan from "../Kemampuan";
import Media from "../Media";
// import Diskon from "../Diskon";
function Header() {
  return (
    <Fragment>
      <div className="header1">
        <div className="header2">
          <div className="header8">GORGA PROJECT</div>
          <div className="header9">
            <span className="sub-menu">Utama</span>
            <span className="sub-menu">
              Tentang <GoChevronDown className="dop-down" />
              <div className="header-menu">
                <span>Irwan Tabor Silitonga</span>
                <span>Arnold Marpaung</span>
                <span>Depanri purba</span>
                <span>Gery Sidabutar</span>
                <span>Leonardi Sidabutar</span>
              </div>
            </span>
            <span className="sub-menu">Kontak<GoChevronDown className="dop-down" />
            <div className="header-menu">
                <span><a className="header-kontak" href="https://web.facebook.com/kdprojectadmin" target="_blank">Facebook</a></span>
                <span><a className="header-kontak" href="https://www.instagram.com/gorgaprojeck/" target="_blank">Instagram</a></span>
                <span><a className="header-kontak" href="https://api.whatsapp.com/send?phone=62081310354312&text=Hallo%20Apakah%20ini%20Gorga%20Project%20?" target="_blank">Whatsapp</a></span>
                
              </div>
            </span>
            <span className="sub-menu">Galeri</span>
          </div>
          <div className="header10">
            <a className="tombol" href="">
              Gunakan jasa kami
            </a>
          </div>
        </div>

        <div className="header3">
          <div className="header4">
            <div className="header6">
              <p className="judul-header">Gorga Project</p>
              <center>
                <ImageSlider />
              </center>
            </div>
            <div className="header7">
              <Rightslide />
              <Kemampuan />
            </div>
          </div>
        </div>
      </div>
      <Image />
      <Step />
      <Software />
      <Brand />
      <OurTeam />
      <Footer />
      <Media />
      {/* <Diskon /> */}
    </Fragment>
  );
}

export default Header;
