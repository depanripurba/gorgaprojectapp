import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import Chilfooter from "./Chilfooter";
import "./style.css"
function Footer(){
    return(
        <div className="footer1">
        <div>
        <hr/>
        <center><h3>Salam Sukses <i>Gorga Project</i></h3></center>
        <hr/>
        </div>
            <div className="bungkusfooter">
                <div className="footer2">
                    <ul>
                        <li className="head">Kata Kunci</li>
                        <li>Gorga Project</li>
                        <li>Irwan Tabor Silitonga</li>
                        <li>Arnold Marpaung</li>
                        <li>Depanri Purba</li>
                        <li>Gery S Sidabutar</li>
                        <li>Leonardi Sidabutar</li>
                    </ul>
                </div>
                <div className="footer3">
                    <ul>
                        <li className="head">Media Sosial</li>
                        <li><AiOutlineInstagram className="icons" /> gorga_project</li>
                        <li><AiOutlineMail className="icons" /> gorgaproject@gmail.com</li>
                        <li><AiOutlineYoutube className="icons" /> gorgaproject</li>
                        <li><AiOutlineFacebook className="icons" /> gorgaproject</li>
                    </ul>
                </div>
                <div className="footer4">
                     <ul>
                        <li className="head">Tim</li>
                        <li>Irwan Tabor Silitonga</li>
                        <li>Arnold Marpaung</li>
                        <li>Depanri Purba</li>
                        <li>Gery S Sidabutar</li>
                        <li>Leonardi Sidabutar</li>
                    </ul>
                </div>
                <div className="footer4">
                     <ul>
                        <li className="head">Tentang</li>
                        <li>PKM</li>
                        <li>Kewirausahaan</li>
                        <li>STMIK Triguna Dharma</li>
                        <li>Medan</li>
                        <li>Budaya Batak</li>
                    </ul>
                </div>
            </div>
            <Chilfooter />

        </div>
    )
}

export default Footer;