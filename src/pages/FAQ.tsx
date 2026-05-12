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
    a: "Yes. We work with every major insurance carrier including State Farm, GEICO, Progressive, Allstate, USAA, and all others. We handle the claims paperwork, communicate directly with your adjuster, and file supplements if we find hidden damage during the repair. You don't have to deal with any of it.",
  },
  {
    q: "How long does a typical repair take?",
    a: "It depends on the damage. Minor dent repairs can be done in a few hours. Most collision repairs take 3 to 10 business days. Major structural repairs or jobs requiring special-order parts can take 2 weeks or more. We give you an honest timeline before we start and keep you updated throughout.",
  },
  {
    q: "How much does collision repair cost?",
    a: "Every repair is different. A small dent might cost a few hundred dollars. A major collision repair can run into the thousands. We give you a free, detailed estimate before any work begins. If you're going through insurance, your out-of-pocket cost is typically just your deductible.",
  },
  {
    q: "What types of vehicles do you repair?",
    a: "We repair all makes and models. Cars, trucks, and SUVs. Foreign and domestic. From Honda Civics to BMW M-series. If it has collision damage, we can fix it.",
  },
  {
    q: "Do I need an appointment for an estimate?",
    a: "We prefer appointments so we can give you our full attention. Call us at (843) 380-7055 or fill out our contact form and we'll get back to you the same business day. Walk-ins are welcome when our schedule allows.",
  },
  {
    q: "What is paintless dent repair?",
    a: "Paintless dent repair (PDR) is a method that removes dents without sanding, filling, or repainting. We use specialized tools to push the metal back into its original shape from behind the panel. It preserves your factory paint, costs less, and is faster than traditional dent repair. It works best on small to medium dents where the paint is still intact.",
  },
  {
    q: "How do you match my car's paint color?",
    a: "Every vehicle has a factory paint code. We locate that code and use a computerized color matching system to mix an exact match. We spray a test panel first to verify the color under multiple lighting conditions before painting your car. Then we blend the new paint into the surrounding panels so the repair is invisible.",
  },
  {
    q: "Do I have to use the body shop my insurance recommends?",
    a: "No. South Carolina law gives you the right to choose any body shop you want for your repair. Your insurance company cannot require you to go to a specific shop. You choose where your car gets fixed, and we work with your insurance either way.",
  },
  {
    q: "What if hidden damage is found during the repair?",
    a: "Hidden damage is common in collisions. If we find additional damage once we start the repair, we document it with photos and send a supplement to your insurance company. We don't proceed with extra work without your approval. This is standard practice and your insurance covers the supplement in most cases.",
  },
  {
    q: "What areas do you serve?",
    a: "We're located in Charleston, SC at 1949 Dulsey Road, Unit 202. We serve the entire Charleston metro area including North Charleston, Mount Pleasant, Summerville, West Ashley, James Island, and Goose Creek. Customers come to our shop from across the Lowcountry.",
  },
  {
    q: "What are your hours?",
    a: "We're open Monday through Thursday from 8am to 4pm, and Friday from 8am to 12pm. We're closed on weekends. Call us at (843) 380-7055 or email us anytime and we'll respond the next business day.",
  },
  {
    q: "Do you offer any warranty on repairs?",
    a: "Yes. We stand behind every repair we do. If something isn't right, bring it back and we will make it right. We use quality materials and factory-spec processes because we want your repair to last — not just look good when you pick it up.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. Every estimate is free with no obligation. Bring your car in and we will look at the damage, explain what needs to be done, and give you an honest price. You can also send us photos by email for a preliminary quote. The in-person estimate is always more accurate since we can check for hidden damage.",
  },
  {
    q: "Can I choose my own body shop for insurance claims?",
    a: "Yes. South Carolina law gives you the right to take your car to any body shop you choose. Your insurance company may suggest a preferred shop, but they cannot force you to go there. You pick the shop. We handle the rest.",
  },
  {
    q: "What happens if there is hidden damage?",
    a: "Hidden damage is common in collisions. Metal can bend behind the panels where it is not visible until we start the repair. If we find extra damage, we stop, take photos, and send a supplement to your insurance company. We do not do any extra work without your approval first. Your insurance typically covers the supplement.",
  },
  {
    q: "Do you help with rental car arrangements?",
    a: "We don't provide rental cars directly, but we can help you coordinate with your insurance company. Most collision policies include rental coverage while your car is in the shop. We will give your insurance an accurate repair timeline so they can set up the rental for the right number of days.",
  },
  {
    q: "How do I know if my car needs collision repair or just dent repair?",
    a: "It depends on the damage. If the paint is cracked, the metal is torn, or there is structural damage underneath, you need collision repair. If the paint is still intact and the dent is shallow, paintless dent repair may be enough. Bring your car in and we will tell you exactly which service you need. There is no charge for us to look at it.",
  },
  {
    q: "What brands of paint do you use?",
    a: "We use professional-grade automotive paint systems designed for collision repair. The specific brand depends on what matches your vehicle best. What matters most is that we use your car's factory paint code and a computerized mixing system to get an exact color match. We test the color on a spray panel before painting your vehicle.",
  },
  {
    q: "Do you repair all makes and models?",
    a: "Yes. We work on cars, trucks, and SUVs. Foreign and domestic. Honda, Toyota, Ford, Chevrolet, BMW, Mercedes, and everything in between. Our team has 95+ years of combined experience across every major manufacturer. If your vehicle has collision damage, we can fix it.",
  },
  {
    q: "Can I get a quote over the phone?",
    a: "We can give you a rough estimate over the phone based on your description, but the most accurate quote comes from seeing the car in person. Photos by email can also help us give you a better number before you come in. Call us at (843) 380-7055 and we will walk you through it.",
  },
  {
    q: "What should I do right after a car accident?",
    a: "First, make sure everyone is safe and call 911 if anyone is hurt. Exchange insurance information with the other driver. Take photos of all the damage to every vehicle involved. File a police report if the damage is significant. Then call your insurance company to start a claim. When you're ready, bring the car to us for a free estimate.",
  },
  {
    q: "What is the difference between OEM and aftermarket parts?",
    a: "OEM parts are made by your vehicle's original manufacturer. They fit and perform exactly like the parts your car came with. Aftermarket parts are made by third-party companies. They are usually less expensive but the fit and quality can vary. We discuss part options with you before we order anything so you can make the best decision for your repair and your budget.",
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
        <title>FAQ | {BUSINESS_NAME} Charleston SC</title>
        <meta
          name="description"
          content="Common questions about collision repair, dent repair, and auto painting at Compass Collision in Charleston, SC. Insurance, cost, timeline, and more."
        />
        <link rel="canonical" href={`${DOMAIN}/faq`} />
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
              Frequently Asked <span style={{ color: "#5A9E9B" }}>Questions</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Everything you need to know about collision repair, dent repair, and auto painting. If your question isn't here, give us a call.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordions */}
      <section className="bg-white py-20">
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
      <section className="bg-gray-50 py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "#111" }}>
            Still Have <span style={{ color: "#2D5F5D" }}>Questions?</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            We're happy to answer anything about your repair. Call us or visit our <Link to="/contact" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>contact page</Link> to send us a message.
          </p>
          <a
            href={PHONE_HREF}
                onClick={() => trackPhoneClick("faq")}
            className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
            style={{ backgroundColor: "#2D5F5D" }}
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
            <Link
              to="/contact"
              className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
              style={{ backgroundColor: "#E8833A" }}
            >
              Get Free Estimate
            </Link>
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
