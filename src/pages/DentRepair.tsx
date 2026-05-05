import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, PHONE, DOMAIN } from "@/data/constants";

const DentRepair = () => {
  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Dent Repair",
    provider: {
      "@type": "AutoBodyShop",
      name: BUSINESS_NAME,
      telephone: PHONE,
    },
    areaServed: { "@type": "City", name: "Charleston" },
    serviceType: "Dent Repair",
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "Dent Repair", item: `${DOMAIN}/dent-repair` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Dent Repair Charleston SC | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Professional dent repair in Charleston, SC. Paintless dent removal and traditional dent repair for all vehicle types. Fast turnaround, free estimates."
        />
        <link rel="canonical" href={`${DOMAIN}/dent-repair`} />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Dent Repair Charleston SC</h1>
        <p className="mt-4 text-lg text-muted-foreground">Content coming soon.</p>
      </section>
    </>
  );
};

export default DentRepair;
