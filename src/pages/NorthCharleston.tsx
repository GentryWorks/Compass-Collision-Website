import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, CheckCircle, MapPin, Wrench, Paintbrush, CircleDot } from "lucide-react";
import { BUSINESS_NAME, PHONE, PHONE_HREF, DOMAIN } from "@/data/constants";
import { trackPhoneClick } from "@/utils/tracking";

const services = [
  {
    icon: <Wrench className="w-7 h-7" style={{ color: "#2D5F5D" }} />,
    title: "Collision Repair",
    description: "Fender benders to major wrecks. We restore your car to pre-accident condition and handle the insurance process for you.",
    link: "/collision-repair",
  },
  {
    icon: <CircleDot className="w-7 h-7" style={{ color: "#2D5F5D" }} />,
    title: "Dent Repair",
    description: "Paintless dent removal and traditional dent repair. Door dings, hail damage, and parking lot dents fixed right.",
    link: "/dent-repair",
  },
  {
    icon: <Paintbrush className="w-7 h-7" style={{ color: "#2D5F5D" }} />,
    title: "Auto Painting",
    description: "Panel painting, bumper refinishing, and factory color matching. Your repair will be invisible when we're done.",
    link: "/auto-painting",
  },
];

const faqs = [
  {
    q: "How far is your shop from North Charleston?",
    a: "Our shop is located at 1949 Dulsey Road, Unit 202 in Charleston. From North Charleston, the drive is about 15 to 20 minutes depending on where you are and traffic. We're easily accessible from I-26 and I-526.",
  },
  {
    q: "Do you work with insurance companies for North Charleston customers?",
    a: "Yes — and we don't just work with them, we fight for you when needed. We handle the entire claims process: paperwork, adjuster communication, and supplement filing when the initial estimate is short. We've had adjusters submit low estimates and we've pushed back every time. You don't have to do anything except drop off your car and pick it up when it's ready.",
  },
  {
    q: "How long does collision repair take?",
    a: "Most repairs are done in 3 to 10 business days depending on the damage and parts availability. We give you an honest timeline up front — not a vague window that keeps moving. We also pre-order parts before your drop-off date whenever possible so your car isn't sitting while we wait on a delivery.",
  },
  {
    q: "What should I expect when I bring my car in?",
    a: "When you arrive, one of our estimators — who are also the technicians doing the repair — will look at the damage with you and walk you through what needs to happen. You'll get a free written estimate the same day. If you're filing an insurance claim, we'll take it from there and contact the adjuster directly. Most customers drop off their car and don't have to think about it again until we call to say it's ready.",
  },
  {
    q: "What types of vehicles do you repair?",
    a: "We repair all makes and models — cars, trucks, and SUVs, foreign and domestic. We work on BMWs, Audis, Lexus, Mercedes, F-150s, Silverados, and everything in between. If your vehicle has collision damage, we can fix it.",
  },
  {
    q: "Do I need an appointment?",
    a: "We prefer appointments so we can give you our full attention. Call us at (843) 380-7055 and we'll schedule a time that works for you. Walk-ins are welcome when our schedule allows.",
  },
  {
    q: "I got in an accident on I-26 near the airport. Can you help?",
    a: "Yes. We handle collision damage from highway accidents regularly — the I-26 and I-526 corridor sends us cars every week. Bring your car in or have it towed to our shop at 1949 Dulsey Road in Charleston. We'll assess the damage, give you a free estimate, and work with your insurance company directly.",
  },
  {
    q: "Do you offer free estimates for North Charleston residents?",
    a: "Yes. Every estimate is free no matter where you live. Drive in from North Charleston, show us the damage, and we'll give you a straight answer on the spot. You can also call us to describe the damage for a rough idea before making the trip.",
  },
];

const NorthCharleston = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Auto Body Shop North Charleston SC",
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
      name: "North Charleston",
      sameAs: "https://en.wikipedia.org/wiki/North_Charleston,_South_Carolina",
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
      { "@type": "ListItem", position: 2, name: "North Charleston", item: `${DOMAIN}/north-charleston` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Body Shop North Charleston SC | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Body shop serving North Charleston, SC. 272 five-star reviews. Free same-day estimates. We handle your insurance. Call (843) 380-7055."
        />
        <link rel="canonical" href={`${DOMAIN}/north-charleston`} />
        <meta property="og:title" content={`Body Shop North Charleston SC | ${BUSINESS_NAME}`} />
        <meta property="og:description" content="Body shop serving North Charleston, SC. 272 five-star reviews. Free same-day estimates. We handle your insurance. Call (843) 380-7055." />
        <meta property="og:image" content="https://compasscollisionsc.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
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
              Serving North Charleston
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Body Shop
              <span className="block" style={{ color: "#5A9E9B" }}>
                North Charleston, SC
              </span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              Just been in an accident? We know you've probably already called two other shops and got voicemails. We answer. Free estimates same day. We're 15 minutes down I-26.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneClick("north-charleston")}
                className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
                style={{ backgroundColor: "#E8833A" }}
              >
                <Phone className="w-4 h-4" />
                Call for Free Estimate
              </a>
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneClick("north-charleston")}
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
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            A Body Shop Near North Charleston <span style={{ color: "#2D5F5D" }}>That Actually Answers</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            After an accident, the last thing you need is to spend two hours calling shops that won't pick up or tell you the wait is two months for even an estimate. We hear that story every week. We answer the phone, get you in fast, and we'll have a free written estimate ready the same day you come in.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We handle <Link to="/collision-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>collision repair</Link>, <Link to="/dent-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>dent repair</Link> (including paintless dent removal), and <Link to="/auto-painting" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>auto painting</Link> with factory color matching. Everything is done in-house — no subcontracting.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We also handle the insurance process for you. That means we call the adjuster, we review the estimate for accuracy, and we push back when the initial figure isn't right. You shouldn't have to fight your own insurance company after an accident — we do that part.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            Our shop is at 1949 Dulsey Road in Charleston, about 15 to 20 minutes from most North Charleston neighborhoods. We've got 272 five-star Google reviews and our team carries 95+ years of combined collision repair experience.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              Services for <span style={{ color: "#2D5F5D" }}>North Charleston</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Three core services. All done in-house by our own team.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 px-6 py-8 shadow-sm hover:border-[#2D5F5D] transition-colors"
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className="font-extrabold text-base uppercase tracking-wide mb-3" style={{ color: "#111" }}>
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                <Link
                  to={s.link}
                  className="text-sm font-bold uppercase tracking-wide no-underline hover:opacity-80 transition-opacity"
                  style={{ color: "#2D5F5D" }}
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Content */}
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            We See North Charleston Cars <span style={{ color: "#2D5F5D" }}>Every Week</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            The I-26 and I-526 corridor is one of the busiest stretches in the Lowcountry. Stop-and-go near the airport, merging lanes near the Cosco Oil Road interchange, heavy commercial traffic through North Charleston — rear-end and sideswipe damage from that stretch shows up in our shop regularly. We know what those repairs look like and what they take.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We also see parking lot damage from the Tanger Outlets and the shopping centers along Rivers Avenue — door dings, scraped bumpers, and slow-speed impacts that still leave real damage. Whether you live near Park Circle, off Ashley Phosphate Road, or near the airport, getting here is straightforward.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Take I-26 South to the Savannah Highway exit and you're practically at our door. Many customers drop their car off in the morning and pick it up on their way home. Most repairs are done in 3 to 10 business days — we give you a real timeline up front, not a vague range that keeps moving.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            When the work is done, the goal is always the same: your car should look like it never happened. That's not marketing language — that's the phrase we hear from customers over and over, and it's the standard we hold every repair to.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
            Why North Charleston Drivers <span style={{ color: "#5A9E9B" }}>Choose Us</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-6">
            The estimators who write your quote are the same technicians who do the repair. That means the price you're given on day one is the price you pay — no surprises when you come to pick up your car. We see shops get this wrong all the time, and it's the complaint we hear most often from customers who tried somewhere else first.
          </p>
          <ul className="space-y-3">
            {[
              "272 five-star Google reviews from customers across the Charleston area",
              "95+ years of combined collision repair experience on our team",
              "Free same-day estimates — no appointment needed for a quote",
              "We handle the full insurance process: adjuster calls, paperwork, supplement filing",
              "We push back when insurance estimates come in short — you don't have to fight that battle",
              "All work done in-house — no subcontracting, no outsourcing",
              "Most repairs completed in 3 to 10 business days",
              "We work on all makes and models, including BMW, Audi, Mercedes, Ford, and Chevy",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3 text-gray-400 text-sm"
              >
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
            Getting Here from <span style={{ color: "#2D5F5D" }}>North Charleston</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Our shop is at 1949 Dulsey Road, Unit 202 in Charleston, SC 29407. From North Charleston, take I-26 South to the Savannah Highway exit, then head toward West Ashley. The drive is about 15 to 20 minutes depending on traffic.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            From the Park Circle area, take Rivers Avenue south to I-26 and follow the same route. From the Tanger Outlets area or near the airport, take I-526 West to I-26 South. We've got parking on-site and a clean waiting area with coffee when you arrive.
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
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              Common <span style={{ color: "#2D5F5D" }}>Questions</span>
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

      {/* Other Areas */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#111" }}>
            Also Serving <span style={{ color: "#2D5F5D" }}>Nearby Areas</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
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

      {/* Bottom CTA */}
      <section style={{ backgroundColor: "#2D5F5D" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Need a Body Shop Near <span style={{ color: "#1A2E2D" }}>North Charleston?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            We answer the phone, give you a free estimate the same day, and handle your insurance from start to finish. Just 15 minutes from North Charleston.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneClick("north-charleston")}
              className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
              style={{ backgroundColor: "#E8833A" }}
            >
              <Phone className="w-4 h-4" />
              Call for Free Estimate
            </a>
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneClick("north-charleston")}
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

export default NorthCharleston;
