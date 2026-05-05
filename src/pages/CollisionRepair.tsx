import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, PHONE, DOMAIN } from "@/data/constants";

const CollisionRepair = () => {
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Collision Repair",
    provider: {
      "@type": "AutoBodyShop",
      name: BUSINESS_NAME,
      telephone: PHONE,
    },
    areaServed: { "@type": "City", name: "Charleston" },
    serviceType: "Collision Repair",
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "Collision Repair", item: `${DOMAIN}/collision-repair` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Collision Repair Charleston SC | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Expert collision repair in Charleston, SC. From minor fender benders to major accident damage, we restore your vehicle to pre-accident condition. Free estimates."
        />
        <link rel="canonical" href={`${DOMAIN}/collision-repair`} />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Collision Repair Charleston SC</h1>
        <p className="mt-4 text-lg text-muted-foreground">Content coming soon.</p>
      </section>
    </>
  );
};

export default CollisionRepair;
