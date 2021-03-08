import "./style.css";
import React, {useState, useEffect} from "react";


function Chilfooter(){
    const [count,setcount] = useState('0');
    useEffect(()=>{
        setcount(new Date().getFullYear());
    })
    return(
        <div className="chilfooter1">
        <marquee behavior="" direction="">"Moment yang sama tidak akan bisa di ulang dua kali, dengan kejadian yang persis sama, jangan sampai terlewatkan moment berharga anda. Abadikan moment dengan Gorga Project"</marquee>
            <center>copyright gorgaproject &copy;{count} </center>
        </div>
    )
}
export default Chilfooter;