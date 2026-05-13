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
    description: "From fender benders to major collision damage. We restore your vehicle and handle insurance directly.",
    link: "/collision-repair",
  },
  {
    icon: <CircleDot className="w-7 h-7" style={{ color: "#2D5F5D" }} />,
    title: "Dent Repair",
    description: "Paintless dent removal and traditional repair for door dings, hail damage, and parking lot dents.",
    link: "/dent-repair",
  },
  {
    icon: <Paintbrush className="w-7 h-7" style={{ color: "#2D5F5D" }} />,
    title: "Auto Painting",
    description: "Panel painting, bumper refinishing, and computerized color matching to your factory paint code.",
    link: "/auto-painting",
  },
];

const faqs = [
  {
    q: "How far is your shop from Mount Pleasant?",
    a: "Our shop is at 1949 Dulsey Road, Unit 202 in Charleston. From Mount Pleasant, the drive takes about 20 to 25 minutes depending on traffic. Take the Ravenel Bridge (US-17) to downtown Charleston, then head toward West Ashley on the Crosstown.",
  },
  {
    q: "Do you handle insurance claims for Mount Pleasant customers?",
    a: "Yes — and we handle the whole process, not just the paperwork. We communicate with your adjuster, write the estimate, and file supplements if we find hidden damage the insurance company missed. If your adjuster undershoots the estimate, we push back on your behalf. Your job is to drop off the car.",
  },
  {
    q: "What kinds of vehicles do you work on?",
    a: "We work on everything from F-150s and Silverados to BMWs, Audis, and Mercedes. Our owner is factory-trained with 15+ years on BMWs, Audis, and European vehicles. If you drive it, we can fix it.",
  },
  {
    q: "How long will my repair take?",
    a: "It depends on the extent of the damage. Minor dents and bumper repairs often take just a few days. Larger collision repairs with insurance involved typically run one to two weeks. We'll give you a realistic timeline upfront — not a number we can't hit.",
  },
  {
    q: "Can you fix hail damage?",
    a: "Yes. Hail damage is one of the most common repairs we do. If the paint is intact, we use paintless dent repair. For more severe hail damage, we combine PDR with traditional repair methods. Either way, the dents disappear.",
  },
  {
    q: "Do I need an appointment for an estimate?",
    a: "We prefer appointments so we can give you our full attention. Call us at (843) 380-7055 to schedule. Walk-ins are welcome when our schedule allows.",
  },
  {
    q: "Is it worth driving from Mount Pleasant across the bridge for a repair?",
    a: `Our customers from Mount Pleasant think so. The drive takes about 20 to 25 minutes and gets you honest estimates from the people who actually do the repairs. With ${REVIEW_COUNT_DISPLAY} five-star reviews, the quality speaks for itself. Many Mount Pleasant drivers have been coming back to us for years.`,
  },
  {
    q: "Can I call for a rough estimate before making the drive?",
    a: "Yes. Call us at (843) 380-7055 and describe the damage — we can give you a rough idea over the phone. The final price is confirmed when we see the car in person, but a quick call can help you decide whether to make the drive.",
  },
];

const MountPleasant = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Body Shop Mount Pleasant SC",
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
      name: "Mount Pleasant",
      sameAs: "https://en.wikipedia.org/wiki/Mount_Pleasant,_South_Carolina",
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
      { "@type": "ListItem", position: 2, name: "Mount Pleasant", item: `${DOMAIN}/mount-pleasant` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Body Shop Mount Pleasant SC | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content={`Trusted body shop near Mount Pleasant, SC. Collision repair, dent repair, and auto painting. ${REVIEW_COUNT_DISPLAY} five-star reviews. Free estimates. Call (843) 380-7055.`}
        />
        <link rel="canonical" href={`${DOMAIN}/mount-pleasant`} />
        <meta property="og:title" content={`Body Shop Mount Pleasant SC | ${BUSINESS_NAME}`} />
        <meta property="og:description" content={`Trusted body shop near Mount Pleasant, SC. Collision repair, dent repair, and auto painting. ${REVIEW_COUNT_DISPLAY} five-star reviews. Free estimates. Call (843) 380-7055.`} />
        <meta property="og:image" content="https://www.compasscollisioncharleston.com/og-image.jpg" />
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
            <div className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#2D5F5D" }}>
              Serving Mount Pleasant
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Body Shop
              <span className="block" style={{ color: "#5A9E9B" }}>Mount Pleasant, SC</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              Just had an accident? We're just across the Ravenel Bridge. We do our best to answer every call — same-day callbacks if we miss you. {REVIEW_COUNT_DISPLAY} five-star reviews. Free estimates. Insurance handled.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} onClick={() => trackPhoneClick("mount-pleasant")} className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline" style={{ backgroundColor: "#E8833A" }}>
                <Phone className="w-4 h-4" />
                Call for Free Estimate
              </a>
              <a href={PHONE_HREF} onClick={() => trackPhoneClick("mount-pleasant")} className="inline-flex items-center justify-center gap-2 font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline text-white" style={{ border: "2px solid #fff" }}>
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
            Auto Body Repair for <span style={{ color: "#2D5F5D" }}>Mount Pleasant Drivers</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Getting in an accident is stressful enough. You need a shop that answers, gives you a straight answer on the estimate, and gets your car fixed right. That's why Mount Pleasant customers make the drive across the Ravenel Bridge to us.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Our team handles <Link to="/collision-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>collision repair</Link>, <Link to="/dent-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>dent repair</Link> including paintless dent removal, and <Link to="/auto-painting" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>auto painting</Link> with computerized color matching. Every repair stays in-house — we don't subcontract.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            With 95+ years of combined experience and {REVIEW_COUNT_DISPLAY} five-star Google reviews, we're the body shop Mount Pleasant residents trust when they need it done right.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              Our <span style={{ color: "#2D5F5D" }}>Services</span>
            </h2>
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

      {/* Why Mount Pleasant Drivers Make the Trip */}
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            Why Mount Pleasant Drivers <span style={{ color: "#2D5F5D" }}>Make the Trip</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Mount Pleasant is one of the fastest-growing areas in the Charleston metro. With more cars on Coleman Boulevard, around Towne Centre, and on US-17, fender benders and parking lot dings are part of daily life. When it happens to you, you want a shop that actually calls you back.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We work on the vehicles Mount Pleasant drivers own — BMWs, Audis, F-150s, Silverados, Tahoes, and Range Rovers. Our owner is factory-trained with 15+ years on BMWs, Audis, and European vehicles, and we handle everything from a scraped bumper to a full collision repair with insurance. When we hand your car back, it looks like it never happened.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            The drive from Mount Pleasant takes about 20 to 25 minutes. Cross the Arthur Ravenel Jr. Bridge and head toward West Ashley on the Crosstown. Customers coming from Shem Creek or Belle Hall hop on Coleman Boulevard to US-17 and cross the bridge. From the Isle of Palms Connector, it's US-17 West from there.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            Drop your car off in the morning and we'll call you when it's ready. Most of our Mount Pleasant customers tell us the drive was well worth it — and many come back every time they need work done.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            What to Expect <span style={{ color: "#5A9E9B" }}>From Start to Finish</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            You call us and describe the damage. We get you in for a free estimate — usually within a day or two. The person who writes your estimate is the same person doing the repair. That means the price is accurate and there are no surprises.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            If you're going through insurance, we handle the adjuster for you. We file the claim, communicate with your carrier, and write supplements when hidden damage turns up. We push back if the insurance estimate comes in short. You shouldn't have to fight that battle yourself.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Minor repairs — door dings, scraped bumpers, small dents — often take just a few days. Larger collision jobs with insurance typically run one to two weeks. We'll give you a real timeline before we start. We keep you updated so your car never goes into a black hole.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            When your car comes back, it's clean inside and out. The paint matches. The panels line up. You won't be able to tell anything happened.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
            Why Mount Pleasant Trusts <span style={{ color: "#5A9E9B" }}>Our Shop</span>
          </h2>
          <ul className="space-y-3">
            {[
              `${REVIEW_COUNT_DISPLAY} five-star Google reviews — the highest-rated body shop in the Charleston area`,
              "95+ years of combined collision repair experience on our team",
              "Factory-trained with 15+ years on BMWs, Audis, and European vehicles",
              "Estimators who do the work — your price is accurate because we know exactly what the job takes",
              "We fight the insurance company for you — including supplements when hidden damage is found",
              "No subcontracting — every repair stays in our shop start to finish",
              "We return your car clean, matched, and looking like nothing happened",
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
            Getting Here from <span style={{ color: "#2D5F5D" }}>Mount Pleasant</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            From Mount Pleasant, take the Arthur Ravenel Jr. Bridge (US-17 West) into downtown Charleston. Continue on the Crosstown (US-17) toward West Ashley. Our shop is at 1949 Dulsey Road, Unit 202. The drive takes about 20 to 25 minutes.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            From Shem Creek or the Towne Centre area, head south on Coleman Boulevard to US-17 and cross the bridge. From the Isle of Palms or Sullivan's Island, take the IOP Connector to US-17 West and follow the Crosstown into West Ashley.
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
            Need a Body Shop Near <span style={{ color: "#1A2E2D" }}>Mount Pleasant?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Just across the Ravenel Bridge. Free estimates. Insurance handled. {REVIEW_COUNT_DISPLAY} five-star reviews. Same-day callbacks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} onClick={() => trackPhoneClick("mount-pleasant")} className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline" style={{ backgroundColor: "#E8833A" }}>
              <Phone className="w-4 h-4" />
              Call for Free Estimate
            </a>
            <a href={PHONE_HREF} onClick={() => trackPhoneClick("mount-pleasant")} className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline" style={{ border: "2px solid #fff" }}>
              <Phone className="w-4 h-4" />
              Call: {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MountPleasant;
