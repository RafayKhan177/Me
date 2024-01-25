import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
//email
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_l5i8a58",
      "template_dn91oge",
      form.current,
      "fchuI1TtelTzhzAji"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Now</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>me@gmail.com</h5>
            <a href="mailto:rafaykhan.mesh@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>Rafay Khan</h5>
            <a href="https://m.me/abdulrafay.khan.18041092/ ">Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" s/>
            <h4>Whatsapp</h4>
            <h5>+923034160752</h5>
            <a href="https://wa.me/message/IWCMWWSM2Q65B1">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
