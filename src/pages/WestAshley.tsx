import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, DOMAIN } from "@/data/constants";

const WestAshley = () => {
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "West Ashley", item: `${DOMAIN}/west-ashley` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Body Shop West Ashley | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Local body shop serving West Ashley. Collision repair, dent repair, and auto painting by Compass Collision. Convenient Charleston location, free estimates."
        />
        <link rel="canonical" href={`${DOMAIN}/west-ashley`} />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Body Shop West Ashley</h1>
        <p className="mt-4 text-lg text-muted-foreground">Content coming soon.</p>
      </section>
    </>
  );
};

export default WestAshley;
