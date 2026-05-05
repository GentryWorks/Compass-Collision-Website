import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, DOMAIN } from "@/data/constants";

const Summerville = () => {
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "Summerville", item: `${DOMAIN}/summerville` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Collision Repair Summerville SC | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Professional collision repair near Summerville, SC. From fender benders to major damage, trust Compass Collision. Free estimates, fast turnaround."
        />
        <link rel="canonical" href={`${DOMAIN}/summerville`} />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Collision Repair Summerville SC</h1>
        <p className="mt-4 text-lg text-muted-foreground">Content coming soon.</p>
      </section>
    </>
  );
};

export default Summerville;
