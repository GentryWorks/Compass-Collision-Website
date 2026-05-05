import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PHONE, PHONE_HREF, ADDRESS, EMAIL } from "@/data/constants";
import logoWhite from "@/assets/compass-collision-logo-white.webp";

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
    <footer style={{ backgroundColor: "#000" }}>
      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 — Logo + NAP + Hours */}
          <div>
            <img src={logoWhite} alt="Compass Collision" className="h-16 w-auto mb-6" width={400} height={400} />

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#3B6B96" }} />
                <span>{ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#3B6B96" }} />
                <a href={PHONE_HREF} className="no-underline text-gray-400 hover:text-white transition-colors">
                  {PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#3B6B96" }} />
                <a href={`mailto:${EMAIL}`} className="no-underline text-gray-400 hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#3B6B96" }} />
                <div>
                  <p>Mon–Thu: 8am–4pm</p>
                  <p>Fri: 8am–12pm</p>
                  <p>Sat–Sun: Closed</p>
                </div>
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
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="text-gray-500 text-xs no-underline hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 text-xs no-underline hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
