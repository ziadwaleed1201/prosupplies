import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device is mobile
    const checkMobile = () => {
      // eslint-disable-next-line no-undef
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Dog Paw print SVG component (4 toes)
  const DogPaw = ({ className, rotation = 0 }) => (
    <motion.svg
      className={className}
      style={{ rotate: rotation }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main pad */}
      <ellipse cx="30" cy="38" rx="12" ry="10" fill="currentColor" opacity="0.2" />
      {/* 4 Toes (dog paw) */}
      <ellipse cx="18" cy="22" rx="6" ry="8" fill="currentColor" opacity="0.2" />
      <ellipse cx="30" cy="18" rx="6" ry="8" fill="currentColor" opacity="0.2" />
      <ellipse cx="42" cy="22" rx="6" ry="8" fill="currentColor" opacity="0.2" />
      <ellipse cx="36" cy="28" rx="5" ry="7" fill="currentColor" opacity="0.2" />
    </motion.svg>
  );

  // Cat Paw print SVG component (different shape, more oval)
  const CatPaw = ({ className, rotation = 0 }) => (
    <motion.svg
      className={className}
      style={{ rotate: rotation }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main pad (more oval for cat) */}
      <ellipse cx="27.5" cy="35" rx="10" ry="9" fill="currentColor" opacity="0.2" />
      {/* 4 small toes (cat paw) */}
      <ellipse cx="17" cy="21" rx="5" ry="7" fill="currentColor" opacity="0.2" />
      <ellipse cx="27" cy="17" rx="5" ry="7" fill="currentColor" opacity="0.2" />
      <ellipse cx="37" cy="21" rx="5" ry="7" fill="currentColor" opacity="0.2" />
      <ellipse cx="32" cy="27" rx="4.5" ry="6" fill="currentColor" opacity="0.2" />
    </motion.svg>
  );

  return (
    <section id="contact" className="contact-section">
      {/* Decorative paw prints - mix of dog and cat paws */}
      <DogPaw className="paw-decoration paw-1" rotation={-15} />
      <CatPaw className="paw-decoration paw-2" rotation={25} />
      <DogPaw className="paw-decoration paw-3" rotation={-35} />
      <CatPaw className="paw-decoration paw-4" rotation={45} />
      <DogPaw className="paw-decoration paw-5" rotation={-20} />
      <CatPaw className="paw-decoration paw-6" rotation={30} />

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* HEADER */}
        <div className="contact-header">
          <motion.span
            className="contact-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            GET IN TOUCH
          </motion.span>
          <motion.div
            className="contact-title-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Dog paws around "Contact Us" title */}
            <DogPaw className="title-paw title-paw-left" rotation={-25} />
            <h2>Contact Us</h2>
            <DogPaw className="title-paw title-paw-right" rotation={25} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We'd love to hear from you. Reach out for partnerships, inquiries, or just to say hello.
          </motion.p>
        </div>

        {/* INFO GRID */}
        <div className="contact-info-grid">
          {/* EMAIL CARD */}
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="contact-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h4>Email</h4>
            <p>info@prosuppplies.com</p>
          </motion.div>

          {/* PHONE CARD */}
          <motion.a
            href={isMobile ? "tel:+20000000000" : undefined}
            className={`contact-card ${isMobile ? "clickable" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="contact-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h4>Phone</h4>
            <p>+20 000 000 0000</p>
            {isMobile && <span className="tap-to-call">Tap to call</span>}
          </motion.a>

          {/* LOCATION CARD */}
          <motion.a
            href="https://www.google.com/maps/search/?api=1&query=Cairo,Egypt"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card clickable"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="contact-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h4>Location</h4>
            <p>
              Cairo, Egypt<br />
              Serving the region
            </p>
            <span className="tap-to-call">View on map</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
