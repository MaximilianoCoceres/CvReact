import React from 'react';
import {FaWhatsapp} from 'react-icons/fa';
import './whatsapp.css';


const Whatsapp = () => {
    return (
        <div >
        <a href="https://wa.me/+34634624907" target={"blank_"}>
          <FaWhatsapp className='btn whatsapp' style={{
            background:"#25D366",
            fontSize:"3rem",
            borderRadius:"50%",
            position:"relative",
            bottom:"0.5em",
            right:"0",
            marginTop:"1em"
            
        }}/>
        </a>
        
        </div>
    );
};



export default Whatsapp;
