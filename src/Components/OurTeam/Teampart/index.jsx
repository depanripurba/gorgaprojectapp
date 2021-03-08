import "./style.css"
function Teampart({Gambar,Nama,Jabatan}){
    return(
        <div className="Teampart1">
            <table className="tabel">
                <tbody>
                    <tr><td><img className="Teampart2" src={Gambar} alt=""/></td></tr>
                    <tr><td className="nama">{Nama}</td></tr>
                    <tr><td className="jabatan">{Jabatan}</td></tr>
                </tbody>
            </table>
        </div>
    )
}
export default Teampart;