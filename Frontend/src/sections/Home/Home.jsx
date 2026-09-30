import { motion, useScroll, useTransform } from "framer-motion";
import "./Home.css";

const VALUES = [
  {
    icon: "✔️",
    title: "Quality First",
    text: "Only certified and proven products from trusted manufacturers."
  },
  {
    icon: "🌍",
    title: "Global Brands",
    text: "Access to a network of international industrial suppliers."
  },
  {
    icon: "🚚",
    title: "Reliable Delivery",
    text: "Efficient logistics ensuring on-time delivery every time."
  },
  {
    icon: "⚙️",
    title: "Industry Expertise",
    text: "Deep understanding of industrial and commercial requirements."
  }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  return (
    <section id="home" className="home-section">
      <div className="home-overlay" />

      {/* HERO */}
      <motion.div
        className="home-hero"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <span className="home-eyebrow">PRO SUPPLIES</span>

        <h1>
          Powering Industries
          <br />
          With Trusted Supply Solutions
        </h1>

        <p className="home-subtitle">
          We connect businesses with reliable manufacturers and high-quality
          industrial products — ensuring performance, consistency, and trust.
        </p>

        <div className="home-cta-row">
          <button
            className="primary-btn"
            onClick={() =>
              document
                .getElementById("brands")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Our Brands
          </button>

          <button
            className="secondary-btn"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Learn More
          </button>
        </div>
      </motion.div>

      {/* VALUE GRID */}
      <div className="home-values">
        {VALUES.map((item, index) => (
          <motion.div
            key={item.title}
            className="value-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
          >
            <div className="value-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
