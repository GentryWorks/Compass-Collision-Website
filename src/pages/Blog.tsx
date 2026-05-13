import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { BUSINESS_NAME, DOMAIN } from "@/data/constants";

const Blog = () => {
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${DOMAIN}/blog` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Blog | Compass Collision Charleston SC</title>
        <meta
          name="description"
          content="Helpful guides on collision repair, insurance claims, and vehicle care from Compass Collision in Charleston, SC. Tips from experienced technicians."
        />
        <link rel="canonical" href={`${DOMAIN}/blog`} />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="Blog | Compass Collision Charleston SC" />
        <meta property="og:description" content="Helpful guides on collision repair, insurance claims, and vehicle care from Compass Collision in Charleston, SC. Tips from experienced technicians." />
        <meta property="og:image" content="https://compasscollisionsc.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Hero */}
      <section
        className="min-h-[40svh] flex items-center"
        style={{ backgroundColor: "#1A2E2D" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 w-full py-20">
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
              <BookOpen className="w-3.5 h-3.5" />
              Resources
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-white">
              Collision Repair
              <span className="block" style={{ color: "#5A9E9B" }}>
                Blog &amp; Guides
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Body */}
      <section style={{ backgroundColor: "#F4EFE6" }} className="py-24">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8"
              style={{ backgroundColor: "#2D5F5D" }}
            >
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "#111" }}>
              Blog Coming Soon
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10">
              We're working on helpful guides about collision repair, insurance claims, and vehicle
              care. Whether you've just been in an accident or want to know what to expect during
              the repair process, we'll have answers here. Check back soon.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
              style={{ backgroundColor: "#E8833A" }}
            >
              Have a Question? Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: "#2D5F5D" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Need a Repair <span style={{ color: "#1A2E2D" }}>Right Now?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Don't wait for a blog post. Call us or request a free estimate and get a straight
            answer from a technician who does the work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
              style={{ backgroundColor: "#E8833A" }}
            >
              Get Free Estimate
            </Link>
            <Link
              to="/collision-repair"
              className="inline-flex items-center justify-center gap-2 text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm transition-colors no-underline"
              style={{ border: "2px solid #fff" }}
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
