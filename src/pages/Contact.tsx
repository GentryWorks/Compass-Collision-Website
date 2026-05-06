import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS_NAME, PHONE, PHONE_HREF, ADDRESS, EMAIL, DOMAIN } from "@/data/constants";

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
        <title>Contact Compass Collision | Get a Free Estimate</title>
        <meta
          name="description"
          content="Contact Compass Collision in Charleston, SC. Get a free collision repair estimate. Call (843) 380-7055 or visit us at 1949 Dulsey Road, Unit 202."
        />
        <link rel="canonical" href={`${DOMAIN}/contact`} />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Hero */}
      <section style={{ backgroundColor: "#242021" }} className="py-20">
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
              Free Estimates
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              Contact <span style={{ color: "#4A8A87" }}>Us</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-4">
              Need a repair estimate? Have a question? Call us, email us, or stop by the shop. We're happy to help.
            </p>
            <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed">
              When you reach out, you'll talk to the same people who do the repairs. We'll ask about the damage, give you an honest answer, and schedule a time to see your car. Most calls take less than five minutes. No sales pitch. No pressure.
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
                    <a href={PHONE_HREF} className="text-gray-500 text-sm no-underline hover:opacity-80">
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

      {/* Form Placeholder */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "#111" }}>
            Request a Free <span style={{ color: "#2D5F5D" }}>Estimate</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Fill out the form below and we'll get back to you the same business day. Or call us directly for the fastest response.
          </p>
          {/* GHL Form Placeholder */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-10">
            <p className="text-gray-400 text-sm italic">
              Contact form coming soon. In the meantime, call us at{" "}
              <a href={PHONE_HREF} className="font-bold no-underline" style={{ color: "#2D5F5D" }}>
                {PHONE}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${EMAIL}`} className="font-bold no-underline" style={{ color: "#2D5F5D" }}>
                {EMAIL}
              </a>.
            </p>
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
            Free estimates. Honest pricing. No pressure. Just real answers from people who do the work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
              style={{ backgroundColor: "#242021" }}
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
