import "./contact.css";
import "./form.css";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState(""); // Estado para a mensagem do modal
  const [isSuccess, setIsSuccess] = useState(false); // Estado para definir se o modal é de sucesso ou erro

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_snz0ewa", // Substitua pelo seu Service ID
        "template_7qun848", // Substitua pelo seu Template ID
        formRef.current,
        "Sa_sDNVtd7YaA6IfL" // Substitua pelo seu User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setModalMessage("Your message was sent successfully!");
          setIsSuccess(true);
          setIsModalOpen(true);
          e.target.reset(); // Limpa o formulário
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setModalMessage("Failed to send message. Please try again later.");
          setIsSuccess(false);
          setIsModalOpen(true);
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
          <h3 className="contact-title padd-15 ">Have You Any Questions?</h3>
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

          {/* Modal de sucesso/erro */}
          {isModalOpen && (
            <div className="modal-overlay">
              <div className={`modal ${isSuccess ? "success" : "error"}`}>
                <h3>{isSuccess ? "Success!" : "Error"}</h3>
                <p>{modalMessage}</p>
                <button
                  className="btn-close"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
