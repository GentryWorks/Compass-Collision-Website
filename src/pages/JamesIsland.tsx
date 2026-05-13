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
    description: "From minor fender benders to major accident damage. We restore your car and handle insurance for you.",
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
    q: "How far is your shop from James Island?",
    a: "Our shop is at 1949 Dulsey Road, Unit 202 in Charleston. From James Island, the drive takes about 10 to 15 minutes via Folly Road and the Crosstown. We're in the West Ashley area near Savannah Highway — a quick commute for most James Island residents.",
  },
  {
    q: "Do you work with insurance companies?",
    a: "Yes, and we handle the whole process for you. We communicate directly with your adjuster, submit all documentation, and file supplements if we find hidden damage during the repair. If the insurance company's estimate is too low — which happens often — we push back and get it corrected. You shouldn't have to fight that battle yourself.",
  },
  {
    q: "Can you fix parking lot dents and door dings?",
    a: "Yes. Parking lot damage is one of the most common repairs we do for James Island customers. If the paint is still intact, we use paintless dent repair to remove the dent without sanding or repainting. It's faster and costs less than traditional bodywork. We'll tell you upfront which method fits your car.",
  },
  {
    q: "How long does a typical repair take?",
    a: "Minor dent repairs can be done in a day or less. Collision repairs involving parts and painting typically run 3 to 7 business days, depending on parts availability and the extent of the damage. We'll give you a realistic timeline at your estimate — not a guess that changes later.",
  },
  {
    q: "Do I need an appointment?",
    a: "We prefer appointments so we can give you our full attention. Call us at (843) 380-7055 to schedule. Walk-ins are welcome when our schedule allows.",
  },
  {
    q: "Is your shop easy to reach from Folly Beach?",
    a: "Yes. From Folly Beach, take Folly Road north through James Island, then continue to the Crosstown (US-17) toward West Ashley. Our shop on Dulsey Road is about 20 to 25 minutes from Folly Beach, depending on traffic.",
  },
  {
    q: "Do you handle hail damage for James Island customers?",
    a: "Yes. Hail storms hit the Charleston coast regularly and James Island is no exception. If your car has hail dents, bring it in for a free estimate. We use paintless dent repair when the paint is intact, which saves you time compared to traditional bodywork.",
  },
  {
    q: "Can you work on my BMW, truck, or SUV?",
    a: "Yes. We work on everything from F-150s and Tacomas to BMWs, Audis, and Mercedes. Our team has experience with luxury vehicles and newer trucks — the kind of vehicles where paint matching and panel fit really matter. If you drive it, we can fix it.",
  },
];

const JamesIsland = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Body Shop James Island",
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
      name: "James Island, Charleston, SC",
      sameAs: "https://en.wikipedia.org/wiki/James_Island,_South_Carolina",
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
      { "@type": "ListItem", position: 2, name: "James Island", item: `${DOMAIN}/james-island` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Body Shop James Island | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content={`Trusted body shop near James Island. Collision repair, dent repair, and auto painting. 10-15 minutes away. ${REVIEW_COUNT_DISPLAY} five-star reviews. Free estimates. Call (843) 380-7055.`}
        />
        <link rel="canonical" href={`${DOMAIN}/james-island`} />
        <meta property="og:title" content={`Body Shop James Island | ${BUSINESS_NAME}`} />
        <meta property="og:description" content={`Trusted body shop near James Island. Collision repair, dent repair, and auto painting. 10-15 minutes away. ${REVIEW_COUNT_DISPLAY} five-star reviews. Free estimates. Call (843) 380-7055.`} />
        <meta property="og:image" content="https://compasscollisionsc.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#2D5F5D" }}>Serving James Island</div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Body Shop
              <span className="block" style={{ color: "#5A9E9B" }}>James Island</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              Just got in an accident? We do our best to answer every call — same-day callbacks if we miss you. We're 10 to 15 minutes from James Island, and we handle everything — repairs, insurance, all of it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} onClick={() => trackPhoneClick("james-island")} className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline" style={{ backgroundColor: "#E8833A" }}>
                <Phone className="w-4 h-4" />
                Call for Free Estimate
              </a>
              <a href={PHONE_HREF} onClick={() => trackPhoneClick("james-island")} className="inline-flex items-center justify-center gap-2 font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline text-white" style={{ border: "2px solid #fff" }}>
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
            Auto Body Repair for <span style={{ color: "#2D5F5D" }}>James Island</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Getting in an accident is stressful enough. You need a shop that answers, gives you an honest estimate, and fixes it right. Our shop is a quick drive from James Island via Folly Road and the Crosstown — and we do our best to answer every call.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Whether you picked up a dent in the Publix parking lot on Folly Road, got rear-ended on Maybank Highway, or clipped something squeezing through a tight parking lot near the Terracina strip — we handle it. We offer <Link to="/collision-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>collision repair</Link>, <Link to="/dent-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>dent repair</Link> (including paintless dent removal), and <Link to="/auto-painting" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>auto painting</Link> with factory color matching.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            Every repair stays in our shop. The people who write your estimate are the same people doing the work. That means your price is accurate and nothing gets lost in translation.
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
            Why James Island Vehicles <span style={{ color: "#2D5F5D" }}>Take More Damage</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            James Island is surrounded by water, and salt air is hard on paint and metal. A small door ding that might sit harmlessly for months inland can start to rust at the edges faster here. We see this regularly on trucks and SUVs that spend time near the water or park outside year-round.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            The island's roads add to it. Folly Road through the restaurant and shopping corridor is tight. Harbor View Road and Maybank Highway carry real traffic volume. The James Island Connector backs up at rush hour, which puts cars close together at highway speeds. We recently finished a repair on a Tacoma that got rear-ended on the Connector during the evening commute — we got the owner in quickly, handled the insurance, and had the truck back looking like nothing happened.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            Folly Beach weekend traffic also spills back through the island from May through September. Packed parking lots near the beach mean door dings on BMWs, Audis, and newer trucks happen constantly. If your vehicle looks like something happened to it, it probably did — and we can fix it.
          </p>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            We Handle the <span style={{ color: "#5A9E9B" }}>Insurance Process</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Insurance claims are confusing, and the adjuster's first estimate is often too low. We deal with this every week. Our team communicates directly with your insurance company, submits all repair documentation, and files supplements when we find damage the adjuster missed.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            You don't need to be the go-between. We've had customers tell us we called their insurance so they didn't have to make a single call themselves. That's how we prefer to handle it.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            We work with all major carriers — State Farm, USAA, Allstate, Geico, Progressive, and more. If the other driver's insurance is paying, we still represent your interests and make sure the repair is done right, not just done fast enough to close a claim.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
            Why James Island Trusts <span style={{ color: "#5A9E9B" }}>Our Shop</span>
          </h2>
          <ul className="space-y-3">
            {[
              `${REVIEW_COUNT_DISPLAY} five-star Google reviews — read them before you call`,
              "Just 10 to 15 minutes from James Island via the Crosstown",
              "We do our best to answer every call — same-day callbacks, no 2-week wait for an estimate",
              "Estimators do the repairs — accurate pricing from day one",
              "All insurance carriers accepted, claims handled for you",
              "95+ years of combined collision repair experience on our team",
              "Factory-trained with 15+ years on BMWs, Audis, and European vehicles",
              "No subcontracting — every repair stays in our shop",
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
            Getting Here from <span style={{ color: "#2D5F5D" }}>James Island</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Our shop is at 1949 Dulsey Road, Unit 202 in Charleston, SC 29407. From James Island, take Folly Road north toward downtown, then hop on the Crosstown (US-17) toward West Ashley. The drive takes about 10 to 15 minutes.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            From the Maybank Highway or Harbor View Road area, head north to connect to US-17. Either way, you're at our door in about the same time. Many James Island residents drop off their car on the way to work downtown and pick it up on the way back.
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
              { name: "West Ashley", link: "/west-ashley" },
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
            Need a Body Shop Near <span style={{ color: "#1A2E2D" }}>James Island?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            {REVIEW_COUNT_DISPLAY} five-star reviews. Free estimates. Same-day callbacks. Just 10 to 15 minutes from James Island — and your car comes back looking like it never happened.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={PHONE_HREF} onClick={() => trackPhoneClick("james-island")} className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline" style={{ backgroundColor: "#E8833A" }}>
              <Phone className="w-4 h-4" />
              Call for Free Estimate
            </a>
            <a href={PHONE_HREF} onClick={() => trackPhoneClick("james-island")} className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline" style={{ border: "2px solid #fff" }}>
              <Phone className="w-4 h-4" />
              Call: {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default JamesIsland;
