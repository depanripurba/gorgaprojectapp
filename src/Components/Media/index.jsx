import "./style.css";
import Gambar1 from "./fb.svg"
import Gambar2 from "./ig.svg"
import Gambar3 from "./wa.svg"

function Media(){
    return(
        <div className="Root-media">
            <a href="https://web.facebook.com/kdprojectadmin" target="_blank"><img className="Gambar-media" src={Gambar1} alt=""/></a>
            <a href="https://www.instagram.com/gorgaprojeck/" target="_blank"><img className="Gambar-media" src={Gambar2} alt=""/></a>
            <a href="https://api.whatsapp.com/send?phone=62081310354312&text=Hallo%20Apakah%20ini%20Gorga%20Project%20" target="_blank"><img className="Gambar-media" src={Gambar3} alt=""/></a>
        </div>
    )
}

export default Media;