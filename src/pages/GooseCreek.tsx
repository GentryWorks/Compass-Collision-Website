import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, DOMAIN } from "@/data/constants";

const GooseCreek = () => {
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "Goose Creek", item: `${DOMAIN}/goose-creek` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Collision Repair Goose Creek | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Quality collision repair near Goose Creek, SC. Compass Collision offers expert body work, dent repair, and painting. Free estimates, fast service."
        />
        <link rel="canonical" href={`${DOMAIN}/goose-creek`} />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Collision Repair Goose Creek</h1>
        <p className="mt-4 text-lg text-muted-foreground">Content coming soon.</p>
      </section>
    </>
  );
};

export default GooseCreek;
