import "./style.css";
import Softwarepart from "./Softwarepart";
import {Fragment} from "react";
import Gambar1 from "../Image/sofware1.png";
import Gambar2 from "./lightroo.png";
import Gambar3 from "../Image/software2.png";
function Software() {
  return (  
      <Fragment className="fragmentimage">
        <div className="image1">
            <h2 className="image2">Software yang kami gunakan</h2>
        </div>
        <div className="image3">
            <Softwarepart Jenis = "Adobe Photoshop" Ket="Terkadang foto yang sudah diambil mungkin dijadikan dengan style atau nuansa baru atau  beberapa momen indah terlewatkan, maka kami bisa menghadirkan moment itu untuk anda. Di tim kami terdapat ahli photoshop yang yang mampu menghadirkan moment itu untuk anda" Status="1" Gambar = {Gambar1}/>
            <Softwarepart Jenis = "Adobe Lightroom" Ket="Terkadang pencahayaan kurang sesuai dengan selera, tapi tidak perlu khawatir, karena pencahayaan yang sesuai akan bisa dihadirkan oleh kami untuk anda dengan Adobe Lightroom" Gambar = {Gambar2}/>
            <Softwarepart Jenis = "Wondershare Filmora" Ket="Untuk merender video kami menggunakan Wondershare Filmora 10 dan Pro. Jadi kualitas yang dihasilkan pastinya adalah kualitas yang terbaik" Status="1" Gambar = {Gambar3}/>
            
        </div>
    </Fragment>
  );
}

export default Software;