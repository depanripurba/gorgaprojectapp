import "./style.css";
import ImagePart from "./ImagePart";
import {Fragment} from "react";
import Gambar1 from "./Gambar1.JPG";
import Gambar2 from "./Gambar2.JPG";
function Image() {
  return (
      <Fragment>
        <div className="image1">
            <h2 className="image2">Kenapa Harus Gorga Project ?</h2>
        </div>
        <div>
            <ImagePart Tulisan = "Kualitas gambar yang dihasilkan HD, baik Foto Maupun Video" Gambar = {Gambar1}/>
            <ImagePart Tulisan = "Gorga Project tidak akan melewatkan satu moment pun" Gambar = {Gambar2}/>
        </div>
    </Fragment>
  );
}

export default Image;