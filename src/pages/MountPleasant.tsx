import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, CheckCircle, MapPin, Wrench, Paintbrush, CircleDot } from "lucide-react";
import { BUSINESS_NAME, PHONE, PHONE_HREF, DOMAIN } from "@/data/constants";

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
    a: "Yes. We work with every major insurance carrier. We handle the claims process, communicate with your adjuster, and file supplements if hidden damage is found. Your job is just to drop off the car.",
  },
  {
    q: "Can you fix hail damage?",
    a: "Yes. Hail damage is one of the most common repairs we do. If the paint is intact, we use paintless dent repair. For more severe hail damage, we combine PDR with traditional repair methods. Either way, the dents disappear.",
  },
  {
    q: "Do I need an appointment for an estimate?",
    a: "We prefer appointments so we can give you our full attention. Call us at (843) 380-7055 to schedule. Walk-ins are welcome when our schedule allows.",
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
          content="Trusted body shop near Mount Pleasant, SC. Collision repair, dent repair, and auto painting. 272 five-star reviews. Free estimates. Call (843) 380-7055."
        />
        <link rel="canonical" href={`${DOMAIN}/mount-pleasant`} />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ backgroundColor: "#242021" }} className="py-20">
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
              <span className="block" style={{ color: "#4A8A87" }}>Mount Pleasant, SC</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              Mount Pleasant drivers trust us for collision repair, dent repair, and auto painting. We're just across the Ravenel Bridge with honest prices and quality work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline" style={{ backgroundColor: "#2D5F5D" }}>
                Get Free Estimate
              </Link>
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline text-white" style={{ border: "2px solid #fff" }}>
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
            Auto Body Repair for <span style={{ color: "#2D5F5D" }}>Mount Pleasant</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Got in a fender bender on Coleman Boulevard? Found a new dent in the Towne Centre parking lot? Whether your vehicle needs major collision repair or a simple dent fix, we handle it all at our Charleston shop.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We offer <Link to="/collision-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>collision repair</Link>, <Link to="/dent-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>dent repair</Link> (including paintless dent removal), and <Link to="/auto-painting" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>auto painting</Link> with factory color matching. Every job is done in-house by our own technicians.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            With 95+ years of experience and 272 five-star Google reviews, we're the body shop Mount Pleasant residents trust for honest work and honest prices.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
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

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            Why Mount Pleasant Trusts <span style={{ color: "#2D5F5D" }}>Our Shop</span>
          </h2>
          <ul className="space-y-3">
            {[
              "Estimators who do the work — your price is accurate because we know exactly what the job takes",
              "All insurance companies accepted — we handle the entire process",
              "95+ years of hands-on collision repair experience",
              "272 five-star Google reviews from real customers",
              "No subcontracting — every repair stays in our shop",
              "Realistic timelines and no surprise charges",
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
            Getting Here from <span style={{ color: "#4A8A87" }}>Mount Pleasant</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            From Mount Pleasant, take the Arthur Ravenel Jr. Bridge (US-17 West) into downtown Charleston. Continue on the Crosstown (US-17) toward West Ashley. Our shop is at 1949 Dulsey Road, Unit 202. The drive takes about 20 to 25 minutes.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            From Shem Creek or the Towne Centre area, head south on Coleman Boulevard to US-17 and cross the bridge. From the Isle of Palms or Sullivan's Island, take the IOP Connector to US-17 West.
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
            Need a Body Shop Near <span style={{ color: "#242021" }}>Mount Pleasant?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Get a free estimate from Compass Collision. Just across the bridge. Honest pricing. Quality work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline" style={{ backgroundColor: "#242021" }}>Get Free Estimate</Link>
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline" style={{ border: "2px solid #fff" }}>
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
