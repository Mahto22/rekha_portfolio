import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineWhatsapp } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_72zcsik",
        "template_kl82x6e",
        form.current,
        "9ePwARbPCPA3w1txw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"></MdOutlineMail>
            <h4>Email</h4>
            <h5>mahtorekha1995@gmail.com</h5>
            <a href="mailto:mahtorekha1995@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FiPhoneCall className="contact__option-icon"></FiPhoneCall>
            <h4>Call</h4>
            <h5>91+ 7822893815</h5>
            <a href="sms:7822893815" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineWhatsapp className="contact__option-icon"></MdOutlineWhatsapp>
            <h4>Whatapp</h4>
            <h5>91+ 9146284269</h5>
            <a
              href="https://wa.me/+919146284269" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
