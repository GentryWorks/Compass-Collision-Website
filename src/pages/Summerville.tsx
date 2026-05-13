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
    description: "Fender benders to major accident damage. We restore your vehicle and handle insurance so you don't have to.",
    link: "/collision-repair",
  },
  {
    icon: <CircleDot className="w-7 h-7" style={{ color: "#2D5F5D" }} />,
    title: "Dent Repair",
    description: "Paintless dent removal and traditional dent repair. Door dings, hail damage, and body panel dents.",
    link: "/dent-repair",
  },
  {
    icon: <Paintbrush className="w-7 h-7" style={{ color: "#2D5F5D" }} />,
    title: "Auto Painting",
    description: "Panel painting, bumper refinishing, and factory color matching. Your repair will look factory fresh.",
    link: "/auto-painting",
  },
];

const faqs = [
  {
    q: "How far is your shop from Summerville?",
    a: "Our shop is at 1949 Dulsey Road, Unit 202 in Charleston. From Summerville, the drive takes about 25 to 30 minutes via I-26 South. Take I-26 to the Savannah Highway exit and head toward West Ashley. It's a straight highway run — no complicated turns.",
  },
  {
    q: "Do you work with insurance for Summerville drivers?",
    a: "Yes. We work with every insurance company — State Farm, Geico, Allstate, USAA, and all others. We handle the claims paperwork, communicate directly with your adjuster, and file supplements if we find hidden damage after teardown. You don't have to fight the insurance company. We do that for you.",
  },
  {
    q: "How long does collision repair take?",
    a: "It depends on the extent of the damage and parts availability. Minor collision repairs often take three to five days. More extensive structural work can take one to two weeks. We give you a realistic timeline upfront and keep you updated throughout — your car won't go into a black hole.",
  },
  {
    q: "What vehicles do you work on?",
    a: "We repair all makes and models — BMWs, Audis, Mercedes, F-150s, Silverados, Tahoes, Subarus, Hondas, and everything in between. We're BMW-certified, so if you drive a luxury or European vehicle, you're in the right place. If it has collision damage, we can fix it.",
  },
  {
    q: "Is the drive worth it when there are body shops closer to Summerville?",
    a: "That's a fair question. Most Summerville drivers call the closer shops first and find they're booked for months — or they can't even get someone to answer the phone. We answer, we give free estimates fast, and we do the work right the first time. Customers who make the 25-minute drive tell us they wish they'd called us first.",
  },
  {
    q: "Do you do free estimates for Summerville residents?",
    a: "Yes. Every estimate is free no matter where you live. Drive down from Summerville, let us look at the damage, and we'll give you a straight answer on what it costs. You can also email us photos first if you want a rough idea before making the trip.",
  },
  {
    q: "Will my car look the same as before the accident?",
    a: "That's our goal on every job. We use factory color matching on all paint repairs — our customers regularly tell us they can't find the spot we fixed. We don't cut corners on paint or panel alignment. If it doesn't look right, we make it right.",
  },
];

const Summerville = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Collision Repair Summerville SC",
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
      name: "Summerville",
      sameAs: "https://en.wikipedia.org/wiki/Summerville,_South_Carolina",
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
      { "@type": "ListItem", position: 2, name: "Summerville", item: `${DOMAIN}/summerville` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Collision Repair Summerville SC | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Collision repair near Summerville, SC. 272 five-star reviews. Estimators who do the repairs. All insurance accepted. Free estimates. Call (843) 380-7055."
        />
        <link rel="canonical" href={`${DOMAIN}/summerville`} />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#2D5F5D" }}>Serving Summerville</div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Collision Repair
              <span className="block" style={{ color: "#5A9E9B" }}>Summerville, SC</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              You've been in an accident. The closer shops aren't answering. We're about 25 minutes down I-26 — and we pick up the phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline" style={{ backgroundColor: "#E8833A" }}>Get Free Estimate</Link>
              <a href={PHONE_HREF} onClick={() => trackPhoneClick("summerville")} className="inline-flex items-center justify-center gap-2 font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline text-white" style={{ border: "2px solid #fff" }}>
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
            Trusted Collision Repair for <span style={{ color: "#2D5F5D" }}>Summerville Drivers</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Getting into an accident is stressful enough. Then you call three shops and none of them answer. The one that does is booked for months. We hear this from Summerville drivers every week.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Our shop is in West Ashley — about 25 minutes from Summerville via I-26. We have 272 five-star Google reviews and we've been fixing cars in the Charleston area for decades. We offer <Link to="/collision-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>collision repair</Link>, <Link to="/dent-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>dent repair</Link> (including paintless dent removal), and <Link to="/auto-painting" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>auto painting</Link> with factory color matching.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            Here's something that matters: the people who write your estimate are the same people who do the repair. That means your price is honest from day one — no surprise charges after we've already taken your car apart.
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

      {/* Insurance Section */}
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            We Handle Your <span style={{ color: "#2D5F5D" }}>Insurance Claim</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Dealing with insurance after an accident is confusing and time-consuming. Most people don't know if the adjuster's estimate is fair. We do.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We work with every insurance company — State Farm, Allstate, Geico, USAA, Progressive, and all others. We talk to your adjuster directly. If we find hidden damage after we start the repair, we file the supplement and fight for what your car needs. You won't get a surprise bill.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            We've navigated hundreds of claims for Charleston-area drivers. If the insurance company sends a low estimate, we push back. If the other driver's insurance is giving you trouble, we help you handle it. You shouldn't have to do this alone.
          </p>
        </div>
      </section>

      {/* Local Content */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            Serving Summerville and the <span style={{ color: "#2D5F5D" }}>I-26 Corridor</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Summerville has grown from a quiet historic town into one of the most active suburbs in the Charleston area. Neighborhoods like Nexton, Cane Bay, and Oakbrook keep expanding — and so does the traffic on Dorchester Road and I-26. More cars means more accidents and more dents.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Our shop is about 25 minutes from downtown Summerville via I-26 South. It's a straight highway run. Take I-26 to the Savannah Highway exit, head toward West Ashley, and you're at our door on Dulsey Road. Customers from Nexton and Cane Bay can take US-17A to I-26 for an easy connection.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            We've repaired cars for Summerville families, daily commuters, and business owners. Whether you got rear-ended on your way down I-26 or backed into a pole at the Azalea Square shopping center, we fix the damage right. And we handle your insurance claim from start to finish.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
            Why Summerville Drivers <span style={{ color: "#5A9E9B" }}>Make the Drive</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-6">
            There are closer shops. But Summerville drivers come to us anyway — and most say they wish they'd called us first instead of wasting a week chasing shops that never called back.
          </p>
          <ul className="space-y-3">
            {[
              "Estimators who do the repairs — the price you get is the price you pay",
              "BMW-certified and experienced on all makes: trucks, SUVs, European and domestic vehicles",
              "272 five-star Google reviews from drivers across the Charleston area",
              "We handle every insurance company — you don't spend hours on hold",
              "95+ years of combined collision repair experience on our team",
              "No subcontracting — your car stays in our shop from drop-off to pickup",
              "Boutique shop feel — you talk to the person doing the work, not a front-desk gatekeeper",
            ].map((item, i) => (
              <motion.li key={i} initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} className="flex items-start gap-3 text-gray-400 text-sm">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#5A9E9B" }} />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* What to Expect */}
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            What to Expect When <span style={{ color: "#2D5F5D" }}>You Come In</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            You make the drive down from Summerville, drop the car, and we take it from there. We look at the damage in person — not just from photos — and give you a real estimate the same day.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Once your repair is scheduled, we keep you updated. You won't be left wondering what's happening. If we find additional damage after teardown, we call you before doing anything extra. No surprises.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            When your car is ready, it comes back clean. We vacuum and wipe it down before you pick it up. You'll leave feeling like the accident never happened — because that's the only result we're satisfied with.
          </p>
        </div>
      </section>

      {/* Directions */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
            Getting Here from <span style={{ color: "#5A9E9B" }}>Summerville</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            Our shop is at 1949 Dulsey Road, Unit 202 in Charleston, SC 29407. From Summerville, take I-26 South for about 20 miles. Exit onto Savannah Highway and head toward West Ashley. The drive takes about 25 to 30 minutes with normal traffic.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            If you're coming from the Nexton area or Cane Bay, take US-17A to I-26 South. From downtown Summerville, take Main Street to I-26 South.
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
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold mb-6" style={{ color: "#111" }}>Also Serving <span style={{ color: "#2D5F5D" }}>Nearby Areas</span></h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "North Charleston", link: "/north-charleston" },
              { name: "Mount Pleasant", link: "/mount-pleasant" },
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
            Done Waiting on Shops That <span style={{ color: "#1A2E2D" }}>Don't Call Back?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            We're 25 minutes from Summerville. Free estimates. 272 five-star reviews. We handle your insurance so you don't have to.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline" style={{ backgroundColor: "#E8833A" }}>Get Free Estimate</Link>
            <a href={PHONE_HREF} onClick={() => trackPhoneClick("summerville")} className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline" style={{ border: "2px solid #fff" }}>
              <Phone className="w-4 h-4" />
              Call: {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Summerville;
