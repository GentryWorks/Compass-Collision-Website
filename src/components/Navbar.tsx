import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/data/constants";
import logo from "@/assets/compass-collision-logo.webp";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Collision Repair", to: "/collision-repair" },
  { label: "Dent Repair", to: "/dent-repair" },
  { label: "Auto Painting", to: "/auto-painting" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <img src={logo} alt="Compass Collision" className="h-12 w-auto" width={400} height={400} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-xs font-bold uppercase tracking-wide no-underline hover:opacity-70 transition-opacity"
              style={{ color: "#000" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 text-white font-extrabold uppercase tracking-wide text-xs px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity no-underline"
            style={{ backgroundColor: "#3B6B96" }}
          >
            <Phone className="w-3.5 h-3.5" />
            {PHONE}
          </a>
        </div>

        {/* Mobile — Phone + Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 text-white font-extrabold uppercase tracking-wide text-xs px-4 py-2 rounded-full no-underline"
            style={{ backgroundColor: "#3B6B96" }}
          >
            <Phone className="w-3.5 h-3.5" />
            Call
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-bold uppercase tracking-wide no-underline border-b border-gray-100"
              style={{ color: "#000" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
