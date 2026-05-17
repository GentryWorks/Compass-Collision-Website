import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PHONE, PHONE_HREF, ADDRESS, EMAIL } from "@/data/constants";
import logoWhite from "@/assets/compass-collision-logo-white.webp";
import { trackPhoneClick } from "@/utils/tracking";

const serviceLinks = [
  { label: "Collision Repair", to: "/collision-repair" },
  { label: "Dent Repair", to: "/dent-repair" },
  { label: "Auto Painting", to: "/auto-painting" },
];

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const areaLinks = [
  { label: "North Charleston", to: "/north-charleston" },
  { label: "Mount Pleasant", to: "/mount-pleasant" },
  { label: "Summerville", to: "/summerville" },
  { label: "West Ashley", to: "/west-ashley" },
  { label: "James Island", to: "/james-island" },
  { label: "Goose Creek", to: "/goose-creek" },
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1A2E2D" }}>
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Logo + NAP + Hours */}
          <div>
            <img src={logoWhite} alt="Compass Collision" className="h-20 mb-6" width={80} height={80} style={{ width: "80px", height: "80px" }} />

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#2D5F5D" }} />
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#2D5F5D" }} />
                <a href={PHONE_HREF} onClick={() => trackPhoneClick("footer")} className="no-underline text-gray-400 hover:text-white transition-colors">
                  {PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#2D5F5D" }} />
                <a href={`mailto:${EMAIL}`} className="no-underline text-gray-400 hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#2D5F5D" }} />
                <div>
                  <p>Mon–Thu: 8am–4pm</p>
                  <p>Fri: 8am–12pm</p>
                  <p>Sat–Sun: Closed</p>
                </div>
              </div>

              {/* Social */}
              <div className="pt-4">
                <a
                  href="https://www.facebook.com/p/Compass-Collision-100064845611529/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wide mb-4">Services</h3>
            <div className="space-y-2">
              {serviceLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-gray-400 no-underline hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wide mb-4">Company</h3>
            <div className="space-y-2">
              {companyLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-gray-400 no-underline hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4 — Service Areas */}
          <div>
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wide mb-4">Service Areas</h3>
            <div className="space-y-2">
              {areaLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-gray-400 no-underline hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Compass Collision. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
