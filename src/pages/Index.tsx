import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Wrench, Paintbrush, CircleDot, MapPin, ChevronDown, Star, Shield, Clock, Users } from "lucide-react";
import { PHONE, PHONE_HREF, ADDRESS, DOMAIN } from "@/data/constants";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import heroImg from "@/assets/camaro-zl1-collision-repair-after-charleston.webp";
import jeepBefore from "@/assets/jeep-grand-cherokee-collision-repair-before-charleston.webp";
import jeepAfter from "@/assets/jeep-grand-cherokee-collision-repair-after-charleston.webp";
import bmwBefore from "@/assets/bmw-sedan-collision-repair-before-charleston.webp";
import bmwAfter from "@/assets/bmw-sedan-collision-repair-during-charleston.webp";
import motoTankBefore from "@/assets/motorcycle-tank-paint-prep-before-charleston.webp";
import motoTankAfter from "@/assets/motorcycle-tank-custom-paint-after-charleston.webp";

const services = [
  {
    icon: <Wrench className="w-7 h-7" style={{ color: "#2D5F5D" }} />,
    title: "Collision Repair",
    description: "Fender benders to major wrecks. We restore your car to the way it looked before the accident. We work with all insurance companies.",
    link: "/collision-repair",
  },
  {
    icon: <CircleDot className="w-7 h-7" style={{ color: "#2D5F5D" }} />,
    title: "Dent Repair",
    description: "Parking lot dings. Door dents. Hail damage. We remove dents without affecting your factory paint whenever possible.",
    link: "/dent-repair",
  },
  {
    icon: <Paintbrush className="w-7 h-7" style={{ color: "#2D5F5D" }} />,
    title: "Auto Painting",
    description: "Panel painting. Bumper refinishing. Color matching down to the exact factory code. Your repair will be invisible.",
    link: "/auto-painting",
  },
];

const stats = [
  { value: "2021", label: "Serving Charleston" },
  { value: "95+", label: "Years combined experience" },
  { value: "272", label: "Five-star reviews" },
  { value: "3", label: "Core services" },
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
  { name: "North Charleston", link: "/north-charleston" },
  { name: "Mount Pleasant", link: "/mount-pleasant" },
  { name: "Summerville", link: "/summerville" },
  { name: "West Ashley", link: "/west-ashley" },
  { name: "James Island", link: "/james-island" },
  { name: "Goose Creek", link: "/goose-creek" },
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

const sliderPairs = [
  {
    label: "Jeep Grand Cherokee",
    before: jeepBefore,
    after: jeepAfter,
    beforeAlt: "Jeep Grand Cherokee before collision repair Charleston SC",
    afterAlt: "Jeep Grand Cherokee after collision repair Charleston SC",
    thumb: jeepAfter,
  },
  {
    label: "BMW Sedan",
    before: bmwAfter,
    after: bmwBefore,
    beforeAlt: "BMW sedan before collision repair Charleston SC",
    afterAlt: "BMW sedan after collision repair Charleston SC",
    thumb: bmwAfter,
  },
  {
    label: "Motorcycle Tank",
    before: motoTankBefore,
    after: motoTankAfter,
    beforeAlt: "Motorcycle gas tank before custom paint Charleston SC",
    afterAlt: "Motorcycle gas tank after custom paint Charleston SC",
    thumb: motoTankAfter,
  },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSlider, setActiveSlider] = useState(0);

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={heroImg} type="image/webp" />
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
      <div style={{ backgroundColor: "#2D5F5D" }} className="text-white text-[13px] font-semibold py-2.5 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-10 text-center">
          <span>Serving Charleston Since 2021</span>
          <span>272 Five-Star Google Reviews</span>
          <span>Free Estimates</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[85svh] flex items-center overflow-hidden" style={{ backgroundColor: "#242021" }}>
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Camaro ZL1 collision repair Charleston SC" className="w-full h-full object-cover opacity-40" loading="eager" fetchPriority="high" width={1800} height={1200} />
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
              Charleston's Trusted Body Shop
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Auto Body Shop
              <span className="block" style={{ color: "#4A8A87" }}>
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
                style={{ backgroundColor: "#2D5F5D" }}
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
      <section style={{ backgroundColor: "#2D5F5D" }} className="py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-4xl font-extrabold mb-1 text-white">{s.value}</p>
                <p className="text-[#6BA3A0] text-sm uppercase tracking-widest font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Slider */}
      <section style={{ backgroundColor: "#242021" }} className="py-20">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-3 text-white">
              See the <span style={{ color: "#4A8A87" }}>Difference</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Drag the slider to compare. Every repair leaves looking factory fresh.
            </p>
          </div>
          <BeforeAfterSlider
            key={activeSlider}
            beforeSrc={sliderPairs[activeSlider].before}
            afterSrc={sliderPairs[activeSlider].after}
            beforeAlt={sliderPairs[activeSlider].beforeAlt}
            afterAlt={sliderPairs[activeSlider].afterAlt}
            beforeLabel="Before"
            afterLabel="After"
          />
          {/* Thumbnail selector */}
          <div className="flex justify-center gap-3 mt-6">
            {sliderPairs.map((pair, i) => (
              <button
                key={i}
                onClick={() => setActiveSlider(i)}
                className={`rounded-lg overflow-hidden border-2 transition-all ${
                  activeSlider === i ? "border-[#2D5F5D] opacity-100" : "border-transparent opacity-50 hover:opacity-75"
                }`}
              >
                <img
                  src={pair.thumb}
                  alt={pair.label}
                  className="w-24 h-16 sm:w-32 sm:h-20 object-cover"
                  loading="lazy"
                />
                <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400 py-1.5 bg-black/80">
                  {pair.label}
                </p>
              </button>
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

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              What We <span style={{ color: "#2D5F5D" }}>Fix</span>
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

      {/* Why Choose Us */}
      <section style={{ backgroundColor: "#242021" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3 text-white">
              Why Charleston Trusts <span style={{ color: "#4A8A87" }}>Compass Collision</span>
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
                className="rounded-xl px-6 py-8"
                style={{ backgroundColor: "#2D5F5D" }}
              >
                <div className="mb-4 text-[#242021]">{r.icon}</div>
                <h3 className="font-extrabold text-sm uppercase tracking-wide mb-3 text-white">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              What Our Customers <span style={{ color: "#2D5F5D" }}>Say</span>
            </h2>
            <p className="text-gray-600 text-lg">272 five-star reviews and counting.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                text: "Fantastic experience all around. Adam and his crew made the repair process seamless. From initial assessment — communication along the way — and interfacing with the insurance company — everything was handled flawlessly. They did what was best for my vehicle to bring it back to 100% after being damaged, not just what was quick and easy.",
                name: "Stephen H.",
              },
              {
                text: "Adam saw how the fender was pulled out. He offered to put the fender back into position until a permanent repair could be done. He did not want any money. I'm thoroughly impressed by his skill and wanting to help a stranger passing through. I cannot say enough good things about Adam.",
                name: "Philip A.",
              },
              {
                text: "If you need work done in Charleston, this is the place to go. Very transparent and no BS upselling or anything like that. They truly just want to work with you to get the job done as effectively as possible within your budget. They even cleaned my car after they did the repairs!",
                name: "Adam E.",
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 px-6 py-8 shadow-sm"
              >
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic mb-4">"{review.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-extrabold text-sm" style={{ color: "#111" }}>{review.name}</p>
                  <p className="text-xs text-gray-400">Google Review</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro — SEO body copy */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center" style={{ color: "#111" }}>
            Charleston's Honest <span style={{ color: "#2D5F5D" }}>Auto Body Shop</span>
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

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center" style={{ color: "#111" }}>
            How It <span style={{ color: "#2D5F5D" }}>Works</span>
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

      {/* FAQ */}
      <section className="bg-white py-20">
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
          <div className="text-center mt-8">
            <Link
              to="/faq"
              className="text-sm font-bold uppercase tracking-wide hover:opacity-80 transition-opacity no-underline"
              style={{ color: "#2D5F5D" }}
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              Serving the <span style={{ color: "#2D5F5D" }}>Charleston Area</span>
            </h2>
            <p className="text-gray-500 text-base">{ADDRESS}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area, i) => {
              const inner = (
                <span className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
                  <MapPin className="w-4 h-4" style={{ color: "#2D5F5D" }} />
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
      <section style={{ backgroundColor: "#2D5F5D" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Get Your <span style={{ color: "#242021" }}>Car Fixed?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Get a free estimate in minutes. No pressure. No obligation. Just an honest price from people who do the work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
              style={{ backgroundColor: "#242021" }}
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
