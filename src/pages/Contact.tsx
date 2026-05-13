import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { BUSINESS_NAME, PHONE, PHONE_HREF, ADDRESS, EMAIL, DOMAIN, REVIEW_COUNT_DISPLAY } from "@/data/constants";
import { trackPhoneClick } from "@/utils/tracking";

const Contact = () => {
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${DOMAIN}/contact` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Contact Compass Collision | Charleston SC Auto Body Shop</title>
        <meta
          name="description"
          content="Contact our Charleston SC auto body shop for a free collision repair estimate. We answer the phone. Call (843) 380-7055 or visit 1949 Dulsey Road, Unit 202."
        />
        <link rel="canonical" href={`${DOMAIN}/contact`} />
        <meta property="og:title" content="Contact Compass Collision | Charleston SC Auto Body Shop" />
        <meta property="og:description" content="Contact our Charleston SC auto body shop for a free collision repair estimate. We answer the phone. Call (843) 380-7055 or visit 1949 Dulsey Road, Unit 202." />
        <meta property="og:image" content="https://compasscollisionsc.com/og-image.jpg" />
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
              {REVIEW_COUNT_DISPLAY} Five-Star Reviews
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Contact Our <span style={{ color: "#5A9E9B" }}>Charleston Auto Body Shop</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
              Tired of calling shops and getting voicemail? We answer the phone. Call us during business hours and you'll talk to a real person — not a recording, not a form, not a two-week wait for a callback.
            </p>
            <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
              Our Charleston collision repair shop offers free estimates, usually same business day. Most calls take less than five minutes. No pressure, no sales pitch — just honest answers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left — Info */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#111" }}>
                Get in <span style={{ color: "#2D5F5D" }}>Touch</span>
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#2D5F5D" }}
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm uppercase tracking-wide mb-1" style={{ color: "#111" }}>Address</h3>
                    <p className="text-gray-500 text-sm">{ADDRESS}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#2D5F5D" }}
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm uppercase tracking-wide mb-1" style={{ color: "#111" }}>Phone</h3>
                    <a href={PHONE_HREF} onClick={() => trackPhoneClick("contact")} className="text-gray-500 text-sm no-underline hover:opacity-80">
                      {PHONE}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#2D5F5D" }}
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm uppercase tracking-wide mb-1" style={{ color: "#111" }}>Email</h3>
                    <a href={`mailto:${EMAIL}`} className="text-gray-500 text-sm no-underline hover:opacity-80">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#2D5F5D" }}
                  >
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm uppercase tracking-wide mb-1" style={{ color: "#111" }}>Hours</h3>
                    <div className="text-gray-500 text-sm space-y-0.5">
                      <p>Monday - Thursday: 8am - 4pm</p>
                      <p>Friday: 8am - 12pm</p>
                      <p>Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a
                  href={PHONE_HREF}
                  onClick={() => trackPhoneClick("contact")}
                  className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
                  style={{ backgroundColor: "#2D5F5D" }}
                >
                  <Phone className="w-4 h-4" />
                  Call: {PHONE}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline"
                  style={{ color: "#2D5F5D", border: "2px solid #2D5F5D" }}
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>
            </motion.div>

            {/* Right — Map */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.8!2d-79.98!3d32.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7a4d7b6c0001%3A0x1!2s1949+Dulsey+Rd+%23202%2C+Charleston%2C+SC+29407!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Compass Collision location on Google Maps"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Happens When You Call */}
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center" style={{ color: "#111" }}>
              What Happens When You <span style={{ color: "#2D5F5D" }}>Call</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8 text-center max-w-xl mx-auto">
              First time dealing with collision repair? Here's exactly what to expect from your first call to our Charleston auto body shop.
            </p>

            <div className="space-y-5">
              {[
                {
                  step: "We answer the phone.",
                  detail:
                    "During business hours, a real person picks up. No voicemail maze, no callback request form.",
                },
                {
                  step: "We ask about the damage.",
                  detail:
                    "Tell us what happened and what your car looks like. We'll give you an honest read on the repair — including whether insurance makes sense to use.",
                },
                {
                  step: "We schedule your free estimate.",
                  detail:
                    "Most estimates are same or next business day. We don't charge for estimates and we don't make you wait two weeks just to find out what it costs.",
                },
                {
                  step: "You get a straight answer.",
                  detail:
                    "We'll tell you what needs to be fixed, what it will cost, and how long it will take. No surprises, no hidden fees.",
                },
              ].map(({ step, detail }) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-6 h-6" style={{ color: "#2D5F5D" }} />
                  </div>
                  <div>
                    <p className="font-extrabold text-sm" style={{ color: "#111" }}>
                      {step}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* What to have ready */}
            <div
              className="mt-10 rounded-xl p-6 border"
              style={{ backgroundColor: "#f0f7f7", borderColor: "#2D5F5D" }}
            >
              <h3 className="font-extrabold text-base mb-3" style={{ color: "#111" }}>
                What to Have Ready When You Call
              </h3>
              <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
                <li>A description of the damage (photos help if you have them)</li>
                <li>Your insurance info, if you plan to file a claim</li>
                <li>The other driver's insurance info, if someone else was at fault</li>
                <li>Your vehicle make, model, and year</li>
              </ul>
              <p className="text-gray-500 text-sm mt-3">
                Don't have all of this yet? Call anyway. We can walk you through it.
              </p>
            </div>

            {/* Insurance note */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto">
                We work directly with your insurance company on collision repair claims. We've handled hundreds of claims and will make sure the repair is covered correctly — so you're not left covering costs that should have been paid.
              </p>
            </div>

            {/* Service area */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm leading-relaxed">
                <span className="font-bold" style={{ color: "#111" }}>Service area:</span> We serve Charleston, West Ashley, James Island, North Charleston, Mount Pleasant, Summerville, and Goose Creek.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call CTA */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "#111" }}>
            Call for a Free <span style={{ color: "#5A9E9B" }}>Estimate</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Ready to get your car fixed? Give us a call — a real person picks up and you'll have an answer the same day.
          </p>
          <div className="bg-gray-50 rounded-xl border border-gray-200 shadow-sm p-10">
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneClick("contact")}
              className="inline-flex items-center justify-center gap-3 text-white font-extrabold uppercase tracking-wide px-10 py-5 rounded-full text-base hover:opacity-90 transition-opacity no-underline mb-4"
              style={{ backgroundColor: "#2D5F5D" }}
            >
              <Phone className="w-5 h-5" />
              Call Now: (843) 380-7055
            </a>
            <p className="text-gray-500 text-sm mt-4">
              Prefer email for non-urgent questions?{" "}
              <a href={`mailto:${EMAIL}`} className="font-bold no-underline" style={{ color: "#2D5F5D" }}>
                {EMAIL}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: "#2D5F5D" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Get Your <span style={{ color: "#1A2E2D" }}>Car Fixed?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            {REVIEW_COUNT_DISPLAY} five-star reviews. Free estimates. Honest answers. We pick up the phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              onClick={() => trackPhoneClick("contact")}
              className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
              style={{ backgroundColor: "#E8833A" }}
            >
              <Phone className="w-4 h-4" />
              Call: {PHONE}
            </a>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline"
              style={{ border: "2px solid #fff" }}
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
