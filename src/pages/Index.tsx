import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Wrench, Paintbrush, CircleDot, MapPin, ChevronDown, Star, Shield, Clock, Users } from "lucide-react";
import { PHONE, PHONE_HREF, ADDRESS, DOMAIN } from "@/data/constants";

const services = [
  {
    icon: <Wrench className="w-7 h-7" style={{ color: "#3B6B96" }} />,
    title: "Collision Repair",
    description: "Fender benders to major wrecks. We restore your car to the way it looked before the accident. We work with all insurance companies.",
    link: "/collision-repair",
  },
  {
    icon: <CircleDot className="w-7 h-7" style={{ color: "#3B6B96" }} />,
    title: "Dent Repair",
    description: "Parking lot dings. Door dents. Hail damage. We remove dents without affecting your factory paint whenever possible.",
    link: "/dent-repair",
  },
  {
    icon: <Paintbrush className="w-7 h-7" style={{ color: "#3B6B96" }} />,
    title: "Auto Painting",
    description: "Panel painting. Bumper refinishing. Color matching down to the exact factory code. Your repair will be invisible.",
    link: "/auto-painting",
  },
];

const stats = [
  { value: "2021", label: "Serving Charleston" },
  { value: "$3K", label: "Average repair value" },
  { value: "100%", label: "Satisfaction focus" },
  { value: "4", label: "Core services" },
];

const reasons = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Estimators Who Do the Work",
    description: "The person writing your estimate has done the repair hundreds of times. You get an honest price because we know exactly what the job takes.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "No Surprises",
    description: "We tell you the real cost upfront. No hidden fees. No surprise charges after the work is done.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "On-Time Delivery",
    description: "We give you a realistic timeline and stick to it. Your car is ready when we say it will be.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "People Over Profit",
    description: "We care about people more than money. Every repair is done the right way — even the parts you can't see.",
  },
];

const serviceAreas = [
  { name: "Charleston", link: "/" },
  { name: "North Charleston", link: "/north-charleston" },
  { name: "Mount Pleasant", link: "/mount-pleasant" },
  { name: "Summerville", link: "/summerville" },
  { name: "West Ashley", link: "/west-ashley" },
  { name: "James Island", link: "/james-island" },
  { name: "Goose Creek", link: "/goose-creek" },
  { name: "Johns Island" },
  { name: "Kiawah Island" },
  { name: "Ravenel" },
];

const faqs = [
  {
    q: "Do you work with insurance companies?",
    a: "Yes. We work with all major insurance carriers. We handle the paperwork and communicate directly with your adjuster so you don't have to.",
  },
  {
    q: "How long does a typical collision repair take?",
    a: "Most repairs take 3 to 10 business days depending on the damage. We give you an honest timeline before we start and keep you updated throughout the process.",
  },
  {
    q: "Do I need an appointment for an estimate?",
    a: "We prefer appointments so we can give you our full attention. Call us at (843) 380-7055 or fill out our contact form and we will get back to you the same day.",
  },
  {
    q: "What types of vehicles do you repair?",
    a: "We repair all makes and models. Cars, trucks, and SUVs. Foreign and domestic.",
  },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>Auto Body Shop Charleston SC | Compass Collision</title>
        <meta
          name="description"
          content="Charleston's trusted auto body shop. Collision repair, dent repair, and auto painting. Honest estimates from techs who do the work. Call (843) 380-7055."
        />
        <link rel="canonical" href={`${DOMAIN}/`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoBodyShop",
            name: "Compass Collision",
            url: DOMAIN,
            telephone: "843-380-7055",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1949 Dulsey Road, Unit 202",
              addressLocality: "Charleston",
              addressRegion: "SC",
              postalCode: "29407",
            },
            areaServed: [
              "Charleston", "North Charleston", "Mount Pleasant", "Summerville",
              "West Ashley", "James Island", "Goose Creek", "Johns Island",
              "Kiawah Island", "Ravenel",
            ],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                opens: "08:00",
                closes: "16:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Friday",
                opens: "08:00",
                closes: "12:00",
              },
            ],
            priceRange: "$$",
            description: "Charleston's trusted auto body and collision repair shop. Honest estimates from technicians who do the work.",
          })}
        </script>
      </Helmet>

      {/* Trust Bar */}
      <div style={{ backgroundColor: "#3B6B96" }} className="text-white text-[13px] font-semibold py-2.5 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-10 text-center">
          <span>Serving Charleston Since 2021</span>
          <span>Insurance Claims Welcome</span>
          <span>Free Estimates</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[85svh] flex items-center overflow-hidden" style={{ backgroundColor: "#000000" }}>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-[#1a1a1a] to-black" />
        <div className="max-w-[1200px] mx-auto px-6 z-10 w-full py-20">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="max-w-2xl"
          >
            <div
              className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "#3B6B96" }}
            >
              Charleston's Trusted Body Shop
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Auto Body Shop
              <span className="block" style={{ color: "#5A8DB8" }}>
                Charleston, SC.
              </span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              Collision repair. Dent repair. Auto painting. Honest estimates from technicians who actually do the work. No shortcuts. No surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
                style={{ backgroundColor: "#3B6B96" }}
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

      {/* Stats Bar */}
      <section style={{ backgroundColor: "#3B6B96" }} className="py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-4xl font-extrabold mb-1 text-white">{s.value}</p>
                <p className="text-[#9AB8D3] text-sm uppercase tracking-widest font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro — SEO body copy */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center" style={{ color: "#111" }}>
            Charleston's Honest <span style={{ color: "#3B6B96" }}>Auto Body Shop</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Your car got hit. Now you need it fixed. You need someone who tells you the truth about what it costs and how long it takes. That is what we do at Compass Collision.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We are a collision repair and auto body shop in Charleston, SC. We handle everything from minor dents to major collision damage. Every estimate is written by a technician who has done the repair before. That means your price is accurate from the start.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Most body shops split the work. One person writes the estimate. A different person does the repair. That gap is where surprises happen. We do it differently. Our estimators work on cars. They know what the job takes because they have done it with their own hands.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            We work with all major insurance companies. We handle the paperwork and deal with your adjuster directly. You drop off your car. We fix it right. You pick it up looking like nothing ever happened.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              What We <span style={{ color: "#3B6B96" }}>Fix</span>
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
                className="bg-white rounded-xl border border-gray-200 px-6 py-8 shadow-sm hover:border-[#3B6B96] transition-colors"
              >
                <div className="mb-4">{s.icon}</div>
                <h3 className="font-extrabold text-base uppercase tracking-wide mb-3" style={{ color: "#111" }}>
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                <Link
                  to={s.link}
                  className="text-sm font-bold uppercase tracking-wide no-underline hover:opacity-80 transition-opacity"
                  style={{ color: "#3B6B96" }}
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ backgroundColor: "#000000" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3 text-white">
              Why Charleston Trusts <span style={{ color: "#5A8DB8" }}>Compass Collision</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              We care about people more than money. That shows up in every repair we do.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl px-6 py-8 border border-white/10"
              >
                <div className="mb-4 text-[#5A8DB8]">{r.icon}</div>
                <h3 className="font-extrabold text-sm uppercase tracking-wide mb-3 text-white">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview — placeholder */}
      <section style={{ backgroundColor: "#000000" }} className="py-20 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-3 text-white">
              Our <span style={{ color: "#5A8DB8" }}>Work</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Real repairs on real cars. Photos coming soon.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 aspect-[4/3] flex items-center justify-center"
                style={{ backgroundColor: "#1a1a1a" }}
              >
                <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide">Photo {i + 1}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline text-white"
              style={{ border: "2px solid #fff" }}
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center" style={{ color: "#111" }}>
            How It <span style={{ color: "#3B6B96" }}>Works</span>
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Get a Free Estimate",
                text: "Call us or fill out our form. We will look at the damage and give you an honest price. No pressure. No obligation.",
              },
              {
                step: "02",
                title: "We Handle Insurance",
                text: "If you are going through insurance, we deal with your adjuster directly. We handle the paperwork so you do not have to.",
              },
              {
                step: "03",
                title: "Drop Off Your Car",
                text: "Bring your car in on the scheduled date. We start work right away. We keep you updated on progress throughout the repair.",
              },
              {
                step: "04",
                title: "Pick Up Like New",
                text: "Your car is ready on time. The repair is invisible. You drive away like the accident never happened.",
              },
            ].map((item, i) => (
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
                  style={{ backgroundColor: "#3B6B96" }}
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

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              Common <span style={{ color: "#3B6B96" }}>Questions</span>
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
                    style={{ color: "#3B6B96", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
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
          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="text-sm font-bold uppercase tracking-wide hover:opacity-80 transition-opacity no-underline"
              style={{ color: "#3B6B96" }}
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              Serving the <span style={{ color: "#3B6B96" }}>Charleston Area</span>
            </h2>
            <p className="text-gray-500 text-base">{ADDRESS}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area, i) => {
              const inner = (
                <span className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
                  <MapPin className="w-4 h-4" style={{ color: "#3B6B96" }} />
                  <span className="text-sm font-bold" style={{ color: "#111" }}>{area.name}</span>
                </span>
              );
              return area.link ? (
                <Link key={i} to={area.link} className="no-underline hover:opacity-80 transition-opacity">
                  {inner}
                </Link>
              ) : (
                <div key={i}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: "#3B6B96" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Get Your <span style={{ color: "#000000" }}>Car Fixed?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Get a free estimate in minutes. No pressure. No obligation. Just an honest price from people who do the work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
              style={{ backgroundColor: "#000000" }}
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

export default Index;
