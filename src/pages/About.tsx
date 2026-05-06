import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Users, Shield, Star, Clock } from "lucide-react";
import { BUSINESS_NAME, PHONE, PHONE_HREF, DOMAIN } from "@/data/constants";
import teamImg from "@/assets/compass-collision-team-charleston.webp";
import shopImg from "@/assets/compass-collision-shop-exterior-bays-charleston.webp";

const values = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "People Over Profit",
    text: "We care about people more than money. That means honest prices, honest timelines, and repairs done the right way — even the parts you can't see.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "No Surprises",
    text: "The price we quote is the price you pay. If something changes during the repair, we call you first. No hidden fees. No unexpected charges.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "On-Time Delivery",
    text: "We give you a realistic timeline and stick to it. If something comes up, we let you know right away. Your car is ready when we say it will be.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Quality You Can See",
    text: "272 five-star Google reviews. When you pick up your car, the damage is invisible. That is the standard we hold ourselves to on every single repair.",
  },
];

const About = () => {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS_NAME,
    url: DOMAIN,
    logo: `${DOMAIN}/compass-collision-logo.webp`,
    foundingDate: "2021",
    description: "Family-owned auto body and collision repair shop in Charleston, SC. 95+ years of industry experience. Honest estimates from technicians who do the work.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1949 Dulsey Road, Unit 202",
      addressLocality: "Charleston",
      addressRegion: "SC",
      postalCode: "29407",
    },
    telephone: "843-380-7055",
    areaServed: [
      "Charleston", "North Charleston", "Mount Pleasant", "Summerville",
      "West Ashley", "James Island", "Goose Creek",
    ],
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "About", item: `${DOMAIN}/about` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>About Compass Collision | Charleston SC Auto Body Shop</title>
        <meta
          name="description"
          content="Family-owned auto body shop in Charleston, SC. 95+ years experience, BMW certified. Honest estimates from techs who do the work. Call (843) 380-7055."
        />
        <link rel="canonical" href={`${DOMAIN}/about`} />
        <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[50svh] flex items-center overflow-hidden" style={{ backgroundColor: "#242021" }}>
        <div className="absolute inset-0 z-0">
          <img
            src={shopImg}
            alt="Compass Collision shop exterior with service bays in Charleston SC"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
            fetchPriority="high"
            width={1800}
            height={1200}
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 z-10 w-full py-20">
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
              Family-Owned Since 2021
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-white">
              About
              <span className="block" style={{ color: "#4A8A87" }}>
                Compass Collision
              </span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed">
              A Charleston body shop built on honest work and real expertise. The people writing your estimate are the same people fixing your car.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6" style={{ color: "#111" }}>
            Our <span style={{ color: "#2D5F5D" }}>Story</span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            Compass Collision opened in March 2021. But the experience behind it goes back more than 95 combined years in the collision repair industry. We opened our doors in Charleston because we saw too many body shops where the person writing the estimate had never actually done the repair.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-4">
            That gap between the estimator and the technician is where surprises happen. Inaccurate quotes. Unexpected delays. Repairs that don't hold up. We built this shop to fix that problem.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            Here, the people writing your estimate have done the repair hundreds of times with their own hands. They know what the job takes because they have actually done the work. That means your price is accurate from day one, and the repair is done right the first time.
          </p>
        </div>
      </section>

      {/* Team Photo */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={teamImg}
                alt="Compass Collision team in Charleston SC"
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
                width={1200}
                height={800}
              />
            </motion.div>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-extrabold mb-4" style={{ color: "#111" }}>
                95+ Years of <span style={{ color: "#2D5F5D" }}>Experience</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-4">
                Our team brings a combined 95+ years of hands-on collision repair experience. We repair all makes and models — cars, trucks, and SUVs. Foreign and domestic.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-4">
                We handle everything in-house. <Link to="/collision-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>Collision repair</Link>. <Link to="/dent-repair" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>Dent repair</Link>. <Link to="/auto-painting" className="font-semibold no-underline hover:opacity-80" style={{ color: "#2D5F5D" }}>Auto painting</Link> and color matching. No subcontracting. No outsourcing. Your car stays in our shop from start to finish.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                With 272 five-star Google reviews, Charleston trusts us to get the job done right.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: "#242021" }} className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold mb-3 text-white">
              What We <span style={{ color: "#4A8A87" }}>Stand For</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl px-6 py-8"
                style={{ backgroundColor: "#2D5F5D" }}
              >
                <div className="mb-4 text-[#242021]">{v.icon}</div>
                <h3 className="font-extrabold text-sm uppercase tracking-wide mb-3 text-white">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
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
            Get a free estimate. Honest pricing from people who do the work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center text-white font-extrabold uppercase tracking-wide px-8 py-4 rounded-full text-sm hover:opacity-90 transition-opacity no-underline"
              style={{ backgroundColor: "#242021" }}
            >
              Get Free Estimate
            </Link>
            <a
              href={PHONE_HREF}
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

export default About;
