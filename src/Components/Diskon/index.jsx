import "./style.css";
import React from 'react';
class Diskon extends React.Component {
    constructor() {
      super();
      // membuat objek state
      this.state = {
        nama: "Belajar Reactjs",
        tes: "Panduan step-by-step Reactjs untuk pemula"
      };
    }
    componentDidMount(){
        this.setState({
            nama: "depanri purba"
        })
        console.log('hai nama saya depanri purba saya sangat lapar')
    }
  
    closeMenu = () => {
        const Close = document.querySelector(".Root-diskon");
        Close.style.display = "none"
    }
  
    render() {
      return (
        <div className="Root-diskon">
          <span>Selamat datang di halaman yang saya bangun dengan react js</span>
          <span className="Tombol-close" onClick={this.closeMenu}>Close</span>
        </div>
      );
    }
  }

  export default Diskon;
  