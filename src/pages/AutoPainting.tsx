import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown, CheckCircle, MapPin } from "lucide-react";
import { BUSINESS_NAME, PHONE, PHONE_HREF, ADDRESS, DOMAIN } from "@/data/constants";
import heroImg from "@/assets/classic-ford-truck-paint-after-charleston.webp";
import { trackPhoneClick } from "@/utils/tracking";

const paintServices = [
  "Panel painting after collision repair",
  "Bumper refinishing and repainting",
  "Fender painting",
  "Door panel painting",
  "Hood and trunk lid painting",
  "Color matching to factory specs",
  "Blending paint into adjacent panels",
  "Clear coat repair and restoration",
];

const faqs = [
  {
    q: "How do you match my car's exact paint color?",
    a: "Every vehicle has a paint code — usually on a sticker inside the driver's door jamb. We use that code with a computerized color mixing system to hit your exact factory formula. Then we spray a test panel and compare it to your car under natural light, fluorescent light, and shade. If it doesn't match perfectly, we adjust. We don't skip the test panel step.",
  },
  {
    q: "Do you do full car repaints or color changes?",
    a: "No. Our painting work is collision-related — panel painting, bumper refinishing, color matching, and blending after a repair. We don't do full vehicle color changes. If that's what you need, we'll point you to a shop that specializes in that work.",
  },
  {
    q: "How long does auto painting take?",
    a: "A single panel — like a bumper or fender — typically takes 2 to 3 business days. That includes full prep, primer, base coat, clear coat, and cure time. Multi-panel jobs take longer. We'll give you a timeline before we start so you can plan around it.",
  },
  {
    q: "Will the repainted panel match the rest of my car?",
    a: "That's the entire goal. We blend the new paint into the surrounding panels so there's no visible line between old and new. When we're done, you shouldn't be able to tell which panel was painted. We see this concern a lot — and it's a fair one. A bad blend is obvious. We've matched solid whites, tri-coat reds, pearl finishes, and heavy metallics. Color matching is something we take seriously on every job.",
  },
  {
    q: "Do you work with insurance companies?",
    a: "Yes. Most of our painting jobs come through insurance claims after a collision. We work directly with your insurance company and handle the back-and-forth so you don't have to. If the adjuster's estimate doesn't cover what the repair actually requires, we push back — and we document everything to support the claim. You shouldn't have to fight that battle yourself.",
  },
  {
    q: "Does Charleston's humidity affect the paint job?",
    a: "It can if you're not careful. Coastal humidity and salt air affect how paint cures, and surface prep matters more here than it does in a dry climate. We paint in a climate-controlled spray booth, and we adjust our prep process for the Charleston environment. Rushing paint cure in high humidity leads to adhesion problems down the road. We don't rush it.",
  },
  {
    q: "Do you use OEM-quality paint materials?",
    a: "Yes. We use manufacturer-grade base coat, clear coat, and primer on every job. The paint formulas in our mixing system are matched to factory specs — not generic substitutes. This is especially important on luxury vehicles and late-model trucks where the factory finish has specific flake sizes, pearl layers, or multi-stage chemistry.",
  },
  {
    q: "Is the paint work guaranteed?",
    a: "Yes. Our paint work is backed by a workmanship guarantee. If the color match, blend, or finish isn't right, we'll make it right. Bring it back and we'll look at it. We've been doing this long enough to know that a repair isn't finished until you're satisfied with how it looks.",
  },
  {
    q: "Can you fix paint scratches and chips?",
    a: "Yes, if the damage came from a collision or an impact. Scratches that go through the clear coat or base coat need to be sanded, primed, and repainted for a seamless finish. Small surface chips can sometimes be touched up. Bring your car in and we'll tell you honestly which approach makes sense for your situation.",
  },
];

const AutoPainting = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Auto Painting Charleston SC",
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
    serviceType: "Auto Painting",
    description: "Professional auto painting in Charleston, SC. Panel painting, bumper refinishing, and factory color matching for collision repairs.",
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
      { "@type": "ListItem", position: 2, name: "Auto Painting", item: `${DOMAIN}/auto-painting` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Auto Painting Charleston SC | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Auto painting in Charleston, SC. Panel painting, bumper refinishing, and factory color matching. 272 five-star reviews. Free estimates. Call (843) 380-7055."
        />
        <link rel="canonical" href={`${DOMAIN}/auto-painting`} />
        <meta property="og:title" content={`Auto Painting Charleston SC | ${BUSINESS_NAME}`} />
        <meta property="og:description" content="Auto painting in Charleston, SC. Panel painting, bumper refinishing, and factory color matching. 272 five-star reviews. Free estimates. Call (843) 380-7055." />
        <meta property="og:image" content="https://compasscollisionsc.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[60svh] flex items-center overflow-hidden" style={{ backgroundColor: "#1A2E2D" }}>
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Classic Ford truck after professional auto painting in Charleston SC"
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
              Factory Color Matching
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Auto Painting
              <span className="block" style={{ color: "#5A9E9B" }}>
                Charleston, SC
              </span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              Panel painting. Bumper refinishing. Color matching down to the exact factory code. 272 five-star reviews. When we paint a panel, you can't tell where the repair ends and the original begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneClick("auto-painting")}
                className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
                style={{ backgroundColor: "#E8833A" }}
              >
                <Phone className="w-4 h-4" />
                Call for Free Estimate
              </a>
              <a
                href={PHONE_HREF}
                onClick={() => trackPhoneClick("auto-painting")}
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
            Collision Paint Repair That's <span style={{ color: "#2D5F5D" }}>Invisible</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            After a collision, your biggest fear isn't the repair — it's whether the paint will match. A slightly off shade or a hard blend line makes the whole job look wrong. We hear this concern on nearly every job we take in for auto painting in Charleston, and it's completely valid.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We use a computerized color mixing system and your vehicle's factory paint code to hit the exact formula. Then we blend into the surrounding panels so there's no visible seam between old and new. We've matched solid whites, tri-coat reds, multi-stage pearls, and heavy metallic flakes on everything from F-150s to BMWs.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Most of our painting work comes in after a <Link to="/collision-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>collision repair</Link>. We handle the insurance process, coordinate the parts, and make sure the paint is the last thing you have to think about.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            We don't do rust repair or full vehicle color changes. Our focus is collision-related paint work — panels, bumpers, fenders, hoods, and doors. If the damage came from an accident or an impact, we can paint it.
          </p>
        </div>
      </section>

      {/* What We Paint */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              What We <span style={{ color: "#2D5F5D" }}>Paint</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Every paint job is done in our climate-controlled spray booth with full prep, primer, base coat, and clear coat.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            {paintServices.map((item, i) => (
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

      {/* Color Matching Process */}
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            Our Color Matching <span style={{ color: "#2D5F5D" }}>Process</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Color matching is where most shops cut corners. Two cars with the same paint code can look slightly different after years of sun and salt air exposure. We don't just mix by code and spray — we test, compare, and adjust until the match holds under every lighting condition.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Charleston's coastal humidity also affects how paint cures. We use a climate-controlled spray booth and adjust our prep timing to account for the conditions outside. Rushing cure time in humid air causes adhesion failure down the road. We've seen what that looks like, and we don't let it leave our shop.
          </p>
          <div className="space-y-8 mt-8">
            {[
              {
                step: "01",
                title: "Find Your Paint Code",
                text: "Every vehicle has a paint code on a sticker inside the door jamb, under the hood, or in the trunk. We locate this code and use it as the starting point for mixing your factory color.",
              },
              {
                step: "02",
                title: "Computerized Color Mixing",
                text: "Our mixing system matches your exact paint formula — base color, metallic flake size, pearl layers, and any manufacturer-specific chemistry. Tri-coats and multi-stage finishes require more steps, and we don't skip them.",
              },
              {
                step: "03",
                title: "Test Panel Spray",
                text: "Before touching your car, we spray a test panel and compare it to your vehicle under natural light, fluorescent light, and shade. If it's not right, we adjust the formula. This step is non-negotiable.",
              },
              {
                step: "04",
                title: "Paint, Blend, and Polish",
                text: "We apply the base coat and blend the color into the adjacent panels so there's no hard line between old and new paint. The clear coat goes on last and gets polished to a factory finish. We use manufacturer-grade materials on every job.",
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

      {/* When You Need Auto Painting */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
            When You Need <span style={{ color: "#5A9E9B" }}>Auto Painting</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-4">
            Most of our paint work follows a collision repair or <Link to="/dent-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#5A9E9B" }}>dent repair</Link>. If your job is going through insurance, we handle the claim coordination — including pushing back on adjuster estimates that don't cover what the repair actually requires.
          </p>
          <ul className="space-y-3 mt-6">
            {[
              "Your bumper was damaged in a collision and needs to be repainted after repair",
              "A fender or door was replaced and the new panel needs to be color-matched",
              "Paint was scratched or chipped down to the metal during an accident",
              "A panel was repaired with body filler and needs primer and paint",
              "Your clear coat has peeled or faded on the damaged area",
              "Adjacent panels need blending so the repair is seamless",
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3 text-gray-400 text-sm"
              >
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#5A9E9B" }} />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            Why Charleston Drivers <span style={{ color: "#2D5F5D" }}>Choose Us</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We have 272 five-star reviews on Google. Not because we ask people to leave reviews — because customers are genuinely relieved when the car comes back looking right. "My BMW looks brand new and the paint is a perfect match" is something we hear regularly, and it doesn't happen by accident.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We work on everything from F-150s and Silverados to BMWs, Audis, Mercedes, and Lexus vehicles. BMW-certified repair means we understand how the factory finishes on these vehicles are built — and what it takes to match them correctly.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            We're a small shop with hands-on involvement on every job. The person who writes your estimate is the same person overseeing the repair. You won't drop your car into a black hole and wait for a phone call that doesn't come. We keep you updated, we answer the phone, and we give you a straight answer on timing.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            Our paint work is backed by a workmanship guarantee. If the match or finish isn't right, bring it back and we'll make it right. That's not a policy — it's just how we do business.
          </p>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "#111" }}>
              Auto Painting Near <span style={{ color: "#2D5F5D" }}>You</span>
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
              Auto Painting <span style={{ color: "#2D5F5D" }}>FAQ</span>
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
            Need a Panel <span style={{ color: "#1A2E2D" }}>Repainted?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Free estimates. Factory color matching. 272 five-star reviews. We'll make it look like it never happened.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneClick("auto-painting")}
              className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
              style={{ backgroundColor: "#E8833A" }}
            >
              <Phone className="w-4 h-4" />
              Call for Free Estimate
            </a>
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneClick("auto-painting")}
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

export default AutoPainting;
