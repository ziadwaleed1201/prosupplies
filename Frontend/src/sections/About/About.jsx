import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-section">
      {/* SECTION ENTRY */}
      <motion.header
        className="about-header"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <span className="about-eyebrow">ABOUT US</span>
        <h2>Pro Supplies</h2>
      </motion.header>

      {/* FANCY INTRO PARAGRAPH */}
      <motion.div
        className="about-intro-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="intro-decoration-left"></div>
        <p className="about-intro">
          We are Pro Supplies, a company specializing in import and export, with
          a primary focus on pet supplies. Founded in 2010, we brought with us
          extensive experience in logistics and supply chain management from
          the very start, which has made us a strong player in the field for
          over 15 years. We partner with well-known brands and offer a range of
          products.
        </p>
        <div className="intro-decoration-right"></div>
      </motion.div>

      {/* VISION & MISSION OVER IMAGE */}
      <div className="vision-mission-grid">
        <motion.div
          className="vm-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="vm-card-overlay"></div>
          <div className="vm-card-content">
            <h3>Vision</h3>
            <p>
              Our vision is to become the leading partner in the pet supply
              industry in the region, providing high-quality products and
              services that ensure the comfort of pets.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="vm-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="vm-card-overlay"></div>
          <div className="vm-card-content">
            <h3>Mission</h3>
            <p>
              We strive to offer a diverse and safe range of pet supplies from
              the best suppliers worldwide. Our foundation in logistics and
              supply chain expertise allows us to build strong, trust-based
              relationships with our clients, delivering quality and commitment
              in every aspect of our business.
            </p>
          </div>
        </motion.div>
      </div>

      {/* OUR SERVICES SECTION */}
      <motion.div
        className="about-intro-container services-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="intro-decoration-left"></div>
        <div className="services-content">
          <h3 className="services-title">Our Services</h3>
          <p className="about-intro">
            We provide comprehensive import and export solutions for premium pet supplies, 
            connecting international brands with regional markets. Our services include 
            end-to-end logistics management, quality assurance, supply chain optimization, 
            and dedicated customer support to ensure timely delivery of the finest pet products.
          </p>
        </div>
        <div className="intro-decoration-right"></div>
      </motion.div>
    </section>
  );
}