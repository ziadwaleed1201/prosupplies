import { motion } from "framer-motion";
import "./Brands.css";
import belcando from "../../assets/images/belcando-bg.jpg";
import leonardo from "../../assets/images/leonardo-bg.jpg";
import bewiDog from "../../assets/images/bewiDog2-bg.jpg";
import bewiCat from "../../assets/images/bewiCat2-bg.jpg";
import kongo from "../../assets/images/kongo-bg.jpg";
import oldPrince from "../../assets/images/oldPrince-bg.jpg";
import sanicat from "../../assets/images/sanicat-bg.jpg";
import aleef from "../../assets/images/Aleef-bg.jpg";
import ramlah from "../../assets/images/Ramlah-bg.jpg";

/*
  BRAND DATA
  Logos should be placed in:
  src/assets/brands/
*/
const BRANDS = [
  {
    name: "Belcando",
    logo: belcando,
    description:
      "BELCANDO® is a premium German dog food brand produced by BEWITAL petfood, known for its high fresh-meat content and natural, high-quality ingredients. Made in Germany, BELCANDO offers scientifically balanced nutrition to support dogs' health, vitality, and overall well-being.",
    url: "https://www.belcando.com/"
  },
  {
    name: "Leonardo",
    logo: leonardo,
    description:
      "LEONARDO® is a premium German cat food brand by BEWITAL petfood, formulated with high-quality natural ingredients and fresh meat for excellent taste and digestibility. Made in Germany, LEONARDO provides balanced, species-appropriate nutrition to support cats' health, vitality, and overall well-being.",
    url: "https://www.leonardo-catfood.com/"
  },
  {
    name: "Bewi Dog",
    logo: bewiDog,
    description:
      "BEWI DOG® is a German dog food brand by BEWITAL petfood, offering reliable, high-quality nutrition made from carefully selected ingredients. Made in Germany, BEWI DOG provides balanced, everyday feeding solutions to support dogs' health and energy at an excellent value.",
    url: "https://bewi-dog.de/"
  },
  {
    name: "Bewi Cat",
    logo: bewiCat,
    description:
      "BEWI CAT® is a German cat food brand by BEWITAL petfood, providing dependable, high-quality nutrition made from carefully selected ingredients. Made in Germany, BEWI CAT offers balanced, everyday feeding solutions to support cats' health, vitality, and overall well-being at an excellent value.",
    url: "https://bewi-cat.de/en/"
  },
  {
    name: "KONGO",
    logo: kongo,
    description:
      "KONGO® is a practical pet food brand designed for everyday feeding, offering cost-effective formulas to meet basic nutritional needs.",
    url: "https://baires-sa.com.ar/ing/productos/kongo/2"
  },
  {
    name: "Old Prince",
    logo: oldPrince,
    description:
      "OLD PRINCE® is an Argentinian pet food brand produced by Agroindustrias Baires, offering a wide range of dog and cat foods for different life stages and needs.",
    url: "https://baires-sa.com.ar/ing/productos/old-prince/15"
  },
  {
    name: "Sani Cat",
    logo: sanicat,
    description:
      "SANI CAT® is a European cat litter brand with over 60 years of experience, specializing in high-performance mineral and plant-based litters.",
    url: "https://www.sanicat.com/"
  },
  {
    name: "Aleef",
    logo: aleef,
    description:
      "ALEEF® is an Egyptian pet food brand offering a wide range of dog and cat foods produced locally with carefully selected ingredients.",
    url: "https://aleefpetfood.com/#home"
  },
  {
    name: "Ramlah",
    logo: ramlah,
    description:
      "RAMLAH® is an Egyptian premium cat litter brand by TailsCo, developed with advanced odour-lock and fast-clumping technology.",
    url: "https://www.tails-co.com/"
  }
];


export default function OurBrands() {
  return (
    <section id="brands" className="brands-section">
      <motion.div
        className="brands-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* HEADER */}
        <div className="brands-header">
          <span className="brands-eyebrow">OUR BRANDS</span>
          <h2>Trusted Global Partners</h2>
          <p>
            We collaborate with internationally recognized brands to ensure
            quality, reliability, and long-term value for our clients.
          </p>
        </div>

        {/* GRID */}
        <div className="brands-grid">
          {BRANDS.map((brand, index) => {
            const rowDelay = Math.floor(index / 3) * 0.2;

            return (
              <motion.div
                key={brand.name}
                className="brand-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: rowDelay
                }}
              >
                <div className="brand-logo-wrapper">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="brand-logo"
                  />
                </div>

                <h3>{brand.name}</h3>
                <p>{brand.description}</p>

                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-link"
                >
                  Visit Website
                </a>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
