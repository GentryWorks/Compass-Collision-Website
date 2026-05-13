import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, CheckCircle, MapPin, Wrench, Paintbrush, CircleDot } from "lucide-react";
import { BUSINESS_NAME, PHONE, PHONE_HREF, DOMAIN, REVIEW_COUNT_DISPLAY } from "@/data/constants";
import { trackPhoneClick } from "@/utils/tracking";

const services = [
  {
    icon: <Wrench className="w-7 h-7" style={{ color: "#2D5F5D" }} />,
    title: "Collision Repair",
    description: "From rear-end damage to major accident repairs. We handle the insurance process and restore your vehicle — so it looks like it never happened.",
    link: "/collision-repair",
  },
  {
    icon: <CircleDot className="w-7 h-7" style={{ color: "#2D5F5D" }} />,
    title: "Dent Repair",
    description: "Paintless dent removal and traditional repair for parking lot dings, hail damage, and door dents. Most jobs are done the same day.",
    link: "/dent-repair",
  },
  {
    icon: <Paintbrush className="w-7 h-7" style={{ color: "#2D5F5D" }} />,
    title: "Auto Painting",
    description: "Panel painting, bumper refinishing, and factory color matching. We blend every repair so you can't tell where the damage was.",
    link: "/auto-painting",
  },
];

const faqs = [
  {
    q: "Where exactly is your shop in West Ashley?",
    a: "We're at 1949 Dulsey Road, Unit 202, Charleston, SC 29407 — right off Savannah Highway in the 29407 zip code. For most West Ashley residents, we're less than 10 minutes away. No bridge, no I-26.",
  },
  {
    q: "Do you handle insurance claims?",
    a: "Yes — all of it. We contact your insurance company, work with the adjuster, file the paperwork, and push back when their estimate is too low. You drop off your car and pick it up when it's done. We've navigated hundreds of claims for customers who had no idea where to start.",
  },
  {
    q: "What if the other driver's insurance is handling the claim?",
    a: "We deal with that too. We work with all insurance companies — yours or theirs. If their adjuster lowballs the estimate, we fight it. Our job is to make sure your car gets fixed right, not to accept whatever the insurance company offers.",
  },
  {
    q: "How long does a typical repair take?",
    a: "Small dents are often done the same day or in a few hours. Most collision repairs take 3 to 10 business days depending on the damage and parts availability. We give you a realistic timeline upfront and stick to it — you won't be calling us wondering where your car is.",
  },
  {
    q: "Do you work on BMWs, Audis, trucks, and SUVs?",
    a: "Yes. Our owner is factory-trained with 15+ years on BMWs, Audis, and European vehicles. We work on everything from F-150s and Tahoes to Audis, Lexuses, and Mercedes. If you drive it, we can fix it. We've repaired Porsches, Range Rovers, and daily drivers alike — all to the same standard.",
  },
  {
    q: "Do I need an appointment for a free estimate?",
    a: "We prefer appointments so we can give you our full attention. Call us at (843) 380-7055 to schedule. Walk-ins are welcome when our schedule allows, but calling ahead means we're ready for you when you arrive.",
  },
  {
    q: "What neighborhoods in West Ashley do you serve?",
    a: "All of them. Avondale, Shadowmoss, the Bees Ferry corridor, St. Andrews, Willow Walk, and everywhere in between. If you're in the 29407 zip code, you're less than 10 minutes from our shop.",
  },
  {
    q: "What if I've never dealt with a body shop or insurance claim before?",
    a: "That's most of our customers. We walk you through every step — what to tell your insurance company, what the repair involves, and what to expect when. You don't need to know how any of this works. That's our job.",
  },
];

const WestAshley = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Body Shop West Ashley",
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
      name: "West Ashley, Charleston, SC",
      sameAs: "https://en.wikipedia.org/wiki/Charleston,_South_Carolina",
    },
    serviceType: "Auto Body Repair",
  };

  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "West Ashley", item: `${DOMAIN}/west-ashley` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Body Shop West Ashley | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content={`Body shop in West Ashley, Charleston. Collision repair, dent repair, and auto painting. Located right in your neighborhood. ${REVIEW_COUNT_DISPLAY} five-star reviews. Free estimates. Call (843) 380-7055.`}
        />
        <link rel="canonical" href={`${DOMAIN}/west-ashley`} />
        <meta property="og:title" content={`Body Shop West Ashley | ${BUSINESS_NAME}`} />
        <meta property="og:description" content={`Body shop in West Ashley, Charleston. Collision repair, dent repair, and auto painting. Located right in your neighborhood. ${REVIEW_COUNT_DISPLAY} five-star reviews. Free estimates. Call (843) 380-7055.`} />
        <meta property="og:image" content="https://compasscollisionsc.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#2D5F5D" }}>Your Neighborhood Body Shop</div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Body Shop
              <span className="block" style={{ color: "#5A9E9B" }}>West Ashley</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              We're right here in West Ashley — less than 10 minutes from most of your neighborhood. Collision repair, dent repair, and auto painting. {REVIEW_COUNT_DISPLAY} five-star reviews. We do our best to answer every call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} onClick={() => trackPhoneClick("west-ashley")} className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline" style={{ backgroundColor: "#E8833A" }}>
                <Phone className="w-4 h-4" />
                Call for Free Estimate
              </a>
              <a href={PHONE_HREF} onClick={() => trackPhoneClick("west-ashley")} className="inline-flex items-center justify-center gap-2 font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline text-white" style={{ border: "2px solid #fff" }}>
                <Phone className="w-4 h-4" />
                Call: {PHONE}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            West Ashley's <span style={{ color: "#2D5F5D" }}>Neighborhood Body Shop</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Getting in an accident is stressful enough. You need a body shop that answers your call, gives you a straight estimate, and gets your car back in good shape. That's what we do — and our customers are genuinely relieved when the repair is done right.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Our shop is on Dulsey Road off Savannah Highway, which puts us right in the 29407 zip code. For most West Ashley residents, we're a short drive down local roads — no bridge crossing, no I-26 traffic.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            We offer <Link to="/collision-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>collision repair</Link>, <Link to="/dent-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>dent repair</Link> including paintless dent removal, and <Link to="/auto-painting" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>auto painting</Link> with factory color matching. All work is done in-house by our own team — no subcontracting, no surprises.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "#111" }}>Our <span style={{ color: "#2D5F5D" }}>Services</span></h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-white rounded-xl border border-gray-200 px-6 py-8 shadow-sm hover:border-[#2D5F5D] transition-colors">
                <div className="mb-4">{s.icon}</div>
                <h3 className="font-extrabold text-base uppercase tracking-wide mb-3" style={{ color: "#111" }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                <Link to={s.link} className="text-sm font-bold uppercase tracking-wide no-underline hover:opacity-80 transition-opacity" style={{ color: "#2D5F5D" }}>Learn More →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Content */}
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            We Know the Roads <span style={{ color: "#2D5F5D" }}>You Drive</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We see West Ashley damage patterns every week. Rear-end collisions on Sam Rittenberg Boulevard during rush hour. Parking lot door dings and scraped bumpers from the Citadel Mall lot. Side-swipes on Glenn McConnell Parkway. Deer strikes on the back roads out toward Bees Ferry. We've repaired all of it — on F-150s, Tahoes, BMWs, Audis, and everything in between.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Our shop is in the 29407 zip code. If you're in Avondale, Shadowmoss, the Bees Ferry corridor, or anywhere near Savannah Highway, you're minutes from our door. That proximity matters when your car is in the shop. You can drop it off before work and pick it up on your way home.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            We've been working on West Ashley vehicles since 2021. In that time, we've built {REVIEW_COUNT_DISPLAY} five-star Google reviews from neighbors who trusted us with their vehicles. We'd like to earn that same trust from you.
          </p>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            We Handle <span style={{ color: "#5A9E9B" }}>Your Insurance Claim</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Dealing with insurance after an accident is confusing. Most people don't know what the adjuster's estimate should cover, whether the parts being used are correct, or how to push back when the number is too low. We do.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We work with all insurance companies — yours or the other driver's. We contact the adjuster, review the estimate, file supplements when the work requires it, and fight for every dollar your repair deserves. Our customers tell us this is the part they were most worried about. It turns out to be the part we handle for them completely.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            You drop off your car. We handle the rest. You pick it up when it's done looking like nothing ever happened.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
            Why West Ashley Chooses <span style={{ color: "#5A9E9B" }}>Our Shop</span>
          </h2>
          <ul className="space-y-3">
            {[
              "Located right in West Ashley — 29407 zip code, less than 10 minutes from most neighborhoods",
              "We do our best to answer every call — same-day callbacks, no weeks-long wait just for an estimate",
              "Factory-trained with 15+ years on BMWs, Audis, and European vehicles — plus 95+ years of combined team experience",
              "All insurance companies accepted — we handle the entire claims process for you",
              "The people writing your estimate are the same people doing the repair",
              `${REVIEW_COUNT_DISPLAY} five-star Google reviews — the most of any independent shop in the area`,
              "All work done in-house — no subcontracting",
              "We work on everything from F-150s and Tahoes to BMWs, Audis, and Porsches",
            ].map((item, i) => (
              <motion.li key={i} initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} className="flex items-start gap-3 text-gray-400 text-sm">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#5A9E9B" }} />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Directions */}
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            Finding Us in <span style={{ color: "#2D5F5D" }}>West Ashley</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We're at 1949 Dulsey Road, Unit 202 — right off Savannah Highway in the 29407 zip code. From Avondale, Shadowmoss, Bees Ferry, or anywhere else in West Ashley, you're just a few minutes away.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            From Savannah Highway (US-17), turn onto Dulsey Road. We're in Unit 202. We're open Monday through Thursday 8am to 4pm, and Friday 8am to 12pm.
          </p>
          <div className="flex items-center gap-2 mt-6">
            <MapPin className="w-5 h-5" style={{ color: "#2D5F5D" }} />
            <span className="text-sm font-semibold" style={{ color: "#111" }}>1949 Dulsey Road, Unit 202, Charleston, SC 29407</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "#111" }}>Common <span style={{ color: "#2D5F5D" }}>Questions</span></h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="font-extrabold text-sm uppercase tracking-wide" style={{ color: "#111" }}>{faq.q}</span>
                  <ChevronDown className="w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-300" style={{ color: "#2D5F5D", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#111" }}>Also Serving <span style={{ color: "#2D5F5D" }}>Nearby Areas</span></h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "North Charleston", link: "/north-charleston" },
              { name: "Mount Pleasant", link: "/mount-pleasant" },
              { name: "Summerville", link: "/summerville" },
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

      {/* Bottom CTA */}
      <section style={{ backgroundColor: "#2D5F5D" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Your West Ashley <span style={{ color: "#1A2E2D" }}>Body Shop</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            We're right in your neighborhood. Free estimates. No surprises. Your car back looking like it never happened.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} onClick={() => trackPhoneClick("west-ashley")} className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline" style={{ backgroundColor: "#E8833A" }}>
              <Phone className="w-4 h-4" />
              Call for Free Estimate
            </a>
            <a href={PHONE_HREF} onClick={() => trackPhoneClick("west-ashley")} className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline" style={{ border: "2px solid #fff" }}>
              <Phone className="w-4 h-4" />
              Call: {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default WestAshley;
