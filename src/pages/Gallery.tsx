import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { BUSINESS_NAME, PHONE, PHONE_HREF, DOMAIN } from "@/data/constants";

// Import all gallery images
import camaroZl1After from "@/assets/camaro-zl1-collision-repair-after-charleston.webp";
import jeepBefore from "@/assets/jeep-grand-cherokee-collision-repair-before-charleston.webp";
import jeepAfter from "@/assets/jeep-grand-cherokee-collision-repair-after-charleston.webp";
import bmwBefore from "@/assets/bmw-sedan-collision-repair-before-charleston.webp";
import bmwDuring from "@/assets/bmw-sedan-collision-repair-during-charleston.webp";
import motoTankBefore from "@/assets/motorcycle-tank-paint-prep-before-charleston.webp";
import motoTankAfter from "@/assets/motorcycle-tank-custom-paint-after-charleston.webp";
import audiS5Before from "@/assets/audi-s5-front-collision-damage-before-charleston.webp";
import classicFordAfter from "@/assets/classic-ford-truck-paint-after-charleston.webp";
import truckBedDent from "@/assets/collision-repair-truck-bed-dent-during-charleston.webp";
import truckPanelPrep from "@/assets/collision-repair-truck-panel-prep-during-charleston.webp";
import lexusGx570During from "@/assets/lexus-gx570-collision-repair-during-charleston.webp";
import lexusLcAfter from "@/assets/lexus-lc-collision-repair-after-charleston.webp";
import rav4After from "@/assets/toyota-rav4-collision-repair-after-charleston.webp";
import rav4AfterSide from "@/assets/toyota-rav4-collision-repair-after-side-charleston.webp";
import shopExterior from "@/assets/compass-collision-shop-exterior-bays-charleston.webp";
import shopInterior from "@/assets/compass-collision-shop-interior-wide-charleston.webp";
import paintBooth from "@/assets/compass-collision-shop-paint-booth-tech-charleston.webp";
import teamPhoto from "@/assets/compass-collision-team-charleston.webp";
import suvPaintPrep from "@/assets/suv-collision-repair-during-paint-prep-charleston.webp";
import bumperPaint from "@/assets/bumper-paint-repair-charleston.webp";
import waitingRoom from "@/assets/compass-collision-waiting-room-charleston.webp";
import waitingRoomCerts from "@/assets/compass-collision-waiting-room-certifications-charleston.webp";
import { trackPhoneClick } from "@/utils/tracking";

type Category = "All" | "Collision Repair" | "Auto Painting" | "Shop";

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
  caption?: string;
}

const images: GalleryImage[] = [
  {
    src: camaroZl1After,
    alt: "Camaro ZL1 after collision repair in Charleston SC",
    category: "Collision Repair",
    caption: "Camaro ZL1 — front-end collision damage, panels rebuilt and color-matched.",
  },
  {
    src: jeepBefore,
    alt: "Jeep Grand Cherokee before collision repair Charleston SC",
    category: "Collision Repair",
    caption: "Jeep Grand Cherokee — side-impact damage before repair.",
  },
  {
    src: jeepAfter,
    alt: "Jeep Grand Cherokee after collision repair Charleston SC",
    category: "Collision Repair",
    caption: "Jeep Grand Cherokee — same vehicle after full panel repair and paint match.",
  },
  {
    src: bmwBefore,
    alt: "BMW sedan before collision repair Charleston SC",
    category: "Collision Repair",
    caption: "BMW sedan — rear collision damage before disassembly.",
  },
  {
    src: bmwDuring,
    alt: "BMW sedan during collision repair Charleston SC",
    category: "Collision Repair",
    caption: "BMW sedan — structural repair in progress, prepped for paint.",
  },
  {
    src: audiS5Before,
    alt: "Audi S5 front collision damage before repair Charleston SC",
    category: "Collision Repair",
    caption: "Audi S5 — front collision damage, both panels rebuilt and color-matched.",
  },
  {
    src: lexusGx570During,
    alt: "Lexus GX570 during collision repair Charleston SC",
    category: "Collision Repair",
    caption: "Lexus GX570 — mid-repair with panels stripped and primed.",
  },
  {
    src: lexusLcAfter,
    alt: "Lexus LC after collision repair Charleston SC",
    category: "Collision Repair",
    caption: "Lexus LC — completed repair, paint blended to factory finish.",
  },
  {
    src: rav4After,
    alt: "Toyota RAV4 after collision repair Charleston SC",
    category: "Collision Repair",
    caption: "Toyota RAV4 — rear-end damage repaired, looks like it never happened.",
  },
  {
    src: rav4AfterSide,
    alt: "Toyota RAV4 side view after collision repair Charleston SC",
    category: "Collision Repair",
    caption: "Toyota RAV4 — side view showing full panel alignment after repair.",
  },
  {
    src: truckBedDent,
    alt: "Truck bed dent repair in progress Charleston SC",
    category: "Collision Repair",
    caption: "Truck bed — large dent from impact, mid-repair before filler and paint.",
  },
  {
    src: truckPanelPrep,
    alt: "Truck panel prep during collision repair Charleston SC",
    category: "Collision Repair",
    caption: "Truck quarter panel — masked and prepped for color-matched paint.",
  },
  {
    src: suvPaintPrep,
    alt: "SUV masked for paint repair during collision work Charleston SC",
    category: "Collision Repair",
    caption: "SUV — fully masked for spot paint repair after door damage.",
  },
  {
    src: motoTankBefore,
    alt: "Motorcycle tank before custom paint Charleston SC",
    category: "Auto Painting",
    caption: "Motorcycle tank — bare metal before custom paint prep.",
  },
  {
    src: motoTankAfter,
    alt: "Motorcycle tank after custom paint Charleston SC",
    category: "Auto Painting",
    caption: "Motorcycle tank — finished custom paint, show-quality result.",
  },
  {
    src: classicFordAfter,
    alt: "Classic Ford truck after professional paint Charleston SC",
    category: "Auto Painting",
    caption: "Classic Ford truck — full paint restoration, single-stage finish.",
  },
  {
    src: paintBooth,
    alt: "Compass Collision paint booth with technician Charleston SC",
    category: "Auto Painting",
    caption: "Our dedicated paint booth — controlled environment for dust-free finishes.",
  },
  {
    src: bumperPaint,
    alt: "Bumper on paint stand at Compass Collision Charleston SC",
    category: "Auto Painting",
    caption: "Bumper cover staged for color-matched paint — prepped to OEM spec.",
  },
  {
    src: shopExterior,
    alt: "Compass Collision shop exterior with bays Charleston SC",
    category: "Shop",
  },
  {
    src: shopInterior,
    alt: "Compass Collision shop interior wide view Charleston SC",
    category: "Shop",
  },
  {
    src: teamPhoto,
    alt: "Compass Collision team in Charleston SC",
    category: "Shop",
  },
  {
    src: waitingRoom,
    alt: "Compass Collision waiting room Charleston SC",
    category: "Shop",
  },
  {
    src: waitingRoomCerts,
    alt: "Compass Collision waiting room certifications wall Charleston SC",
    category: "Shop",
    caption: "Our certifications on the wall in the waiting room — earned through training and experience.",
  },
];

const categories: Category[] = ["All", "Collision Repair", "Auto Painting", "Shop"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory);

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "Gallery", item: `${DOMAIN}/gallery` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Collision Repair Gallery | {BUSINESS_NAME} Charleston SC</title>
        <meta
          name="description"
          content="Real collision repair work from Compass Collision in Charleston, SC. Before and after photos of actual vehicles we've repaired — BMWs, trucks, SUVs, and more."
        />
        <link rel="canonical" href={`${DOMAIN}/gallery`} />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div
              className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "#2D5F5D" }}
            >
              Our Work
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Collision Repair <span style={{ color: "#5A9E9B" }}>Gallery</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              These are real vehicles we've repaired right here in Charleston, SC. If you just got in an accident and
              you're wondering what "fixed right" actually looks like — this is it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-10 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${
                  activeCategory === cat
                    ? "text-white"
                    : "text-gray-500 bg-gray-100 hover:bg-gray-200"
                }`}
                style={activeCategory === cat ? { backgroundColor: "#2D5F5D" } : undefined}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Orienting Paragraph */}
      <section className="bg-white pt-12 pb-2">
        <div className="max-w-[760px] mx-auto px-6 text-center">
          <p className="text-gray-600 text-base leading-relaxed">
            Use the filters above to browse by repair type. The <strong>Collision Repair</strong> tab shows before,
            during, and after photos — so you can see exactly what the process looks like from start to finish.{" "}
            <strong>Auto Painting</strong> includes color-match work and custom paint jobs. The{" "}
            <strong>Shop</strong> tab shows our facility, our team, and the certifications we've earned. Where you see
            a caption, it describes the vehicle, the damage, and what we did to fix it.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <motion.div
                key={img.alt}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={760}
                  height={507}
                />
                <div className="px-4 py-3">
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest block mb-1"
                    style={{ color: "#2D5F5D" }}
                  >
                    {img.category}
                  </span>
                  {img.caption && (
                    <p className="text-gray-600 text-xs leading-snug">{img.caption}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: "#2D5F5D" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Get Your <span style={{ color: "#1A2E2D" }}>Car Fixed?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Every vehicle in this gallery came in damaged and left looking like it never happened. Yours can too.
            Estimates are free and we'll get back to you the same day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
              style={{ backgroundColor: "#E8833A" }}
            >
              Get Free Estimate
            </Link>
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneClick("gallery")}
              className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline"
              style={{ border: "2px solid #fff" }}
            >
              <Phone className="w-4 h-4" />
              Call: {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
