import "./style.css"
function Teampart({Gambar,Nama,Jabatan}){
    return(
        <div className="Teampart1">
            <table className="tabel">
                <tbody>
                    <tr><td><img className="Teampart2" src={Gambar} alt=""/></td></tr>
                    <tr><td>{Nama}</td></tr>
                    <tr><td>{Jabatan}</td></tr>
                </tbody>
            </table>
        </div>
    )
}
export default Teampart;