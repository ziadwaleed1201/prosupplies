import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Header.css";



export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "brands", label: "Our Brands" },
    { id: "contact", label: "Contact" }
  ];

  /* Hide / show header on scroll */
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY && current > 80) setHidden(true);
      else setHidden(false);
      setLastScrollY(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  /* Detect active section on scroll */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "brands", "contact"];
      const scrollPosition = window.scrollY + 150; // offset for header

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="header"
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="header-inner">
        {/* LOGO */}
        <div className="logo" onClick={() => scrollTo("home")}>
          <img
           
            alt="Pro Supplies Logo"
            className="logo-img"
          />
          <span className="logo-text">PRO SUPPLIES</span>
        </div>

        {/* NAV */}
        <nav>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={activeSection === item.id ? "active" : ""}
            >
              {item.label}

              {activeSection === item.id && (
                <motion.span
                  className="nav-underline"
                  layoutId="nav-underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}