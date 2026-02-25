import { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;

    const text = `
Premium Decor Interiors – New Client Inquiry

Client Details:
Name: ${name}
Phone: ${phone}
Email: ${email}

Project Requirement:
${message}

━━━━━━━━━━━━━━━━━━━━
Website Contact Form:
https://yourwebsite.com/#contact
━━━━━━━━━━━━━━━━━━━━

Kindly review and respond to the client at the earliest.
`;

    const ownerNumber = "919877049550"; // ❗ no spaces

    const url = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    alert("Thank you for contacting Premium Decor Interiors. Our team will contact you shortly.");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="contact-section">

      <h2>Contact Us</h2>

      {/* ⭐ PREMIUM CARD */}
      <form className="contact-box" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Your Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Your Message</label>
          <textarea
            rows="5"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-btn">
          Send Message
        </button>

      </form>

    </section>
  );
}