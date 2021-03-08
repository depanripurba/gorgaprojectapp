import "./style.css";
import {Fragment} from "react"
import Gambar from "./logo.png"
import Image from "../Image";
import OurTeam from "../OurTeam";
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
        </div>
      </div>
      <div className="header3">
        <div className="header4">
          <div className="header6">
            <h1>" GORGA PROJECT "</h1>
            <h2>Kami menyediakan jasa fotographer dan videographer untuk mengabadikan moment Pernikahan, Wisuda, Ulang Tahun dan lainnya</h2>
          </div>
          <div className="header7">
            <img className="gambar" src={Gambar} alt="gorgaproject"/>
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
    </Fragment> 
  );
}

export default Header;