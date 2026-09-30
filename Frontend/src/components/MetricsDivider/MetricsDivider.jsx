import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./MetricsDivider.css";

/* COUNT UP COMPONENT */
function CountUp({ to, duration = 1400 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startTime = null;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * to));

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    }

    window.requestAnimationFrame(animate);
  }, [to, duration]);

  return value;
}

export default function MetricDivider() {
  return (
    <section className="metric-divider">
      <motion.div
        className="metric-divider-inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* FOUNDED */}
        <div className="metric-founded">
          <span>Founded</span>
          <strong>
            <CountUp to={2010} />
          </strong>
        </div>

        {/* METRICS */}
        <div className="metric-items">
          <motion.div
            className="metric-item"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="metric-dot" />
            <div>
              <h4>Global Suppliers</h4>
              <p>Worldwide sourcing network for quality pet supplies.</p>
            </div>
          </motion.div>

          <motion.div
            className="metric-item"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="metric-dot" />
            <div>
              <h4>Logistics Expertise</h4>
              <p>Strong supply chain performance built over years.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
