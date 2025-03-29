import fb from "../assets/contact/fb.svg";
import mail from "../assets/contact/mail.svg";
import phone from "../assets/contact/phone.svg";
import illustration from "../assets/contact/illustration.svg";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react";

function Contact() {
  const form = useRef();
  const inputName = useRef();
  const inputEmail = useRef();
  const inputMessage = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    var templateParams = {
      name: inputName.current.value,
      title: "TEST",
      message: inputMessage.current.value,
      email: "programming1404@gmail.com",
      from_email: inputEmail.current.value,
    };
    emailjs
      .send("service_gpd346c", "template_xwqjvnw", templateParams)
      .then(() => {
        alert(`Email successfully sent by ${templateParams.name}!`);
      });
  };

  emailjs.init({
    publicKey: "5UFnhxH-LysRxn1vd",
    blockHeadless: true,
    blockList: {
      ist: ["foo@emailjs.com", "bar@emailjs.com"],
      watchVariable: "userEmail",
    },
    limitRate: {
      id: "app",
      throttle: 10000,
    },
  });

  return (
    <>
      <div className="contact-wrapper">
        <div className="contact-container" id="contact">
          <form onSubmit={sendEmail} ref={form}>
            <h2>
              Get In
              <span> Touch</span>
            </h2>
            <p>
              If you have any inquiries or require assistance, please don't
              hesitate to get in touch.
            </p>
            <div className="input-wrapper">
              <div className="name">
                <input
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  ref={inputName}
                />
              </div>
              <div className="Email">
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  ref={inputEmail}
                />
              </div>
              <div className="message">
                <input
                  type="text"
                  placeholder="Message"
                  name="message"
                  ref={inputMessage}
                />
              </div>
            </div>
            <button type="submit" value="Send">
              Send Message
            </button>
            <ul className="contact-info">
              <li>
                <div className="phone">
                  <img src={phone} alt="" />
                  <div>
                    <div>PHONE</div>
                    <span>09750138626</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="email">
                  <img src={mail} alt="" />
                  <div>
                    <div>EMAIL</div>
                    <span>programming1404</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="facebook">
                  <a href="https://www.facebook.com/share/1DUZf4fFtL/">
                    <img src={fb} alt="" />
                  </a>
                  <div>
                    <div>FACEBOOK</div>
                    <a href="https://www.facebook.com/share/1DUZf4fFtL/">
                      <span>Jan Albert Penano</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </form>

          <picture>
            <img src={illustration} alt="" />
          </picture>
        </div>
      </div>
    </>
  );
}

export default Contact;
