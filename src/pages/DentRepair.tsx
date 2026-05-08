import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, CheckCircle, MapPin } from "lucide-react";
import { BUSINESS_NAME, PHONE, PHONE_HREF, ADDRESS, DOMAIN } from "@/data/constants";
import heroImg from "@/assets/collision-repair-truck-bed-dent-during-charleston.webp";
import { trackPhoneClick } from "@/utils/tracking";

const dentTypes = [
  "Parking lot door dings",
  "Shopping cart dents",
  "Hail damage",
  "Minor fender dents",
  "Creased body panels",
  "Large collision dents",
  "Bumper dents",
  "Hood and roof dents",
];

const faqs = [
  {
    q: "What is paintless dent repair?",
    a: "Paintless dent repair (PDR) is a technique that removes dents without sanding, filling, or repainting. We use specialized tools to gently push the metal back into its original shape from behind the panel. It preserves your factory paint and is faster and more cost-effective than traditional dent repair.",
  },
  {
    q: "When does paintless dent repair work?",
    a: "PDR works best on small to medium dents where the paint has not been cracked or chipped. Door dings, hail damage, and minor body dents are ideal candidates. If the dent has sharp creases, damaged paint, or is on a body line, traditional dent repair may be needed instead.",
  },
  {
    q: "How long does dent repair take?",
    a: "Small dents repaired with PDR can be done in as little as 1 to 2 hours. Traditional dent repair that requires filling and painting typically takes 2 to 5 business days depending on the size and location of the damage.",
  },
  {
    q: "Is paintless dent repair cheaper than traditional repair?",
    a: "Yes, in most cases. PDR does not require paint or body filler, which cuts both material and labor costs. A single door ding typically costs significantly less to fix with PDR than a traditional repair. We will tell you which method makes the most sense for your specific dent.",
  },
  {
    q: "Can you fix hail damage?",
    a: "Yes. Hail damage is one of the most common reasons people come to us for dent repair. If the hail did not crack or chip the paint, we can usually fix most or all of the dents with paintless dent repair. For severe hail damage, we combine PDR with traditional methods to get your car back to factory condition.",
  },
];

const DentRepair = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dent Repair Charleston SC",
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
    serviceType: "Dent Repair",
    description: "Professional dent repair in Charleston, SC. Paintless dent removal and traditional dent repair for all vehicle types.",
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
      { "@type": "ListItem", position: 2, name: "Dent Repair", item: `${DOMAIN}/dent-repair` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Dent Repair Charleston SC | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Dent repair in Charleston, SC. Paintless dent removal and traditional dent repair. Door dings, hail damage, and more. Free estimates. Call (843) 380-7055."
        />
        <link rel="canonical" href={`${DOMAIN}/dent-repair`} />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[60svh] flex items-center overflow-hidden" style={{ backgroundColor: "#242021" }}>
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Truck bed dent repair in progress at Charleston SC body shop"
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
              PDR &amp; Traditional Dent Repair
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Dent Repair
              <span className="block" style={{ color: "#4A8A87" }}>
                Charleston, SC
              </span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              Door dings. Hail damage. Parking lot dents. We remove dents with paintless dent repair when possible and traditional methods when needed. Your car leaves looking factory fresh.
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
                onClick={() => trackPhoneClick("dent-repair")}
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
            Professional Dent Repair in <span style={{ color: "#2D5F5D" }}>Charleston</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            You walked out of the store and found a new dent in your door. Or a hailstorm rolled through and left your hood looking like a golf ball. Either way, you want it fixed. And you want it done right without paying more than you need to.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We offer both paintless dent repair (PDR) and traditional dent repair. PDR uses specialized tools to push the metal back into shape from behind the panel without sanding, filling, or painting. It preserves your factory finish and costs less than traditional methods.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            When a dent is too large, too sharp, or has damaged paint, we use traditional body repair techniques. That means filling, sanding, priming, and painting the panel to match your vehicle's exact factory color. Either way, the dent disappears.
          </p>
        </div>
      </section>

      {/* Types of Dents */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              Types of Dents <span style={{ color: "#2D5F5D" }}>We Fix</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              If it's dented, we can fix it. Here are the most common dent repairs we do.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            {dentTypes.map((item, i) => (
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

      {/* PDR vs Traditional */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            Paintless Dent Repair vs. <span style={{ color: "#2D5F5D" }}>Traditional Dent Repair</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Not every dent can be fixed the same way. We use the method that gives you the best result at the best price. A shopping cart ding in a flat panel is very different from a crease along a body line. Hail damage across your hood is different from a deep dent on your door. We look at the size, location, and paint condition before recommending the right approach.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50 rounded-xl border border-gray-200 px-6 py-8"
            >
              <h3 className="font-extrabold text-base uppercase tracking-wide mb-4" style={{ color: "#2D5F5D" }}>
                Paintless Dent Repair (PDR)
              </h3>
              <ul className="space-y-2">
                {[
                  "Preserves factory paint",
                  "Faster turnaround (often same day)",
                  "Lower cost than traditional repair",
                  "Best for small to medium dents",
                  "Ideal for hail damage",
                  "No body filler or repainting needed",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-500 text-sm">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#2D5F5D" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-gray-50 rounded-xl border border-gray-200 px-6 py-8"
            >
              <h3 className="font-extrabold text-base uppercase tracking-wide mb-4" style={{ color: "#2D5F5D" }}>
                Traditional Dent Repair
              </h3>
              <ul className="space-y-2">
                {[
                  "Handles dents with damaged paint",
                  "Repairs sharp creases and body lines",
                  "Uses body filler for a smooth finish",
                  "Panel is repainted to exact factory color",
                  "Best for larger or more severe dents",
                  "Restores structural integrity when needed",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-500 text-sm">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#2D5F5D" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <p className="text-gray-500 text-base leading-relaxed mt-8">
            Not sure which method your dent needs? Bring your car in for a free estimate. We will look at the damage and tell you exactly which approach will give you the best result. No pressure. No upselling. Many customers come in expecting an expensive traditional repair and leave with a same-day PDR fix at a fraction of the cost.
          </p>
        </div>
      </section>

      {/* Process */}
      <section style={{ backgroundColor: "#242021" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-white">
            Our Dent Repair <span style={{ color: "#4A8A87" }}>Process</span>
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Assess the Damage",
                text: "We look at the dent, check the paint, and determine whether PDR or traditional repair is the right approach. You get an honest answer and an accurate price.",
              },
              {
                step: "02",
                title: "Choose the Right Method",
                text: "If the paint is intact and the dent is accessible from behind, we use PDR. If the dent has cracked paint or sharp creases, we go the traditional route. We explain why and let you decide.",
              },
              {
                step: "03",
                title: "Repair the Dent",
                text: "Our technicians carefully restore the panel to its original shape. For PDR, this can take as little as an hour. For traditional repair, we fill, sand, prime, and paint to factory specs.",
              },
              {
                step: "04",
                title: "Quality Check & Pickup",
                text: "We inspect the repair under multiple lighting conditions to make sure it's invisible. You pick up your car looking the way it did before the dent happened.",
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
                  <h3 className="font-extrabold text-base mb-1 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              Dent Repair Near <span style={{ color: "#2D5F5D" }}>You</span>
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
              Dent Repair <span style={{ color: "#2D5F5D" }}>FAQ</span>
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
            Got a Dent? <span style={{ color: "#242021" }}>We'll Fix It.</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Get a free estimate from Compass Collision. We'll tell you the best repair method, the honest price, and how long it takes.
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
                onClick={() => trackPhoneClick("dent-repair")}
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

export default DentRepair;
