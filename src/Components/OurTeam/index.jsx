import Gambar1 from "./2018020880.jpg"
import Gambar2 from "./2018020403.jpg"
import Gambar3 from "./2018020777.jpg"
import Gambar4 from "./2018020516.jpg"
import Gambar5 from "./2018020817.jpg"
import Teampart from "./Teampart";
import "./style.css"
function OurTeam() {
    return (
        <div className="ourteam1">
            <h1 className="ourteam2">Tim Kami</h1>
            <div className="ourteam3">
                <Teampart Gambar={Gambar1} Nama="Irwan Tabor Silitonga" Jabatan="Ketua Tim" />
                <Teampart Gambar={Gambar2} Nama="Arnold Marpaung" Jabatan="Wakil Ketua" />
                <Teampart Gambar={Gambar3} Nama="Depanri Purba" Jabatan="Sekretaris1" />
                <Teampart Gambar={Gambar4} Nama="Irwan Tabor Silitonga" Jabatan="Sekretaris2" />
                <Teampart Gambar={Gambar5} Nama="Irwan Tabor Silitonga" Jabatan="Bendahara" />
            </div>
        </div>
    )

}

export default OurTeam;