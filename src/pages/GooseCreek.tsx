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
    description: "Fender benders to major collision damage. We restore your vehicle and handle insurance directly.",
    link: "/collision-repair",
  },
  {
    icon: <CircleDot className="w-7 h-7" style={{ color: "#2D5F5D" }} />,
    title: "Dent Repair",
    description: "Paintless dent removal and traditional repair for door dings, hail damage, and body panel dents.",
    link: "/dent-repair",
  },
  {
    icon: <Paintbrush className="w-7 h-7" style={{ color: "#2D5F5D" }} />,
    title: "Auto Painting",
    description: "Panel painting, bumper refinishing, and factory color matching. Invisible collision paint repairs.",
    link: "/auto-painting",
  },
];

const faqs = [
  {
    q: "How far is your shop from Goose Creek?",
    a: "Our shop is at 1949 Dulsey Road, Unit 202 in Charleston. From Goose Creek, take US-52 South to I-26 South, then exit toward Savannah Highway. The drive is about 20 to 25 minutes.",
  },
  {
    q: "Do you work with USAA and military insurance?",
    a: "Yes. We work with USAA and every other insurance carrier. We handle the entire claims process for you — contacting your adjuster, filing supplements if we find hidden damage, and pushing back when an estimate comes in low. Many of our Goose Creek customers are military families and we understand how USAA works.",
  },
  {
    q: "Can I drop off my car early in the morning on my way to base?",
    a: "Yes. We open at 8am Monday through Friday. Many of our Joint Base Charleston customers drop their vehicle off first thing and pick it up on their way home. Call ahead at (843) 380-7055 and we'll have everything ready for a quick drop-off.",
  },
  {
    q: "How long does a typical repair take?",
    a: "It depends on the damage. A dent or minor panel repair can be done in one to three days. A full collision repair with insurance involved usually takes one to two weeks. We give you a realistic timeline upfront — and we stick to it. We won't park your car for weeks and then scramble.",
  },
  {
    q: "Do you work with all insurance companies?",
    a: "Yes. We work with every major insurance carrier. We communicate directly with your adjuster, file supplements when additional damage shows up during the repair, and we won't let your insurer shortchange your car. You don't have to deal with any of it.",
  },
  {
    q: "We're PCSing soon. Can you still fix my car in time?",
    a: "Yes. We've handled plenty of repairs for families on a PCS timeline. Let us know your move date when you call and we'll plan around it. We pre-order parts ahead of time and won't let the schedule drift. Call us at (843) 380-7055 and we'll figure it out together.",
  },
  {
    q: "What types of vehicles do you repair?",
    a: "We repair all makes and models — cars, trucks, and SUVs, foreign and domestic. We're BMW-certified and work on everything from F-150s and Tacomas to Audis, BMWs, and family SUVs. If it has collision damage, we fix it.",
  },
  {
    q: "Can you fix hail damage?",
    a: "Yes. We use paintless dent repair for hail damage when the paint is intact. For more severe hail damage, we combine PDR with traditional repair. Either way, the dents are gone when we're done.",
  },
];

const GooseCreek = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Collision Repair Goose Creek",
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
      name: "Goose Creek",
      sameAs: "https://en.wikipedia.org/wiki/Goose_Creek,_South_Carolina",
    },
    serviceType: "Collision Repair",
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
      { "@type": "ListItem", position: 2, name: "Goose Creek", item: `${DOMAIN}/goose-creek` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Collision Repair Goose Creek | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Collision repair near Goose Creek, SC. USAA accepted. We handle the insurance for you. 272 five-star reviews. Free estimates. Call (843) 380-7055."
        />
        <link rel="canonical" href={`${DOMAIN}/goose-creek`} />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#2D5F5D" }}>Serving Goose Creek</div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Collision Repair
              <span className="block" style={{ color: "#5A9E9B" }}>Goose Creek</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              Just got in an accident and can't get another shop to call you back? We pick up the phone, give you a free estimate fast, and handle every step with your insurance. 272 five-star reviews. About 20 minutes from Goose Creek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline" style={{ backgroundColor: "#E8833A" }}>Get Free Estimate</Link>
              <a href={PHONE_HREF} onClick={() => trackPhoneClick("goose-creek")} className="inline-flex items-center justify-center gap-2 font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline text-white" style={{ border: "2px solid #fff" }}>
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
            Trusted Collision Repair for <span style={{ color: "#2D5F5D" }}>Goose Creek</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We hear it all the time — you've called three shops and none of them called back. Or the first appointment they can offer is in six weeks. An accident is stressful enough on its own. We answer the phone, get you a same-day estimate, and take the repair from there.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Our team handles <Link to="/collision-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>collision repair</Link>, <Link to="/dent-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>dent repair</Link> (including paintless dent removal), and <Link to="/auto-painting" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>auto painting</Link> with factory color matching. Everything is done in-house by our own technicians.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            The person writing your estimate is the same person doing the repair. That's why our prices are accurate and there are no surprises when it's time to pick up your car.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
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

      {/* Military / Local Content */}
      <section className="bg-gray-50 border-t border-gray-200 py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            We Know the <span style={{ color: "#2D5F5D" }}>Military Community</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Goose Creek is home to a lot of military families stationed at Joint Base Charleston. Life near a joint base moves fast — early mornings, unpredictable schedules, and PCS moves that don't wait for anything. We've worked with enough of those families to understand what that pace feels like.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We work directly with USAA and know how their claims process runs. We contact the adjuster, handle supplements when we find hidden damage, and push back if the estimate doesn't cover what the car actually needs. You don't have to manage any of that. If you've got a move date coming up, tell us when you call — we'll plan the repair around your timeline.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We see a lot of trucks, SUVs, and family vehicles from this area — F-150s, Tacomas, Silverados, and larger SUVs that take hard use on the roads through Crowfield Plantation and along US-52. Whether you caught a fender bender on Red Bank Road or took a harder hit on I-26, we've fixed the same damage on the same vehicles many times.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            We're about 20 to 25 minutes from Goose Creek — take US-52 South to I-26 South, then exit toward Savannah Highway in West Ashley. Many of our Goose Creek customers drop off their vehicle on the way to base and pick it up on the way home. Call ahead and we'll have everything ready.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            Why Goose Creek Drivers <span style={{ color: "#2D5F5D" }}>Choose Us</span>
          </h2>
          <ul className="space-y-3">
            {[
              "272 five-star Google reviews — the highest-rated body shop in the Charleston area",
              "We answer the phone and return calls the same day — unlike most shops",
              "BMW-certified technicians who work on everything from F-150s to Audis",
              "USAA and all major insurance carriers accepted — we handle the claim for you",
              "95+ years of combined collision repair experience across our team",
              "All work done in-house — no subcontracting, no surprises",
              "Realistic timelines given upfront and honored — we won't sit on your car",
            ].map((item, i) => (
              <motion.li key={i} initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} className="flex items-start gap-3 text-gray-500 text-sm">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#2D5F5D" }} />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Directions */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
            Getting Here from <span style={{ color: "#5A9E9B" }}>Goose Creek</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            Our shop is at 1949 Dulsey Road, Unit 202 in Charleston, SC 29407. From Goose Creek, take US-52 South to I-26 South. Exit onto Savannah Highway toward West Ashley. The drive takes about 20 to 25 minutes depending on traffic.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            Coming from near Joint Base Charleston or the Crowfield Plantation area? Take I-26 South directly. From downtown Goose Creek near St. James Avenue, US-52 South is your quickest route.
          </p>
          <div className="flex items-center gap-2 mt-6">
            <MapPin className="w-5 h-5" style={{ color: "#5A9E9B" }} />
            <span className="text-gray-300 text-sm font-semibold">1949 Dulsey Road, Unit 202, Charleston, SC 29407</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
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
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#111" }}>Also Serving <span style={{ color: "#2D5F5D" }}>Nearby Areas</span></h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "North Charleston", link: "/north-charleston" },
              { name: "Mount Pleasant", link: "/mount-pleasant" },
              { name: "Summerville", link: "/summerville" },
              { name: "West Ashley", link: "/west-ashley" },
              { name: "James Island", link: "/james-island" },
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
            Need Collision Repair Near <span style={{ color: "#1A2E2D" }}>Goose Creek?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            We'll answer the phone, get you a free estimate, and handle the insurance from start to finish. About 20 minutes from Goose Creek. USAA accepted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline" style={{ backgroundColor: "#E8833A" }}>Get Free Estimate</Link>
            <a href={PHONE_HREF} onClick={() => trackPhoneClick("goose-creek")} className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline" style={{ border: "2px solid #fff" }}>
              <Phone className="w-4 h-4" />
              Call: {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default GooseCreek;
