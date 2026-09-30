import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

/* GLOBAL COMPONENTS */
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SectionDivider from "./components/SectionDivider/SectionDivider";

/* LANDING PAGE SECTIONS */
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Brands from "./sections/Brands/Brands";
import Contact from "./sections/Contact/Contact";
import MetricsDivider from "./components/MetricsDivider/MetricsDivider";
import StatsDivider from "./components/StatsDivider/StatsDivider";

const SECTION_IDS = ["home", "about", "brands", "contact"];

export default function App() {
  const location = useLocation();

  const isLanding = useMemo(
    () => location.pathname === "/",
    [location.pathname]
  );

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (!isLanding) return;

    const elements = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0.15, 0.25, 0.35, 0.5]
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isLanding]);

  return (
    <>
      <Header activeSection={isLanding ? activeSection : ""} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <MetricsDivider />

              <About />
              <StatsDivider />

              <Brands />
              <SectionDivider />

              <Contact />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}
