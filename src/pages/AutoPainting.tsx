import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, PHONE, DOMAIN } from "@/data/constants";

const AutoPainting = () => {
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Auto Painting",
    provider: {
      "@type": "AutoBodyShop",
      name: BUSINESS_NAME,
      telephone: PHONE,
    },
    areaServed: { "@type": "City", name: "Charleston" },
    serviceType: "Auto Painting",
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "Auto Painting", item: `${DOMAIN}/auto-painting` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Auto Painting Charleston SC | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="High-quality auto painting in Charleston, SC. Color matching, full repaints, and spot repairs. Restore your vehicle's finish with Compass Collision."
        />
        <link rel="canonical" href={`${DOMAIN}/auto-painting`} />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Auto Painting Charleston SC</h1>
        <p className="mt-4 text-lg text-muted-foreground">Content coming soon.</p>
      </section>
    </>
  );
};

export default AutoPainting;
