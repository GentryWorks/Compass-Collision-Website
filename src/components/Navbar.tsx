import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/data/constants";
import logo from "@/assets/compass-collision-logo.webp";

const services = [
  { label: "Collision Repair", to: "/collision-repair" },
  { label: "Dent Repair", to: "/dent-repair" },
  { label: "Auto Painting", to: "/auto-painting" },
];

const serviceAreas = [
  { label: "North Charleston", to: "/north-charleston" },
  { label: "Mount Pleasant", to: "/mount-pleasant" },
  { label: "Summerville", to: "/summerville" },
  { label: "West Ashley", to: "/west-ashley" },
  { label: "James Island", to: "/james-island" },
  { label: "Goose Creek", to: "/goose-creek" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <img src={logo} alt="Compass Collision" className="h-16" width={64} height={64} style={{ width: "64px", height: "64px" }} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/"
            className="text-xs font-bold uppercase tracking-wide no-underline hover:opacity-70 transition-opacity"
            style={{ color: "#000" }}
          >
            Home
          </Link>

          {/* Services Dropdown — hover */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide hover:opacity-70 transition-opacity"
              style={{ color: "#000" }}
            >
              Services
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full pt-2 left-0 hidden group-hover:block">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[180px]">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block px-4 py-2 text-xs font-bold uppercase tracking-wide no-underline hover:bg-gray-50 transition-colors"
                    style={{ color: "#000" }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Service Areas Dropdown — hover */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide hover:opacity-70 transition-opacity"
              style={{ color: "#000" }}
            >
              Service Areas
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full pt-2 left-0 hidden group-hover:block">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[180px]">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.to}
                    to={area.to}
                    className="block px-4 py-2 text-xs font-bold uppercase tracking-wide no-underline hover:bg-gray-50 transition-colors"
                    style={{ color: "#000" }}
                  >
                    {area.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/about"
            className="text-xs font-bold uppercase tracking-wide no-underline hover:opacity-70 transition-opacity"
            style={{ color: "#000" }}
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="text-xs font-bold uppercase tracking-wide no-underline hover:opacity-70 transition-opacity"
            style={{ color: "#000" }}
          >
            Gallery
          </Link>
          <Link
            to="/blog"
            className="text-xs font-bold uppercase tracking-wide no-underline hover:opacity-70 transition-opacity"
            style={{ color: "#000" }}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-xs font-bold uppercase tracking-wide no-underline hover:opacity-70 transition-opacity"
            style={{ color: "#000" }}
          >
            Contact
          </Link>

          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 text-white font-extrabold uppercase tracking-wide text-xs px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity no-underline"
            style={{ backgroundColor: "#2D5F5D" }}
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
            style={{ backgroundColor: "#2D5F5D" }}
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
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-bold uppercase tracking-wide no-underline border-b border-gray-100" style={{ color: "#000" }}>
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="w-full flex items-center justify-between py-3 text-sm font-bold uppercase tracking-wide border-b border-gray-100"
            style={{ color: "#000" }}
          >
            Services
            <ChevronDown
              className="w-4 h-4 transition-transform duration-200"
              style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>
          {mobileServicesOpen && (
            <div className="pl-4 border-b border-gray-100">
              {services.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                  className="block py-2.5 text-sm font-semibold no-underline text-gray-600 hover:text-black transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Service Areas Accordion */}
          <button
            onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
            className="w-full flex items-center justify-between py-3 text-sm font-bold uppercase tracking-wide border-b border-gray-100"
            style={{ color: "#000" }}
          >
            Service Areas
            <ChevronDown
              className="w-4 h-4 transition-transform duration-200"
              style={{ transform: mobileAreasOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>
          {mobileAreasOpen && (
            <div className="pl-4 border-b border-gray-100">
              {serviceAreas.map((area) => (
                <Link
                  key={area.to}
                  to={area.to}
                  onClick={() => { setMobileOpen(false); setMobileAreasOpen(false); }}
                  className="block py-2.5 text-sm font-semibold no-underline text-gray-600 hover:text-black transition-colors"
                >
                  {area.label}
                </Link>
              ))}
            </div>
          )}

          <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-bold uppercase tracking-wide no-underline border-b border-gray-100" style={{ color: "#000" }}>
            About
          </Link>
          <Link to="/gallery" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-bold uppercase tracking-wide no-underline border-b border-gray-100" style={{ color: "#000" }}>
            Gallery
          </Link>
          <Link to="/blog" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-bold uppercase tracking-wide no-underline border-b border-gray-100" style={{ color: "#000" }}>
            Blog
          </Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-bold uppercase tracking-wide no-underline" style={{ color: "#000" }}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
