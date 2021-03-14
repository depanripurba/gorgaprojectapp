import "./style.css";
import ImagePart from "./ImagePart";
import { Fragment } from "react";
import Gambar1 from "./peralatan1.jpg";
import Gambar2 from "./peralatan2.jpg";
import Gambar3 from "./peralatan3.jpg";
import Gambar4 from "./peralatan4.jpg";
import Gambar5 from "./peralatan5.jpg";
import Gambar6 from "./peralatan6.jpg";
function Image() {
  return (
    <div className="imageroot">
      <div className="image1">
        <h2 className="image2">Alat yang Kami Gunakan</h2> 
      </div>
      <div className="image3">
        <ImagePart Jenis="Kamera DSLR Pro Level" Ket="Dalam pengambilan gambar Gorga Project menggunakan kamera DSLR level high-end, sehingga gambar yang dihasilkan adalah gambar-gambar dengan kualitas tinggi/HD dengan tingkat keakuratan yang tinggi serta jernih" Status="1" Gambar={Gambar1} />
        <ImagePart Jenis="Lensa Bervariasi" Ket="Selain menggunakan Kamera DSLR Pro Level, peralatan kami juga dilengkapi dengan berbagai variasi lensa mulai wide angle sampai lensa tele. Tidak lupa juga dengan lensa Fix yang punya ketajaman lebih bagus dibandingkan dengan lensa Vario" Gambar={Gambar2} />
        <ImagePart Jenis="Laptop dengan Spesifikasi Tinggi" Ket="Selain dilengkapi dengan kamera dan lensa kami juga disuport dengan laptop spesifikasi tinggi untuk proses pengeditan dan render baik itu Foto maupun Video" Status="1" Gambar={Gambar3} />
        <ImagePart Jenis="Harddisk Eksternal" Ket="Kami juga dilengkapi dengan hardisk Eksternal dengan kapasitas tinggi , jadi semua project yang kami kerjakan mempunyai history yang teratur. Jadi apabila File yang sudah kami serahkan kepada client kami bermasalah kami bisa mengirimkan ulang dengan beberapa syarat tergantung situasi dan kondisi" Gambar={Gambar4} />
        <ImagePart Jenis="Filter Lensa" Ket="Kami juga mempunyai Filter lensa kamera, jadi bagaimapun kondisi medan tempat pengambilan gambar maupun video dapat diatasi, baik itu dengan cahanya yang super hight maupun yang sangan low" Status="1" Gambar={Gambar5} />
        <ImagePart Jenis="Drone" Ket="Apabila sebuah shoot membutuhkan jangkauan yang tinggi maupun shoot dengan kategori tertentu, kami bisa menggunakan drone untuk proses pengambilang gambar maupun video" Gambar={Gambar6} />

      </div>
    </div>
  );
}

export default Image;