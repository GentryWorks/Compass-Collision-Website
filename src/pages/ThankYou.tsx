import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { BUSINESS_NAME, DOMAIN, PHONE, PHONE_HREF } from "@/data/constants";
import { trackPhoneClick } from "@/utils/tracking";

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Thanks for Reaching Out | {BUSINESS_NAME}</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`${DOMAIN}/thank-you`} />
        <meta property="og:title" content={`Thanks for Reaching Out | ${BUSINESS_NAME}`} />
        <meta property="og:description" content="Thanks for contacting Compass Collision. Give us a call at (843) 380-7055 and we'll get you a free estimate the same day." />
        <meta property="og:image" content="https://compasscollisionsc.com/og-image.jpg" />
      </Helmet>

      <section style={{ backgroundColor: "#1A2E2D" }} className="py-24">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Thanks for <span style={{ color: "#5A9E9B" }}>Reaching Out</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            The fastest way to get your free estimate is to give us a call. A real person picks up during business hours and you'll have an answer the same day.
          </p>
          <a
            href={PHONE_HREF}
            onClick={() => trackPhoneClick("thank-you")}
            className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-10 py-5 rounded-full text-base hover:opacity-90 transition-opacity no-underline"
            style={{ backgroundColor: "#E8833A" }}
          >
            <Phone className="w-5 h-5" />
            Call Now: {PHONE}
          </a>
          <p className="text-gray-400 text-sm mt-6">
            Mon – Thu: 8am – 4pm &nbsp;|&nbsp; Fri: 8am – 12pm
          </p>
          <div className="mt-10">
            <Link to="/" className="text-sm font-bold uppercase tracking-wide no-underline hover:opacity-80 transition-opacity" style={{ color: "#5A9E9B" }}>
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
