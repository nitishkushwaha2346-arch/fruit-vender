import { useState } from "react";
import { ArrowRight, HelpCircle, Mail, MessageCircle, Package } from "lucide-react";
import emailjs from "@emailjs/browser";

const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setStatusType("error");
      setStatus(
        "Email delivery is not configured yet. Add the EmailJS settings to .env.local and restart the app."
      );
      return;
    }

    setIsSending(true);
    setStatus("");
    setStatusType("");

    try {
      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          from_name: name,
          reply_to: email,
          subject: subject === "order"
            ? "Order question"
            : subject === "products"
              ? "Product question"
              : "General question",
          topic: subject,
          message,
        },
        { publicKey: emailPublicKey }
      );

      setStatusType("success");
      setStatus("Thanks for reaching out. Your message has been sent.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS contact form submission failed:", error);
      setStatusType("error");
      setStatus(
        "We couldn't send your message. Please check the EmailJS service and template settings, then try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  function clearStatus() {
    setStatus("");
    setStatusType("");
  }

  return (
    <main className="contact-page">
      <section className="contact-intro">
        <p className="contact-eyebrow">
          <MessageCircle size={16} aria-hidden="true" />
          We&apos;re here to help
        </p>
        <h1>Let&apos;s talk fruit.</h1>
        <p className="contact-description">
          Have a question about our fruits or need help with your basket? Send
          us a note and tell us what you need.
        </p>

        <div className="contact-help-list">
          <div className="contact-help-item">
            <span className="contact-help-icon">
              <Package size={20} aria-hidden="true" />
            </span>
            <div>
              <h2>Order questions</h2>
              <p>Tell us what you need help with in your message.</p>
            </div>
          </div>
          <div className="contact-help-item">
            <span className="contact-help-icon">
              <HelpCircle size={20} aria-hidden="true" />
            </span>
            <div>
              <h2>Product questions</h2>
              <p>Ask us about the fruit you are looking for.</p>
            </div>
          </div>
        </div>

        <div className="contact-email-note">
          <Mail size={18} aria-hidden="true" />
          <span>Use the form and include an email address so we can identify your enquiry.</span>
        </div>
      </section>

      <section className="contact-form-card" aria-labelledby="contact-form-title">
        <div className="contact-form-heading">
          <h2 id="contact-form-title">Send us a message</h2>
          <p>Fields marked with * are required.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="contact-name">Your name *</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="e.g. Alex Morgan"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                clearStatus();
              }}
              required
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-email">Email address *</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                clearStatus();
              }}
              required
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-subject">What can we help with? *</label>
            <select
              id="contact-subject"
              name="subject"
              value={subject}
              onChange={(event) => {
                setSubject(event.target.value);
                clearStatus();
              }}
              required
            >
              <option value="" disabled>
                Choose a topic
              </option>
              <option value="order">An order</option>
              <option value="products">Our fruit</option>
              <option value="other">Something else</option>
            </select>
          </div>
          <div className="contact-field">
            <label htmlFor="contact-message">Your message *</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell us a little more..."
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
                clearStatus();
              }}
              required
            />
          </div>
          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send message"}
            {!isSending && <ArrowRight size={17} aria-hidden="true" />}
          </button>
          <p
            className={`contact-form-status${statusType ? ` ${statusType}` : ""}`}
            role="status"
            aria-live="polite"
          >
            {status}
          </p>
        </form>
      </section>
    </main>
  );
}

export default Contact;
