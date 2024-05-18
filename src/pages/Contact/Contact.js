import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

import { showToast } from "../../components/ToastMessage";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
  const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
  const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY;

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!userName || !userEmail || !message) {
      showToast("Please fill out all fields.", "warn");
      return;
    }
    setIsSending(true);
    try {
      await emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: YOUR_PUBLIC_KEY,
      });

      showToast(
        "Thank you! I'll reach out to you via the email you provided shortly.",
        "success",
        6000
      );
      setUserName("");
      setUserEmail("");
      setMessage("");
    } catch (error) {
      showToast(
        "Error occurred. Please email to tranviquanghuy@gmail.com. I apologize for the inconvenience.",
        "error",
        10000
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-form">
      <ToastContainer />
      <h1>Contact Me!</h1>
      <form ref={form} onSubmit={sendEmail} className="form">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email..."
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <textarea
          name="message"
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
