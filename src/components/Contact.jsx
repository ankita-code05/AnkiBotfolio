// Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css"; // Optional: style as needed

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_l957w42";
    const ownerTemplateID = "template_rokmgbi";           // Template for you (owner)
    const autoReplyTemplateID = "template_029sptz"; // Replace with actual auto-reply template ID
    const publicKey = "bdtHZrCKqGNCy_gjB";

    try {
      // 1️⃣ Send to Owner
      await emailjs.sendForm(serviceID, ownerTemplateID, formRef.current, publicKey);
      console.log("Message sent to owner!");

      // 2️⃣ Auto-reply to User
      await emailjs.sendForm(serviceID, autoReplyTemplateID, formRef.current, publicKey);
      console.log("Auto-reply sent to user!");

      setFormData({ name: "", email: "", message: "" });
      setSubmitSuccess(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-textarea"
          />
          <button type="submit" className="contact-submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {submitSuccess && <p className="success-message">Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
