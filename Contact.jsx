function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-wrapper">

        {/* LEFT SIDE - INFO */}
        <div className="contact-info" data-aos="fade-right">
          <h2>Get In Touch</h2>
          <p>
            Feel free to reach us.

We are all ears for your feedback and queries. Contact us now, and we will get back to you.
          </p>

          <div className="info-box">
            <h4>📍 Our Location</h4>
            <p>2nd Floor, Kurnool Rd, above Reliance Trends, beside SBI Main Branch, Sujatha Nagar, Ongole, Andhra Pradesh 523002, India</p>
          </div>

          <div className="info-box">
            <h4>📧 Email</h4>
            <p>info@indianrestaurant.com</p>
          </div>

          <div className="info-box">
            <h4>📞 Phone</h4>
            <p>0203 556 3404</p>
          </div>

          <div className="info-box">
            <h4>⏰ Opening Hours</h4>
            <p>Monday - Friday: 11:00 AM - 11:00 PM</p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form className="contact-form" data-aos="fade-left">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Write your message here..." required></textarea>
          <button className="btn-red">Send Message</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;