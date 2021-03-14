import "./style.css";
import gambarbrand from "./logo.png";
function Brand() {
  return (
    <div className="rootbrand">
      <hr />
      <center>
        <h1>Filosofi Gorga Project</h1>
      </center>
      <hr />
      <p className="keteranganbrand">
        Apa sebenarnya arti dari Gorga Project ? Jadi kalau kita bedah kata
        perkata maka, Gorga Project terdiri dari dua suku kata yaitu Gorga dan
        Project, Gorga sendiri adalah salah satu seni ukir batak yang sangat
        indah yang melambangkan kepribadian batak yaitu Orang-orang yang berjiwa
        seni dan pantang menyerah, sedangkan Project adalah pekerjaan. Jadi
        Gorga Project berarti Pekerjaan yang Mengutamakan Seni di dalamnya. Jadi
        Tidak usah ragu untuk menggunakan jasa Fotographer maupun Videographer
        dari Gorga Project, karena kami Gorga Project akan membuat moment-moment
        berharga anda tidak terlewatkan dan akan di bingkis dengan nuansa-nuansa
        seni yang indah
      </p>
      <center>
        <div className="tombol-brand">Gunakan jasa kami</div>
        <img className="brand-gorga" src={gambarbrand} alt=""/>
      </center>
    </div>
  );
}

export default Brand;
