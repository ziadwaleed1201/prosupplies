import { motion } from "framer-motion";
import "./SectionDivider.css";

export default function SectionDivider() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  // Dog and Cat Paw prints for decoration
  const DogPaw = ({ className, rotation = 0 }) => (
    <motion.svg
      className={className}
      style={{ rotate: rotation }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: Math.random() * 0.4 }}
      width="50"
      height="50"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="30" cy="38" rx="12" ry="10" fill="currentColor" opacity="0.15" />
      <ellipse cx="18" cy="22" rx="6" ry="8" fill="currentColor" opacity="0.15" />
      <ellipse cx="30" cy="18" rx="6" ry="8" fill="currentColor" opacity="0.15" />
      <ellipse cx="42" cy="22" rx="6" ry="8" fill="currentColor" opacity="0.15" />
      <ellipse cx="36" cy="28" rx="5" ry="7" fill="currentColor" opacity="0.15" />
    </motion.svg>
  );

  const CatPaw = ({ className, rotation = 0 }) => (
    <motion.svg
      className={className}
      style={{ rotate: rotation }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: Math.random() * 0.4 }}
      width="45"
      height="45"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="27.5" cy="35" rx="10" ry="9" fill="currentColor" opacity="0.15" />
      <ellipse cx="17" cy="21" rx="5" ry="7" fill="currentColor" opacity="0.15" />
      <ellipse cx="27" cy="17" rx="5" ry="7" fill="currentColor" opacity="0.15" />
      <ellipse cx="37" cy="21" rx="5" ry="7" fill="currentColor" opacity="0.15" />
      <ellipse cx="32" cy="27" rx="4.5" ry="6" fill="currentColor" opacity="0.15" />
    </motion.svg>
  );

  return (
    <section className="section-divider">
      {/* Decorative paw prints */}
      <DogPaw className="divider-paw paw-divider-1" rotation={-25} />
      <CatPaw className="divider-paw paw-divider-2" rotation={35} />
      <DogPaw className="divider-paw paw-divider-3" rotation={-15} />
      <CatPaw className="divider-paw paw-divider-4" rotation={20} />
      <DogPaw className="divider-paw paw-divider-5" rotation={-30} />
      <CatPaw className="divider-paw paw-divider-6" rotation={40} />

      <div className="divider-container">
        <motion.div
          className="divider-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Top line decoration */}
          <motion.div
            className="divider-line-top"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Main heading */}
          <motion.h2
            className="divider-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Ready to Collaborate?
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="divider-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let's bring premium pet supplies to your customers together.
            <br />
            Partner with Pro Supplies today.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="divider-cta"
            onClick={scrollToContact}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(212, 160, 23, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </motion.button>

          {/* Bottom line decoration */}
          <motion.div
            className="divider-line-bottom"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
      </div>

      {/* Gradient overlay for smooth transition */}
      <div className="divider-gradient-top"></div>
      <div className="divider-gradient-bottom"></div>
    </section>
  );
}
