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
    a: "Our shop is at 1949 Dulsey Road, Unit 202 in Charleston. From Goose Creek, the drive takes about 20 to 25 minutes via US-52 South to I-26 South, then exit toward Savannah Highway.",
  },
  {
    q: "Do you work with all insurance companies?",
    a: "Yes. We work with every major insurance carrier. We handle the claims process, communicate with your adjuster, and file supplements if we find additional damage during the repair. You don't have to deal with any of it.",
  },
  {
    q: "What types of vehicles do you repair?",
    a: "We repair all makes and models. Cars, trucks, and SUVs. Foreign and domestic. If it has collision damage, we fix it.",
  },
  {
    q: "Can you fix hail damage?",
    a: "Yes. We use paintless dent repair for hail damage when the paint is intact. For more severe hail damage, we combine PDR with traditional repair methods. Either way, the dents are gone when we're done.",
  },
  {
    q: "Do you work with USAA and military insurance?",
    a: "Yes. We work with USAA and every other insurance company. Many of our Goose Creek customers are military families with USAA coverage. We handle the entire claims process so you can focus on your schedule at the base.",
  },
  {
    q: "Can I drop off my car early in the morning on my way to base?",
    a: "Yes. We open at 8am Monday through Thursday and 8am on Friday. Many Goose Creek and Joint Base Charleston customers drop their car off first thing in the morning. Call ahead at (843) 380-7055 and we will have everything ready for a quick drop-off.",
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
          content="Collision repair near Goose Creek, SC. Honest estimates from techs who do the work. All insurance accepted. Free estimates. Call (843) 380-7055."
        />
        <link rel="canonical" href={`${DOMAIN}/goose-creek`} />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ backgroundColor: "#242021" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#2D5F5D" }}>Serving Goose Creek</div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Collision Repair
              <span className="block" style={{ color: "#4A8A87" }}>Goose Creek</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              Goose Creek drivers trust us for collision repair, dent repair, and auto painting. Honest estimates from technicians who actually do the work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline" style={{ backgroundColor: "#2D5F5D" }}>Get Free Estimate</Link>
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
            Goose Creek sits just north of Charleston along the US-52 corridor. Whether you were in an accident on Red Bank Road, got a door ding at a parking lot on St. James Avenue, or need paint repair after a fender bender, we handle it all.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We offer <Link to="/collision-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>collision repair</Link>, <Link to="/dent-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>dent repair</Link> (including paintless dent removal), and <Link to="/auto-painting" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>auto painting</Link> with factory color matching. Every repair is done in-house by our own team.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            The people writing your estimate have done the repair themselves. Your price is accurate because there is no gap between the person quoting the job and the person doing the work.
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

      {/* Local Content */}
      <section className="bg-gray-50 border-t border-gray-200 py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            Serving the Goose Creek and <span style={{ color: "#2D5F5D" }}>Military Community</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Goose Creek sits just north of North Charleston and is home to many military families stationed at Joint Base Charleston. Between the base traffic on US-52, the busy roads through Crowfield Plantation, and daily commutes down I-26, vehicles in this area take a beating.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Our shop is about 20 to 25 minutes from Goose Creek. Take US-52 South to I-26, then exit at Savannah Highway toward West Ashley. From the Crowfield area, you can hop on I-26 South directly. The highway drive is easy and our shop is simple to find once you exit.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            We work with military families regularly and understand the pace of life near a joint base. Whether you need a quick dent repair before a PCS move or full collision repair after a highway accident, we get the job done on time. We also work with USAA and all other military-affiliated insurance providers.
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
              "Estimators who do the work — honest prices from hands-on experience",
              "All insurance companies accepted and claims handled for you",
              "95+ years of collision repair experience in the industry",
              "272 five-star Google reviews from Charleston area customers",
              "All work done in-house — no subcontracting",
              "Realistic timelines and on-time delivery",
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
      <section style={{ backgroundColor: "#242021" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
            Getting Here from <span style={{ color: "#4A8A87" }}>Goose Creek</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            Our shop is at 1949 Dulsey Road, Unit 202 in Charleston, SC 29407. From Goose Creek, take US-52 South to I-26 South. Exit onto Savannah Highway and head toward West Ashley. The drive takes about 20 to 25 minutes.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            If you're coming from the Crowfield area or near Joint Base Charleston, take I-26 South directly. From downtown Goose Creek near St. James Avenue, take US-52 South.
          </p>
          <div className="flex items-center gap-2 mt-6">
            <MapPin className="w-5 h-5" style={{ color: "#4A8A87" }} />
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
            Need Collision Repair Near <span style={{ color: "#242021" }}>Goose Creek?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Get a free estimate from Compass Collision. About 20 minutes from Goose Creek. Honest pricing. Quality work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline" style={{ backgroundColor: "#242021" }}>Get Free Estimate</Link>
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
