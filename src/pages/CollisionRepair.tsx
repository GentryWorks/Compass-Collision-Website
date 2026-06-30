import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, CheckCircle, Shield, Clock, Wrench, MapPin } from "lucide-react";
import { BUSINESS_NAME, PHONE, PHONE_HREF, ADDRESS, DOMAIN, REVIEW_COUNT_DISPLAY } from "@/data/constants";
import heroImg from "@/assets/jeep-grand-cherokee-collision-repair-after-charleston.webp";
import { trackPhoneClick } from "@/utils/tracking";

const damageTypes = [
  "Fender benders and minor collisions",
  "Rear-end collisions",
  "Side-impact damage",
  "Front-end collisions",
  "Bumper damage and replacement",
  "Quarter panel damage",
  "Door damage and replacement",
  "Hood and trunk damage",
  "Multi-vehicle accident damage",
];

const processSteps = [
  {
    step: "01",
    title: "Free Estimate — Same Day",
    text: "Bring your car in or send us photos. We look at the damage and give you an honest price. No charge. No pressure. No obligation.",
  },
  {
    step: "02",
    title: "Insurance Coordination",
    text: "We call your adjuster directly. We handle the paperwork, photos, and supplements. If the insurance estimate is too low, we fight it — you don't have to.",
  },
  {
    step: "03",
    title: "Rental Car Coordination",
    text: "Need a rental while your car is in the shop? We can coordinate that for you. We've even driven customers to the rental location ourselves.",
  },
  {
    step: "04",
    title: "Repair and Restore",
    text: "We restore every panel and paint it to factory color. Everything is done in-house — no farming out to subcontractors.",
  },
  {
    step: "05",
    title: "Final Inspection and Pickup",
    text: "We inspect every repair before you see the car. The damage is invisible. You pick up a vehicle that looks like the accident never happened.",
  },
];

const faqs = [
  {
    q: "How long does collision repair take?",
    a: "Most collision repairs take 3 to 10 business days depending on the severity. Minor fender benders are often done in 3 to 5 days. Larger repairs or jobs requiring special-order parts can take 2 weeks or more. We give you a realistic timeline before we start and keep you updated the whole way through.",
  },
  {
    q: "Do you work with all insurance companies?",
    a: "Yes. We work with every major carrier — State Farm, GEICO, Progressive, Allstate, USAA, and all others. We communicate directly with your adjuster, handle all the paperwork, and file supplements if additional damage turns up during the repair. You don't have to make a single call to your insurance company if you don't want to.",
  },
  {
    q: "Will my car look the same after the repair?",
    a: "That's the goal of every repair we do. We use factory-spec parts and match your paint to the exact color code. Paint matching is something we take seriously — especially on harder colors like red, pearl white, and two-tone finishes. When we're done, you shouldn't be able to tell where the damage was. If you can, we're not done yet.",
  },
  {
    q: "Do I need to get multiple estimates?",
    a: "No. South Carolina law gives you the right to choose any body shop you want. You don't need multiple estimates, and your insurance company cannot require you to use a specific shop. You choose where your car gets fixed.",
  },
  {
    q: "What if there is hidden damage under the panels?",
    a: "Hidden damage is common in collisions — especially in rear-end hits where the bumper cover can look fine but the energy absorber and reinforcement bar behind it are crushed. If we find additional damage during the repair, we document it with photos and file a supplement with your insurance company. We won't proceed with extra work without your approval first.",
  },
  {
    q: "Do you use OEM parts or aftermarket parts?",
    a: "We use OEM (original equipment manufacturer) parts whenever possible. These are the same parts your vehicle was built with, made to the same spec. If your insurance company pushes for aftermarket parts, we'll let you know and explain the difference. Your car should go back together the way it came from the factory.",
  },
  {
    q: "What should I do right after an accident?",
    a: "First, make sure everyone is safe and call the police if there are injuries or significant damage. Take photos of the vehicles, the scene, and any damage before anything is moved. Get the other driver's insurance information. Then call us — we can walk you through the claim process from there and tell you exactly what steps to take next.",
  },
  {
    q: "Can you coordinate my rental car?",
    a: "Yes. If your repair is covered by insurance, you may be entitled to a rental car while your vehicle is in the shop. We can coordinate that directly with your insurance company. We've even driven customers to the rental location ourselves so they're not stranded.",
  },
  {
    q: "Do you repair luxury and European vehicles?",
    a: "Yes. We repair all makes and models — BMWs, Audis, Mercedes, Porsches, Lexus, and high-end trucks like the F-150, Silverado, and Ram. Our owner is factory-trained with 15+ years on BMWs, Audis, and European vehicles. If you drive it, we can fix it properly.",
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
          content={`Collision repair in Charleston, SC. ${REVIEW_COUNT_DISPLAY} five-star reviews. Free same-day estimates. We handle your insurance claim. Call (843) 380-7055.`}
        />
        <link rel="canonical" href={`${DOMAIN}/collision-repair`} />
        <link rel="preload" as="image" href={heroImg} type="image/webp" />
        <meta property="og:title" content={`Collision Repair Charleston SC | ${BUSINESS_NAME}`} />
        <meta property="og:description" content={`Collision repair in Charleston, SC. ${REVIEW_COUNT_DISPLAY} five-star reviews. Free same-day estimates. We handle your insurance claim. Call (843) 380-7055.`} />
        <meta property="og:image" content="https://www.compasscollisioncharleston.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[60svh] flex items-center overflow-hidden" style={{ backgroundColor: "#1A2E2D" }}>
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
              {REVIEW_COUNT_DISPLAY} Five-Star Reviews in Charleston
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Collision Repair
              <span className="block" style={{ color: "#5A9E9B" }}>
                Charleston, SC
              </span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              Your car got hit. Now you need it fixed right. We handle everything from minor fender benders to major collision damage — and we deal with your insurance company so you don't have to.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneClick("collision-repair")}
                className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
                style={{ backgroundColor: "#B85B15" }}
              >
                <Phone className="w-4 h-4" />
                Call for Free Estimate
              </a>
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneClick("collision-repair")}
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
            Collision Repair in Charleston Done <span style={{ color: "#2D5F5D" }}>Right</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            If you've been in an accident, you need a collision repair shop that takes your call, gives you an honest estimate, and gets your car fixed right. That's what we do at Compass Collision.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We do our best to answer every call — and if we miss you, we'll call back the same day. We offer free same-day estimates. And we have {REVIEW_COUNT_DISPLAY} five-star Google reviews from Charleston drivers who trusted us to get the job done.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Our team brings 95+ years of combined experience in the collision repair industry. That experience shows in how we write estimates, how we handle your insurance claim, and how your car looks when you pick it up.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            We work on everything from F-150s and Silverados to BMWs, Audis, and Porsches. Our owner is factory-trained with 15+ years on BMWs, Audis, and European vehicles, so even high-end repairs are handled with the precision your vehicle requires.
          </p>
        </div>
      </section>

      {/* What We Repair */}
      <section className="bg-white py-20">
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

      {/* Why Choose Us */}
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            Why Charleston Trusts Us for <span style={{ color: "#2D5F5D" }}>Collision Repair</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Most body shops split the work. One person writes the estimate. A different person does the repair. That gap is where surprises happen — unexpected charges, delays, and repairs that don't match the original quote.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We do it differently. The people writing your estimate have done the repair hundreds of times themselves. They know exactly what the job takes because they've done it with their own hands. Your price is accurate from day one.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We use OEM (original equipment manufacturer) parts whenever possible. These are the same parts your vehicle was built with — not aftermarket substitutes. If your insurance company pushes for cheaper parts, we'll flag it and explain the difference before anything is ordered.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Paint matching is something we take seriously. We match your vehicle's exact factory color code. For difficult finishes — two-tone paint, pearl white, dark red — we take extra time to get it right. Color matching done properly is what makes a repair truly invisible.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            The shop is clean. We keep you updated throughout the repair. And when you pick up your car, it's been cleaned and vacuumed. Small things — but they tell you a lot about how a shop operates.
          </p>
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
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3 text-white">
              We Handle Your <span style={{ color: "#5A9E9B" }}>Insurance Claim</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Dealing with insurance after an accident is stressful. We take that off your plate completely.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="w-6 h-6" />,
                title: "All Carriers Welcome",
                text: "We work with every insurance company — State Farm, GEICO, Progressive, Allstate, USAA, and all others. We've handled hundreds of claims across every major carrier.",
              },
              {
                icon: <Wrench className="w-6 h-6" />,
                title: "We Fight Low Estimates",
                text: "Insurance adjusters sometimes write estimates that don't cover the full repair. When that happens, we document the gap, file a supplement, and fight for the dollars your repair actually requires.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "No Surprise Bills",
                text: "If we find hidden damage during the repair, we photograph it and file a supplement with your insurance before touching it. You're never charged for work you didn't approve.",
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
                <div className="mb-4 text-[#1A2E2D]">{item.icon}</div>
                <h3 className="font-extrabold text-sm uppercase tracking-wide mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
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
            Need Collision Repair in <span style={{ color: "#1A2E2D" }}>Charleston?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Free estimates. No runaround. We do our best to answer every call — same-day callbacks if we miss you. Call us and we'll get you an estimate the same day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneClick("collision-repair")}
              className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
              style={{ backgroundColor: "#B85B15" }}
            >
              <Phone className="w-4 h-4" />
              Call for Free Estimate
            </a>
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneClick("collision-repair")}
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
