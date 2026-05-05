import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, DOMAIN } from "@/data/constants";

const NorthCharleston = () => {
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "North Charleston", item: `${DOMAIN}/north-charleston` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Body Shop North Charleston SC | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Trusted body shop serving North Charleston, SC. Collision repair, dent repair, and auto painting near you. Call Compass Collision for a free estimate."
        />
        <link rel="canonical" href={`${DOMAIN}/north-charleston`} />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Body Shop North Charleston SC</h1>
        <p className="mt-4 text-lg text-muted-foreground">Content coming soon.</p>
      </section>
    </>
  );
};

export default NorthCharleston;
