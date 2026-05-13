import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ChevronDown } from "lucide-react";
import { BUSINESS_NAME, PHONE, PHONE_HREF, DOMAIN } from "@/data/constants";
import { trackPhoneClick } from "@/utils/tracking";

const faqs = [
  {
    q: "Do you work with insurance companies?",
    a: "Yes. We work with every major carrier — State Farm, GEICO, Progressive, Allstate, USAA, and all others. We handle the paperwork and communicate directly with your adjuster. If we find hidden damage once the repair is underway, we document it with photos and file a supplement on your behalf. We've seen adjusters send low initial estimates, and we push back when the number doesn't cover what the repair actually requires. You don't have to manage any of it.",
  },
  {
    q: "How long does a typical repair take?",
    a: "It depends on the damage. Minor dent repairs can be done in a few hours. Most collision repairs take 3 to 10 business days. Jobs with structural damage or special-order parts can take 2 weeks or more. We give you an honest timeline before we start and keep you updated throughout — your car won't go into a black hole.",
  },
  {
    q: "How much does collision repair cost?",
    a: "Every repair is different, so we don't quote numbers until we've seen the car. What we can tell you: every estimate is free, the price you're quoted is the price you pay, and there are no surprise charges. If you're going through insurance, your out-of-pocket cost is typically just your deductible. Factors that affect the total include the extent of structural damage, whether the airbags deployed, what parts need to be ordered, and whether the vehicle has driver-assist sensors that need recalibration after the repair.",
  },
  {
    q: "What types of vehicles do you repair?",
    a: "We repair all makes and models — cars, trucks, and SUVs, foreign and domestic. From Honda Civics to BMW M-Series to F-150s to Range Rovers. Our team has 95+ years of combined experience across every major manufacturer. If it has collision damage, we can fix it.",
  },
  {
    q: "Do I need an appointment for an estimate?",
    a: "We prefer appointments so we can give you our full attention. Call us at (843) 380-7055 and we'll get you scheduled the same business day. Walk-ins are welcome when the schedule allows.",
  },
  {
    q: "What is paintless dent repair?",
    a: "Paintless dent repair (PDR) removes dents without sanding, filling, or repainting. We use specialized tools to push the metal back to its original shape from behind the panel. It preserves your factory paint finish, costs less, and is faster than traditional dent repair. It works best on small to medium dents where the paint is still intact and undamaged.",
  },
  {
    q: "How do you match my car's paint color?",
    a: "Every vehicle has a factory paint code. We locate that code and use a computerized mixing system to build an exact match. Then we spray a test panel first and check it under multiple lighting conditions before touching your car. Some colors are harder than others — red oxidizes and shifts over time, pearl and tri-coat finishes require layered application, and two-tone trucks demand precise blending at every panel edge. We blend the new paint into the surrounding panels so the repair disappears. The goal is that you can't find it when you pick the car up.",
  },
  {
    q: "Do I have to use the body shop my insurance recommends?",
    a: "No. South Carolina law gives you the right to choose any body shop you want. Your insurance company cannot require you to go to their preferred shop. You pick where your car gets fixed. We work with your insurance either way.",
  },
  {
    q: "What if hidden damage is found during the repair?",
    a: "Hidden damage is common in collisions. Metal bends behind panels where it's not visible until we start disassembly. When we find it, we stop, photograph everything, and file a supplement with your insurance company. A supplement is simply an updated damage report — it's standard practice and insurers process them regularly. We don't do any extra work without your approval first, and your insurance typically covers the supplement. We've filed hundreds of these and know how to document them so they don't get kicked back.",
  },
  {
    q: "What areas do you serve?",
    a: "We're located in Charleston, SC at 1949 Dulsey Road, Unit 202. We serve the entire Charleston metro area including North Charleston, Mount Pleasant, Summerville, West Ashley, James Island, and Goose Creek. Customers come to us from across the Lowcountry — some drive from Kiawah and Edisto because they can't find quality work closer.",
  },
  {
    q: "What are your hours?",
    a: "We're open Monday through Thursday 8am to 4pm, and Friday 8am to 12pm. We're closed on weekends. Call us at (843) 380-7055 or email us anytime — we'll respond the next business day.",
  },
  {
    q: "Do you offer any warranty on repairs?",
    a: "Yes. We stand behind every repair we do. If something isn't right after you get the car back — the paint doesn't look right in sunlight, a panel doesn't sit flush, anything — bring it back and we'll make it right at no charge. We use factory-spec processes and quality materials because we want the repair to last for the life of the vehicle. A repair that looks good for three months and then fades or lifts isn't a repair — it's a headache.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. Every estimate is free with no obligation. Bring the car in and we'll look at the damage, explain what needs to be done, and give you an honest price. You can also call us and describe the damage for a rough idea before coming in. The in-person estimate is always more accurate since we can check for damage that a description alone won't reveal.",
  },
  {
    q: "Do you help with rental car arrangements?",
    a: "We don't provide rentals directly, but we help you coordinate with your insurance. Most collision policies include rental coverage while your car is being repaired. We give your insurer an accurate repair timeline so the rental is set up for the right number of days. We've also given customers a ride to the rental counter when they needed it.",
  },
  {
    q: "How do I know if I need collision repair or just dent repair?",
    a: "It comes down to the paint and the structure. If the paint is cracked or the metal is torn, you need collision repair. If there's structural damage underneath — bent frame rails, crumpled supports — that's also collision territory. If the paint is still intact and the dent is shallow, paintless dent repair may be all you need. Bring the car in and we'll tell you exactly which service fits. There's no charge to take a look.",
  },
  {
    q: "What brands of paint do you use?",
    a: "We use professional-grade automotive refinishing systems designed for collision repair. The specific product depends on what best matches your vehicle. What matters most is the process: we use your car's factory paint code, a computerized mixing system for an exact match, and a spray test before we paint your vehicle. The brand is secondary to the result.",
  },
  {
    q: "Do you repair all makes and models?",
    a: "Yes. Cars, trucks, and SUVs — foreign and domestic. Honda, Toyota, Ford, Chevrolet, BMW, Audi, Mercedes, Lexus, and everything in between. Our team has 95+ years of combined experience across every major manufacturer. If your vehicle has collision damage, we can fix it.",
  },
  {
    q: "Can I get a quote over the phone?",
    a: "We can give you a rough ballpark based on what you describe, but the most accurate number comes from seeing the car. Photos by email can help us get closer before you come in. Call us at (843) 380-7055 and we'll walk you through it.",
  },
  {
    q: "What should I do right after a car accident?",
    a: "First, make sure everyone is safe — call 911 if anyone is hurt. Exchange insurance information with the other driver. Take photos of every vehicle involved, the scene, and any visible damage. File a police report if the damage is significant. Then call your insurance company to start a claim. When you're ready, bring the car to us for a free estimate and we'll handle the rest.",
  },
  {
    q: "What is the difference between OEM and aftermarket parts?",
    a: "OEM parts are made by your vehicle's original manufacturer. They fit and perform exactly like the parts your car came with. Aftermarket parts are made by third-party companies — usually less expensive, but fit and quality can vary. We go over part options with you before we order anything so you can make the right call for your repair and your situation.",
  },
  {
    q: "What does 'supplement' mean in an insurance claim?",
    a: "A supplement is an updated estimate sent to your insurance company when we find damage during the repair that wasn't visible in the original inspection. This is normal — especially on collision repairs where the full extent of the damage isn't visible until panels are removed. We document the additional damage with photos, write up what it takes to fix it correctly, and submit it to the adjuster. Your insurance typically covers supplements. We handle the entire process so you don't have to.",
  },
  {
    q: "Does my car need ADAS recalibration after a collision repair?",
    a: "Possibly, yes — and this matters more than most people realize. ADAS stands for Advanced Driver Assistance Systems: the cameras, radar sensors, and lane-keeping hardware built into newer vehicles. These sensors sit behind bumpers, grilles, and windshields. If any of those panels were replaced or adjusted during the repair, the sensors that rely on them may need to be recalibrated to work correctly. Driving with an uncalibrated sensor can cause your automatic braking, lane departure warning, or adaptive cruise control to behave incorrectly. We check whether your vehicle's systems need recalibration as part of the repair process.",
  },
];

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${DOMAIN}/faq` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Collision Repair FAQ | {BUSINESS_NAME} Charleston SC</title>
        <meta
          name="description"
          content="Collision repair questions answered by Compass Collision in Charleston, SC. Insurance claims, cost factors, paint matching, ADAS, and more. Free estimates."
        />
        <link rel="canonical" href={`${DOMAIN}/faq`} />
        <meta property="og:title" content={`Collision Repair FAQ | ${BUSINESS_NAME} Charleston SC`} />
        <meta property="og:description" content="Collision repair questions answered by Compass Collision in Charleston, SC. Insurance claims, cost factors, paint matching, ADAS, and more. Free estimates." />
        <meta property="og:image" content="https://compasscollisionsc.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div
              className="inline-flex items-center gap-2 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "#2D5F5D" }}
            >
              Common Questions
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Collision Repair FAQ —{" "}
              <span style={{ color: "#5A9E9B" }}>Charleston, SC</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Real answers to the questions we hear most about collision repair in Charleston. Insurance, cost, paint matching, timelines, and more. If your question isn't here, give us a call.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordions */}
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section style={{ backgroundColor: "#1A2E2D" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
            Still Have <span style={{ color: "#5A9E9B" }}>Questions?</span>
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            We're happy to walk you through anything about your repair. Call us or visit our <Link to="/contact" className="font-semibold no-underline hover:opacity-80" style={{ color: "#5A9E9B" }}>contact page</Link> to send us a message.
          </p>
          <a
            href={PHONE_HREF}
            onClick={() => trackPhoneClick("faq")}
            className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
            style={{ backgroundColor: "#E8833A" }}
          >
            <Phone className="w-4 h-4" />
            Call: {PHONE}
          </a>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: "#2D5F5D" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Get Your <span style={{ color: "#1A2E2D" }}>Car Fixed?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Get a free estimate from Compass Collision. No pressure. No obligation. Just an honest price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneClick("faq")}
              className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
              style={{ backgroundColor: "#E8833A" }}
            >
              <Phone className="w-4 h-4" />
              Call for Free Estimate
            </a>
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneClick("faq")}
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

export default FAQ;
