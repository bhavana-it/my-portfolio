import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    company: ""
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    const formEl = e.currentTarget;
    if (!(formEl instanceof HTMLFormElement)) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (formValues.company.trim()) {
      setStatus("success");
      setMessage("Thanks! Your message has been sent.");
      setFormValues({ name: "", email: "", message: "", company: "" });
      return;
    }

    const name = formValues.name.trim();
    const email = formValues.email.trim();
    const body = formValues.message.trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || name.length < 2) {
      setStatus("error");
      setMessage("Please enter your name.");
      return;
    }

    if (!emailOk) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    if (!body || body.length < 10) {
      setStatus("error");
      setMessage("Please enter a message (at least 10 characters).");
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setMessage("Contact form is not configured yet. Please email me directly.");
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      await emailjs.sendForm(serviceId, templateId, formEl, publicKey);
      formEl.reset();
      setStatus("success");
      setMessage("Thanks! Your message has been sent.");
      setFormValues({ name: "", email: "", message: "", company: "" });
    } catch (err) {
      setStatus("error");
      setMessage("Sorry, something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="reveal">
      <div className="container">
        <div className="section-title-row">
          <h3 className="section-title-decorated">Contact</h3>
        </div>
        <p className="section-subtitle">
          Hiring, consulting, or a new project — let's connect.
        </p>

        <div className="contact-grid contact-grid-single">
          <div className="contact-card">
            <form onSubmit={sendEmail} className="contact-form">
              <div className="form-group honeypot" aria-hidden="true">
                <label htmlFor="contact-company">Company</label>
                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formValues.company}
                  onChange={(e) =>
                    setFormValues((v) => ({ ...v, company: e.target.value }))
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formValues.name}
                  onChange={(e) =>
                    setFormValues((v) => ({ ...v, name: e.target.value }))
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Your Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues((v) => ({ ...v, email: e.target.value }))
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  required
                  value={formValues.message}
                  onChange={(e) =>
                    setFormValues((v) => ({ ...v, message: e.target.value }))
                  }
                />
              </div>

              <div className="contact-actions-row">
                <button type="submit" className="btn" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                <a
                  className="btn btn-outline"
                  href={`mailto:bhavanait@outlook.com?subject=${encodeURIComponent(
                    "Portfolio contact"
                  )}&body=${encodeURIComponent(
                    `Name: ${formValues.name}\nEmail: ${formValues.email}\n\n${formValues.message}`
                  )}`}
                >
                  Email Directly
                </a>
              </div>

              {status !== "idle" && (
                <div
                  className={`form-status ${status === "success" ? "success" : "error"}`}
                  role="status"
                  aria-live="polite"
                >
                  {message}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
