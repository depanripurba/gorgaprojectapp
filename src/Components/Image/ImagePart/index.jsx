import "./style.css";
function ImagePart({Gambar,Tulisan}){
    return(
        <div className="imagepart1">
            <div className="imagepart2">
                 {Tulisan}
            </div>
            <div className="imagepart3">
                
                <img className="imagepart4" src={Gambar} alt=""/>
            </div>
        </div>
    );
}

export default ImagePart;