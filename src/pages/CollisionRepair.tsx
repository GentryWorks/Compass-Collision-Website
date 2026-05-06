import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, CheckCircle, Shield, Clock, Wrench, MapPin } from "lucide-react";
import { BUSINESS_NAME, PHONE, PHONE_HREF, ADDRESS, DOMAIN } from "@/data/constants";
import heroImg from "@/assets/jeep-grand-cherokee-collision-repair-after-charleston.webp";

const damageTypes = [
  "Fender benders and minor collisions",
  "Rear-end collisions",
  "Side-impact damage",
  "Front-end collisions",
  "Frame damage and structural repair",
  "Bumper damage and replacement",
  "Quarter panel damage",
  "Door damage and replacement",
  "Hood and trunk damage",
  "Multi-vehicle accident damage",
];

const processSteps = [
  {
    step: "01",
    title: "Free Estimate",
    text: "Bring your car in or send us photos. We look at the damage and give you an honest price. No pressure. No obligation.",
  },
  {
    step: "02",
    title: "Insurance Coordination",
    text: "We work directly with your insurance adjuster. We handle the paperwork, the supplements, and the back-and-forth so you don't have to.",
  },
  {
    step: "03",
    title: "Repair & Restore",
    text: "Our team repairs the structural damage first, then restores the body panels and paint to factory condition. Every step is done in-house.",
  },
  {
    step: "04",
    title: "Final Inspection & Pickup",
    text: "We inspect every repair before you see the car. When you pick it up, the damage is invisible. Your car looks like the accident never happened.",
  },
];

const faqs = [
  {
    q: "How long does collision repair take?",
    a: "Most collision repairs take 3 to 10 business days depending on the severity of the damage. Minor fender benders are usually done in 3 to 5 days. Major structural repairs can take 2 weeks or more. We give you a realistic timeline before we start and keep you updated throughout the process.",
  },
  {
    q: "Do you work with all insurance companies?",
    a: "Yes. We work with every major insurance carrier including State Farm, GEICO, Progressive, Allstate, USAA, and all others. We handle the claims process, communicate with your adjuster, and file supplements if additional damage is found during the repair.",
  },
  {
    q: "Will my car look the same after the repair?",
    a: "That is the goal of every repair we do. We use factory-spec parts and match your paint down to the exact color code. When we're done, you should not be able to tell where the damage was. If you can, we're not done yet.",
  },
  {
    q: "Do I need to get multiple estimates?",
    a: "No. South Carolina law gives you the right to choose any body shop you want. You do not need multiple estimates, and your insurance company cannot require you to use a specific shop. You choose where your car gets fixed.",
  },
  {
    q: "What if there is hidden damage under the panels?",
    a: "Hidden damage is common in collisions. If we find additional damage during the repair, we document it with photos and send a supplement to your insurance company. We will not proceed with extra work without your approval first.",
  },
];

const CollisionRepair = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Collision Repair Charleston SC",
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
    serviceType: "Collision Repair",
    description: "Full-service collision repair in Charleston, SC. From fender benders to major accident damage, we restore your vehicle to pre-accident condition.",
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
      { "@type": "ListItem", position: 2, name: "Collision Repair", item: `${DOMAIN}/collision-repair` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Collision Repair Charleston SC | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Collision repair in Charleston, SC. Honest estimates from techs who do the work. We handle insurance. Free estimates. Call (843) 380-7055."
        />
        <link rel="canonical" href={`${DOMAIN}/collision-repair`} />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[60svh] flex items-center overflow-hidden" style={{ backgroundColor: "#242021" }}>
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Jeep Grand Cherokee after collision repair in Charleston SC"
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
              Charleston's Trusted Body Shop
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Collision Repair
              <span className="block" style={{ color: "#4A8A87" }}>
                Charleston, SC
              </span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              Your car got hit. Now you need it fixed right. We handle everything from minor fender benders to major collision damage — and we deal with your insurance company so you don't have to.
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
            Honest Collision Repair from <span style={{ color: "#2D5F5D" }}>People You Can Trust</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            When your car gets damaged in an accident, the last thing you want is a body shop that gives you the runaround. You want a straight answer on what it costs, how long it takes, and whether the repair will actually hold up.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            That is exactly what you get here. The people writing your estimate have done the repair hundreds of times with their own hands. They know what the job takes because they have done the work themselves. Your price is accurate from the start because there is no gap between the estimate and the repair.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            We work with all insurance companies. We handle the claims process, communicate with your adjuster, and file supplements when needed. You drop off your car. We fix it. You pick it up looking like nothing ever happened.
          </p>
        </div>
      </section>

      {/* What We Repair */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              What We <span style={{ color: "#2D5F5D" }}>Repair</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              From parking lot dings to major wrecks. If your car has collision damage, we fix it.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            {damageTypes.map((item, i) => (
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

      {/* Our Process */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center" style={{ color: "#111" }}>
            Our Collision Repair <span style={{ color: "#2D5F5D" }}>Process</span>
          </h2>
          <div className="space-y-8">
            {processSteps.map((item, i) => (
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

      {/* Insurance Section */}
      <section style={{ backgroundColor: "#242021" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3 text-white">
              We Handle Your <span style={{ color: "#4A8A87" }}>Insurance Claim</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Dealing with insurance after an accident is stressful. We take that off your plate.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "All Carriers Welcome",
                text: "We work with every insurance company. State Farm, GEICO, Progressive, Allstate, USAA, and all others. No restrictions.",
              },
              {
                icon: <Wrench className="w-6 h-6" />,
                title: "Direct Adjuster Communication",
                text: "We talk to your adjuster directly. We handle the paperwork, the photos, and the supplement requests. You stay informed without the hassle.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Supplement Filing",
                text: "If we find hidden damage during the repair, we document it and file a supplement with your insurance. No surprise bills to you.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl px-6 py-8"
                style={{ backgroundColor: "#2D5F5D" }}
              >
                <div className="mb-4 text-[#242021]">{item.icon}</div>
                <h3 className="font-extrabold text-sm uppercase tracking-wide mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            Why Choose Us for <span style={{ color: "#2D5F5D" }}>Collision Repair</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Most body shops split the work. One person writes the estimate. A different person does the repair. That gap is where surprises happen. Hidden charges. Unexpected delays. Repairs that don't match the original quote.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We do it differently. The person writing your estimate has done the repair hundreds of times. They know what the job takes because they have done it with their own hands. That means your price is accurate from day one.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We repair all makes and models. Cars, trucks, SUVs. Foreign and domestic. Whether you drive a Honda Civic or a BMW M5, we have the tools and experience to restore it to factory condition.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            With 20+ years of experience in the collision repair industry and 272 five-star Google reviews, Charleston trusts us to get the job done right.
          </p>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              Collision Repair Near <span style={{ color: "#2D5F5D" }}>You</span>
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
              Collision Repair <span style={{ color: "#2D5F5D" }}>FAQ</span>
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
            Need Collision Repair in <span style={{ color: "#242021" }}>Charleston?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Get a free estimate from Compass Collision. Honest pricing. No pressure. No surprises.
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

export default CollisionRepair;
