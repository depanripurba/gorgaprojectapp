import "./style.css";
function Child({Judul, Keterangan}){
    return(
        <div className="contenchild">
            <center>
                <p className="Judul">{Judul}</p>
                <p className="Keterangan">{Keterangan}</p>
            </center>
        </div> 
    ) 
} 
export default Child;