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
import mustangBefore from "@/assets/green-mustang-collision-damage-before-charleston.webp";
import mustangAfter from "@/assets/green-mustang-collision-repair-after-charleston.webp";
import truckBumperBefore from "@/assets/truck-bumper-repair-before-charleston.webp";
import truckBumperAfter from "@/assets/truck-bumper-repair-after-charleston.webp";
import acuraBefore from "@/assets/acura-collision-repair-before-charleston.webp";
import acuraAfter from "@/assets/acura-collision-repair-after-charleston.webp";
import { trackPhoneClick } from "@/utils/tracking";

const services = [
  {
    icon: <Wrench className="w-7 h-7" style={{ color: "#E8833A" }} />,
    title: "Collision Repair",
    description: "Rear-ended. Side-swiped. Hit a deer. We fix it all — from fender benders to major wrecks. We work with every insurance company and handle the paperwork for you.",
    link: "/collision-repair",
  },
  {
    icon: <CircleDot className="w-7 h-7" style={{ color: "#E8833A" }} />,
    title: "Dent Repair",
    description: "Parking lot dings. Door dents. Hail damage. We'll give you a free estimate and fix it fast. Most people can't tell the dent was ever there.",
    link: "/dent-repair",
  },
  {
    icon: <Paintbrush className="w-7 h-7" style={{ color: "#E8833A" }} />,
    title: "Auto Painting & Color Matching",
    description: "Perfect color match down to your exact factory code. Bumper refinishing. Panel painting. Your repair will be invisible — even on hard-to-match colors like red, pearl white, or tri-coat silver.",
    link: "/auto-painting",
  },
];

const stats = [
  { value: "272", label: "Five-star Google reviews" },
  { value: "95+", label: "Years combined experience" },
  { value: "5.0", label: "Perfect star rating" },
  { value: "Free", label: "Every estimate, every time" },
];

const reasons = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "We Actually Answer the Phone",
    description: "Call us and a real person picks up. We respond to emails the same day. No voicemails, no waiting weeks just to get a response. Most Charleston shops can't say the same.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Free Estimates, Honest Prices",
    description: "Other shops charge $100 just to look at your car. We never charge for an estimate. The price we quote is the price you pay — no surprise charges when you pick up.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "We Handle Your Insurance",
    description: "We work with all insurance companies. We deal with your adjuster directly, fight lowball estimates, and handle the paperwork so you don't have to make a single call.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Estimators Who Do the Work",
    description: "The person writing your estimate has done this repair hundreds of times with their own hands. No middleman. No surprises. You get an accurate price because we know exactly what the job takes.",
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
    q: "Do you charge for estimates?",
    a: "Never. Every estimate is free. Other shops in Charleston charge $100 or more just to look at your car. We believe you shouldn't have to pay someone to tell you what's wrong. Call us or stop by — no cost and no obligation.",
  },
  {
    q: "How long will my repair take?",
    a: "Most collision repairs take 3 to 10 business days. We give you an honest timeline before we start and keep you updated the entire time. We don't sit on your car for weeks. We start when we say we will and tell you if anything changes.",
  },
  {
    q: "Do you work with my insurance company?",
    a: "Yes. We work with all insurance companies — State Farm, GEICO, Progressive, USAA, Allstate, and every other carrier. We deal with your adjuster directly, handle the paperwork, and fight lowball estimates when needed. You shouldn't have to call the insurance company once.",
  },
  {
    q: "What if the insurance estimate seems too low?",
    a: "This happens regularly. Insurance adjusters write estimates that don't cover the full scope of the repair. We know what proper repairs actually cost, and we go to bat for you. We document the damage, push back on insufficient estimates, and make sure the job is done right — not just done to the insurance company's minimum. One of our customers had a $4,992 insurance check and we charged them only what the repair actually cost.",
  },
  {
    q: "Can't get another shop to answer or fit you in?",
    a: "This is the most common thing we hear. Customers call us after trying four or five other body shops in Charleston that are booked for months or won't return calls. Most shops in the area are running 6 to 10 week backlogs just for an estimate appointment. We answer the phone, respond to emails the same day, and get your car in within days — not months.",
  },
  {
    q: "What should I expect after I drop my car off?",
    a: "We'll keep you updated throughout the repair — no black holes, no wondering what's happening with your car. Most customers get updates every few days. When your car is ready, we'll call you to schedule pickup. We clean the car before you take it home. You'll pick it up looking like the accident never happened.",
  },
  {
    q: "Can you match my car's exact paint color?",
    a: "Yes. We match to your vehicle's exact factory paint code — the same code the manufacturer used the day your car was built. We see a lot of challenging colors in our shop: red, pearl white, tri-coat silver, deep blue metallic. Difficult colors are not a problem. We don't stop until the panel blends perfectly with the rest of the car.",
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
    label: "Green Mustang",
    before: mustangBefore,
    after: mustangAfter,
    beforeAlt: "Green Mustang before collision repair Charleston SC",
    afterAlt: "Green Mustang after collision repair Charleston SC",
    thumb: mustangAfter,
  },
  {
    label: "Truck Bumper",
    before: truckBumperBefore,
    after: truckBumperAfter,
    beforeAlt: "Truck bumper before repair Charleston SC",
    afterAlt: "Truck bumper after repair Charleston SC",
    thumb: truckBumperAfter,
  },
  {
    label: "Acura",
    before: acuraBefore,
    after: acuraAfter,
    beforeAlt: "Acura before collision repair Charleston SC",
    afterAlt: "Acura after collision repair Charleston SC",
    thumb: acuraAfter,
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
          content="Charleston's trusted auto body shop. 272 five-star reviews. Free estimates. We answer the phone and get your car in within days. Call (843) 380-7055."
        />
        <link rel="canonical" href={`${DOMAIN}`} />
        <meta property="og:title" content="Auto Body Shop Charleston SC | Compass Collision" />
        <meta property="og:description" content="Charleston's trusted auto body shop. 272 five-star reviews. Free estimates. We answer the phone and get your car in within days. Call (843) 380-7055." />
        <meta property="og:image" content="https://compasscollisionsc.com/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoBodyShop",
            name: "Compass Collision",
            url: DOMAIN,
            telephone: "843-380-7055",
            image: "https://compasscollisionsc.com/og-image.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1949 Dulsey Road, Unit 202",
              addressLocality: "Charleston",
              addressRegion: "SC",
              postalCode: "29407",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "32.7876",
              longitude: "-79.9918",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "272",
              bestRating: "5",
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
            sameAs: [],
          })}
        </script>
      </Helmet>

      {/* Trust Bar */}
      <div style={{ backgroundColor: "#2D5F5D" }} className="text-white text-[13px] font-semibold py-2.5 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-10 text-center">
          <span>We Answer the Phone</span>
          <span>272 Five-Star Google Reviews</span>
          <span>Free Estimates — Always</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[85svh] flex items-center overflow-hidden" style={{ backgroundColor: "#1A2E2D" }}>
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Camaro ZL1 collision repair Charleston SC" className="w-full h-full object-cover opacity-40" loading="eager" fetchPriority="high" width={1800} height={1200} />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 z-10 w-full py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div
              className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "#2D5F5D" }}
            >
              Charleston's Trusted Auto Body Shop
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Auto Body Shop in
              <span className="block" style={{ color: "#5A9E9B" }}>
                Charleston, SC.
              </span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              Other shops won't call you back. We answer the phone, give free estimates, and get your car in within days — not months. 272 five-star reviews. BMW certified. All insurance accepted.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
                style={{ backgroundColor: "#E8833A" }}
              >
                Get Free Estimate
              </Link>
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneClick("homepage")}
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
                <p className="text-[#8B8680] text-sm uppercase tracking-widest font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Slider */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-3 text-white">
              Your Car Will Look Like It <span style={{ color: "#5A9E9B" }}>Never Happened</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Drag to compare. BMWs, F-150s, Audis, SUVs — our color matching is so precise you can't tell where the repair was.
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
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              What We <span style={{ color: "#2D5F5D" }}>Fix</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Collision damage. Dents. Paint. All done in-house by our own technicians — never farmed out to another shop.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
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
                  style={{ color: "#E8833A" }}
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3 text-white">
              Why Charleston Trusts <span style={{ color: "#5A9E9B" }}>Us</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Most body shops in Charleston are booked 6 to 10 weeks out. We get you in within days. Here's why 272 customers gave us five stars.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl px-6 py-8"
                style={{ backgroundColor: "#2D5F5D" }}
              >
                <div className="mb-4 text-[#1A2E2D]">{r.icon}</div>
                <h3 className="font-extrabold text-sm uppercase tracking-wide mb-3 text-white">{r.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              272 Five-Star Reviews. <span style={{ color: "#2D5F5D" }}>Here's Why.</span>
            </h2>
            <p className="text-gray-600 text-lg">Real reviews from real customers in Charleston. Read them all on Google.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                text: "Fantastic experience all around. The crew made the repair process seamless. From initial assessment — communication along the way — and interfacing with the insurance company — everything was handled flawlessly. They did what was best for my vehicle to bring it back to 100% after being damaged, not just what was quick and easy.",
                name: "Stephen H.",
              },
              {
                text: "The fender was pulled out. They offered to put it back into position until a permanent repair could be done — and didn't want any money for it. I'm thoroughly impressed by their skill and wanting to help a stranger passing through. I cannot say enough good things about this shop.",
                name: "Philip A.",
              },
              {
                text: "If you need work done in Charleston, this is the place to go. Very transparent and no BS upselling or anything like that. They truly just want to work with you to get the job done as effectively as possible within your budget. They even cleaned my car after they did the repairs!",
                name: "Adam E.",
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
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
            You just got in an accident. Your car is damaged. You're calling body shops in Charleston and nobody answers. The one shop that picks up says they can't even look at your car for two months. Sound familiar? We hear this from nearly every customer who finds us. It's the number one reason people drive past closer shops to bring their car to our auto body shop in Charleston, SC.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We do things differently here. We answer the phone — a real person, not a voicemail. We give free estimates, usually the same day you call. And we get your car in within days, not months. Our team has 95+ years of combined experience in collision repair, dent repair, and auto painting. We've built 272 five-star reviews on Google because we treat your car like it's our own.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We work on everything from F-150s and Silverados to BMWs, Audis, and Porsches. We're BMW certified, which means we follow the manufacturer's exact repair procedures for BMW vehicles. That matters if you drive a 3 Series, an X5, or any other BMW — proper certification means your car is repaired to factory spec, not just cosmetically patched. Most shops in Charleston can't say that.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Here's what makes us genuinely different: the person who writes your estimate is the same person who has done this repair dozens — sometimes hundreds — of times. There's no separate estimator who has never touched a car handing you a quote. We know what's behind the damaged panel because we've opened it up before. That means no inflated estimates and no surprise charges when you come to pick up.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            If you're filing an insurance claim, we take that off your plate entirely. We talk to your adjuster directly. We push back when the insurance company's estimate doesn't cover the full repair — and in our experience, that happens more often than it should. We've seen insurance companies send estimates that are thousands short of what a proper repair actually costs. We document the damage, submit supplements, and fight for every dollar your repair deserves.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            When you pick up your car, it comes back clean. We wash and vacuum every vehicle before it leaves the shop. We've had customers tell us their car looked better than it did before the accident. That's the standard we hold ourselves to — not "good enough for a body shop," but good enough that you can't find the repair even if you're looking for it.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center" style={{ color: "#111" }}>
            How It <span style={{ color: "#2D5F5D" }}>Works</span>
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Call or Request Your Free Estimate",
                text: "Call us at (843) 380-7055 or fill out our online form. We'll look at the damage and give you an honest price — usually within 24 hours. Free. Always. We never charge just to tell you what's wrong.",
              },
              {
                step: "02",
                title: "We Deal With Insurance",
                text: "Going through insurance? We handle it. We talk to your adjuster, submit the paperwork, and push back if the estimate comes in short. You don't have to call the insurance company once.",
              },
              {
                step: "03",
                title: "We Fix Your Car",
                text: "We get your car in within days. We keep you updated throughout the repair — no black holes, no wondering what's happening. Most repairs take 3 to 10 business days.",
              },
              {
                step: "04",
                title: "Pick Up Like New",
                text: "Your car comes back looking like the accident never happened. Paint matched to your exact factory code. Panels aligned. We wash and vacuum it before you pick it up.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-sm"
                  style={{ backgroundColor: "#E8833A" }}
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
              Common Questions About Our <span style={{ color: "#2D5F5D" }}>Body Shop</span>
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
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              Serving the <span style={{ color: "#2D5F5D" }}>Charleston Area</span>
            </h2>
            <p className="text-gray-500 text-base">Customers drive to us from across the Lowcountry because they can't find this level of service anywhere else.</p>
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
            Don't Wait Months for a Repair. <span style={{ color: "#1A2E2D" }}>Call Us Today.</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Free estimates. We answer the phone. We get your car in within days. 272 five-star reviews from people who felt the same relief you're about to feel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
              style={{ backgroundColor: "#E8833A", color: "#fff" }}
            >
              Get Free Estimate
            </Link>
            <a
              href={PHONE_HREF}
                onClick={() => trackPhoneClick("homepage")}
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
