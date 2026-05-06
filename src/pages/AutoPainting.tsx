import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, CheckCircle, MapPin } from "lucide-react";
import { BUSINESS_NAME, PHONE, PHONE_HREF, ADDRESS, DOMAIN } from "@/data/constants";
import heroImg from "@/assets/classic-ford-truck-paint-after-charleston.webp";

const paintServices = [
  "Panel painting after collision repair",
  "Bumper refinishing and repainting",
  "Fender painting",
  "Door panel painting",
  "Hood and trunk lid painting",
  "Color matching to factory specs",
  "Blending paint into adjacent panels",
  "Clear coat repair and restoration",
];

const faqs = [
  {
    q: "How do you match my car's exact paint color?",
    a: "Every vehicle has a paint code, usually found on a sticker inside the driver's door jamb. We use that code along with computerized color matching to mix paint that matches your factory color exactly. We also spray a test panel first to verify the match under different lighting before painting your car.",
  },
  {
    q: "Do you do full car repaints?",
    a: "No. We focus on collision-related paint work. That includes panel painting, bumper refinishing, color matching, and blending after a repair. If you need an entire vehicle repainted or want a color change, we can refer you to a shop that specializes in that type of work.",
  },
  {
    q: "How long does auto painting take?",
    a: "A single panel — like a fender or bumper — typically takes 2 to 3 business days. That includes prep, primer, paint, clear coat, and curing time. Multi-panel jobs take longer depending on how many panels need to be painted and blended.",
  },
  {
    q: "Will the new paint match the rest of my car?",
    a: "That is the entire point of our color matching process. We blend the new paint into the surrounding panels so there is no visible line between the old and new paint. When we're done, you should not be able to tell which panel was repainted.",
  },
  {
    q: "Can you fix paint scratches and chips?",
    a: "Yes. Scratches that have gone through the clear coat or base coat need to be sanded, primed, and repainted. Small chips can sometimes be touched up, but deeper chips may require the panel to be repainted for a seamless finish. Bring your car in and we will tell you which approach makes the most sense.",
  },
];

const AutoPainting = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Auto Painting Charleston SC",
    provider: {
      "@type": "AutoBodyShop",
      name: BUSINESS_NAME,
      telephone: PHONE,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1949 Dulsey Road, Unit 202",
        addressLocality: "Charleston",
        addressRegion: "SC",
        postalCode: "29407",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Charleston",
      sameAs: "https://en.wikipedia.org/wiki/Charleston,_South_Carolina",
    },
    serviceType: "Auto Painting",
    description: "Professional auto painting in Charleston, SC. Panel painting, bumper refinishing, and factory color matching for collision repairs.",
  };

  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "Auto Painting", item: `${DOMAIN}/auto-painting` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Auto Painting Charleston SC | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Auto painting in Charleston, SC. Panel painting, bumper refinishing, and factory color matching. Invisible repairs. Free estimates. Call (843) 380-7055."
        />
        <link rel="canonical" href={`${DOMAIN}/auto-painting`} />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[60svh] flex items-center overflow-hidden" style={{ backgroundColor: "#242021" }}>
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Classic Ford truck after professional auto painting in Charleston SC"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
            fetchPriority="high"
            width={1800}
            height={1200}
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 z-10 w-full py-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="max-w-2xl"
          >
            <div
              className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "#2D5F5D" }}
            >
              Factory Color Matching
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Auto Painting
              <span className="block" style={{ color: "#4A8A87" }}>
                Charleston, SC
              </span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              Panel painting. Bumper refinishing. Color matching down to the exact factory code. When we paint a panel, you can't tell where the repair ends and the original begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
                style={{ backgroundColor: "#2D5F5D" }}
              >
                Get Free Estimate
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline text-white"
                style={{ border: "2px solid #fff" }}
              >
                <Phone className="w-4 h-4" />
                Call: {PHONE}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            Collision Paint Repair That's <span style={{ color: "#2D5F5D" }}>Invisible</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            After a collision repair, the paint has to match perfectly. If the new panel is a slightly different shade or the clear coat doesn't blend right, the repair is obvious. That is not how we do things.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We use computerized color matching and your vehicle's factory paint code to mix an exact match. Then we blend the new paint into the surrounding panels so there is no visible line between old and new. The result is a repair you can't see.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            We paint panels, bumpers, fenders, hoods, and doors. We do not do full vehicle repaints or color changes. Our focus is on <Link to="/collision-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>collision repair</Link> paint work — making the damage disappear.
          </p>
        </div>
      </section>

      {/* What We Paint */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              What We <span style={{ color: "#2D5F5D" }}>Paint</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Every paint job is done in our spray booth with proper prep, primer, base coat, and clear coat.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            {paintServices.map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 px-5 py-4 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#2D5F5D" }} />
                <span className="text-sm font-semibold" style={{ color: "#111" }}>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Matching Process */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            Our Color Matching <span style={{ color: "#2D5F5D" }}>Process</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Color matching is the difference between a paint job that looks right and one that looks obviously repaired. We take it seriously.
          </p>
          <div className="space-y-8 mt-8">
            {[
              {
                step: "01",
                title: "Find Your Paint Code",
                text: "Every vehicle has a paint code on a sticker inside the door jamb, under the hood, or in the trunk. We locate this code and use it as the starting point for mixing your exact color.",
              },
              {
                step: "02",
                title: "Computerized Color Matching",
                text: "We use a computerized mixing system to match your paint formula precisely. This accounts for the base color, metallic flake, pearl, and any manufacturer-specific additives.",
              },
              {
                step: "03",
                title: "Test Panel Spray",
                text: "Before painting your car, we spray a test panel and compare it to your vehicle under multiple lighting conditions — daylight, fluorescent, and shade. If it doesn't match perfectly, we adjust the formula.",
              },
              {
                step: "04",
                title: "Paint and Blend",
                text: "We apply the base coat, then blend the color into the adjacent panels so there is no hard line between old and new paint. The clear coat goes on last and gets polished to a factory finish.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-sm"
                  style={{ backgroundColor: "#2D5F5D" }}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="font-extrabold text-base mb-1" style={{ color: "#111" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When You Need Auto Painting */}
      <section style={{ backgroundColor: "#242021" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
            When You Need <span style={{ color: "#4A8A87" }}>Auto Painting</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            Most of our paint work follows a collision repair or <Link to="/dent-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#4A8A87" }}>dent repair</Link>. Here are the most common reasons customers need a panel repainted.
          </p>
          <ul className="space-y-3 mt-6">
            {[
              "Your bumper was damaged in a collision and needs to be repainted after repair",
              "A fender or door was replaced and the new panel needs to be color-matched",
              "Paint was scratched or chipped down to the metal during an accident",
              "A panel was repaired with body filler and needs primer and paint",
              "Your clear coat has peeled or faded on the damaged area",
              "Adjacent panels need blending so the repair is seamless",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3 text-gray-400 text-sm"
              >
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#4A8A87" }} />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              Auto Painting Near <span style={{ color: "#2D5F5D" }}>You</span>
            </h2>
            <p className="text-gray-500 text-base">{ADDRESS}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "North Charleston", link: "/north-charleston" },
              { name: "Mount Pleasant", link: "/mount-pleasant" },
              { name: "Summerville", link: "/summerville" },
              { name: "West Ashley", link: "/west-ashley" },
              { name: "James Island", link: "/james-island" },
              { name: "Goose Creek", link: "/goose-creek" },
            ].map((area, i) => (
              <Link key={i} to={area.link} className="no-underline hover:opacity-80 transition-opacity">
                <span className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
                  <MapPin className="w-4 h-4" style={{ color: "#2D5F5D" }} />
                  <span className="text-sm font-bold" style={{ color: "#111" }}>{area.name}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              Auto Painting <span style={{ color: "#2D5F5D" }}>FAQ</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-extrabold text-sm uppercase tracking-wide" style={{ color: "#111" }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className="w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-300"
                    style={{ color: "#2D5F5D", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: "#2D5F5D" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Need a Panel <span style={{ color: "#242021" }}>Repainted?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Get a free estimate from Compass Collision. Factory color matching. Invisible repairs. Honest pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
              style={{ backgroundColor: "#242021" }}
            >
              Get Free Estimate
            </Link>
            <a
              href={PHONE_HREF}
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

export default AutoPainting;
