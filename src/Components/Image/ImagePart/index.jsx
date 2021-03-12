import "./style.css";
function ImagePart({ Gambar, Jenis,Ket, Status }) {
  if (Status === "1") {
    return (
      <div className="imagepart1">
        <div className="imagepart2">
          <div className="imagerpartjudul">Gorga Project</div>
          <div className="imagepartjenis">{Jenis}</div>
          <div className="imagepartkalimat">
            {Ket}
          </div>
          <div className="imageparttombol">Selengkapnya</div>
        </div>
        <div className="imagepart3">
          <img className="gambarpart" src={Gambar} alt="" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="imagepart1">
        <div className="imagepart3">
          <img className="gambarpart" src={Gambar} alt="" />
        </div>
        <div className="imagepart2">
          <div className="imagerpartjudul">Gorga Project</div>
          <div className="imagepartjenis">{Jenis}</div>
          <div className="imagepartkalimat">
           {Ket}
          </div>
          <div className="imageparttombol">Selengkapnya</div>

        </div>
      </div>
    );
  }
}

export default ImagePart;
