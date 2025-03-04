import "./contact.css";
import "./form.css";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Substitua pelo seu Service ID
        "YOUR_TEMPLATE_ID", // Substitua pelo seu Template ID
        formRef.current,
        "YOUR_USER_ID" // Substitua pelo seu User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="main-content">
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <h3 className="contact-title padd-15 ">Have You Any Questions ? </h3>
          <h4 className="contact-sub-title padd-15">
            I&apos;M AT YOUR SERVICES
          </h4>
          <div className="row row-contact">
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker-alt"></i>
              </div>
              <h4>Office</h4>
              <p> 🇵🇹 Porto, Portugal</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>felipe199892@live.com</p>
            </div>
          </div>
          <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
          <h4 className="contact-sub-title padd-15">
            I&apos;M VERY RESPONSIVE TO MESSAGES
          </h4>
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="form-row-1">
              <div className="form-item padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
              </div>
              <div className="form-item padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-row-2">
              <div className="form-item padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-row-2">
              <div className="form-item padd-15">
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <button type="submit" className="btn">
                  Send Message
                </button>
              </div>
            </div>
          </form>
          {message && <p className="message">{message}</p>}
        </div>
      </section>
    </div>
  );
};

export default Contact;
