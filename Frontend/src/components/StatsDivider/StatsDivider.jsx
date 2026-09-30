import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./StatsDivider.css";

const STATS = [
  { value: 500, suffix: "+", label: "Business Partners" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 9, suffix: "+", label: "Premium Brands" },
  { value: 100, suffix: "%", label: "Quality Assurance" }
];

function CountUp({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = window.performance.now();
    const duration = 1200;

    function animate(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    }

    window.requestAnimationFrame(animate);
  }, [value]);

  return (
    <span className="stat-number">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsDivider() {
  return (
    <section className="stats-divider">
      <motion.div
        className="stats-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.12
            }}
          >
            <CountUp value={stat.value} suffix={stat.suffix} />
            <span className="stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
