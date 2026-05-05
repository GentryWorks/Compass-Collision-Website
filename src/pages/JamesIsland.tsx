import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, DOMAIN } from "@/data/constants";

const JamesIsland = () => {
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "James Island", item: `${DOMAIN}/james-island` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Body Shop James Island | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Trusted body shop near James Island. Expert collision repair, dent removal, and auto painting at Compass Collision in Charleston. Call for a free estimate."
        />
        <link rel="canonical" href={`${DOMAIN}/james-island`} />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Body Shop James Island</h1>
        <p className="mt-4 text-lg text-muted-foreground">Content coming soon.</p>
      </section>
    </>
  );
};

export default JamesIsland;
