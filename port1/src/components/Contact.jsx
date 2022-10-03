import "./Cstyles.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h0kelap",
        "template_nsv5ajn",
        form.current,
        "ojadxuVel3ZeMiVft"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-body">
      <header>
        <div></div> Let's talk
      </header>
      <form action="" className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="fill-name">
          <p>Name</p>
          <div className="info-item">
            <input type="text" name="name" />
            <input type="text" />
          </div>
        </div>
        <div>
          email <span>*</span>
        </div>
        <input type="email" className="email" name="email" />
        <div>subject</div>
        <input type="text" className="subject" name="subject" />
        <div>
          message <span>*</span>
        </div>
        <input type="text" className="message" name="message" />
        <input value="submit" type="submit" className="btn" />
      </form>
    </div>
  );
}
