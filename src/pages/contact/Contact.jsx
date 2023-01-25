import React, {useRef} from "react";
import './contact.css';
import emailjs from '@emailjs/browser';
import Cv from '../../img/Maxi Cóceres.pdf';
import Cv2 from '../../img/Maxi Cóceres.docx';


const Contact = () => {


        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('maxi_prog', 'template_p4s5tfr', form.current, 'fD-Pj2sc2FSUPcjBu')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }



  return (
    <div className=" d-flex align-items-center justify-content-center contact">
    <div className="text col-4 p-2 m-2">
        <h1>Contact me and we'll talk</h1>
        <p>If you need to contact me to ask me a question or simply leave me your comment, please feel free to do so.</p>
        <a href={Cv} download="Maxi Cóceres Cv" title="descargar CV"> <button className="btn btn-warning btn-form" >Download CV (PDF)</button></a>
        <a href={Cv2} download="Maxi Cóceres Cv" title="descargar CV"> <button className="btn btn-warning btn-form" >Download CV (Docx)</button></a>
    </div>
      <div className="form col-8  m-3">
        <form
            ref={form}
            onSubmit={sendEmail}
          action=""
          method="POST"
          className="  ml-4"
        >
          <label className="form-label w-100 text-start">Name: </label>
          <input
          name="user_name"
            type="text"
            placeholder="Nombre"
            maxLength={20}
            className="form-control form-control-sm mb-3"
            readonly
          />
          <label className="w-100 text-start">Email: </label>
          <input
          name="user_email"
            type="text"
            placeholder="Email"
            className="form-control form-control-sm mb-3"
            readonly
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Waiting your message..."
            className="form-control"
            readonly
          ></textarea>
          <button type="submit" className="w-25 btn btn-form btn-warning mt-2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
