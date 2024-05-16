import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

import { showToast } from "../../components/ToastMessage";

const Contact = () => {
  const form = useRef();
  const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
  const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.elements["user_name"].value.trim();
    const userEmail = form.current.elements["user_email"].value.trim();
    const message = form.current.elements["message"].value.trim();

    if (!userName || !userEmail || !message) {
      showToast("Please fill out all fields.", "warn");
      return;
    }

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      })
      .then(
        () => {
          showToast(
            "Thank you for providing your information. Please rest assured that I will get in touch with you shortly.",
            "success",
            6000
          );
        },
        (error) => {
          showToast(
            "An error occurred, please try to send an email to tranviquanghuy@gmail.com. Sorry for this inconvenient",
            "error",
            10000
          );
        }
      );
  };

  return (
    <div className="contact-form">
      <ToastContainer />
      <h1>Contact Me!</h1>
      <form ref={form} onSubmit={sendEmail} className="form">
        <input type="text" name="user_name" placeholder="Your Name..." />
        <input type="email" name="user_email" placeholder="Your Email..." />
        <textarea name="message" placeholder="Message..." />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
