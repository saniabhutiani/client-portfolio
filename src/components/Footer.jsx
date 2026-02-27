export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT — BRAND */}
        <div className="footer-brand">
          <h3>Premium Decor</h3>
          <p>Reflect your style with premium interior solutions.</p>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/premium_decor_interiors/"
              target="_blank"
              rel="noopener noreferrer"
            >
              📸
            </a>

            <a
              href="https://wa.me/919877049550"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬
            </a>

            <a href="tel:+919877049550">
              📞
            </a>
          </div>
        </div>

        {/* CENTER — CONTACT */}
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>📍 Bathinda, Punjab</p>
          <p>📞 +91 9877049550</p>
          <p>✉ premiumdecor0226@gmail.com</p>
        </div>

        {/* RIGHT — WHATSAPP CTA */}
        <div className="footer-cta">
          <h4>Quick Inquiry</h4>

          <a
            href="https://wa.me/919877049550"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>

      {/* ⭐ NOW INSIDE SAME BOX */}
      <div className="footer-bottom-inside">
        © 2022 Premium Decor. All Rights Reserved.<br />

        Follow us on Instagram:
        <a
          href="https://www.instagram.com/premium_decor_interiors/"
          target="_blank"
          rel="noopener noreferrer"
          className="insta-link"
        >
          {" "}@Premium_Decor_Interiors
        </a>
      </div>

    </footer>
  );
}