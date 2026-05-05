import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, DOMAIN } from "@/data/constants";

const Gallery = () => {
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "Gallery", item: `${DOMAIN}/gallery` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Gallery | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="View our collision repair, dent repair, and auto painting work at Compass Collision in Charleston, SC. Before and after photos of recent projects."
        />
        <link rel="canonical" href={`${DOMAIN}/gallery`} />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Our Work</h1>
        <p className="mt-4 text-lg text-muted-foreground">Content coming soon.</p>
      </section>
    </>
  );
};

export default Gallery;
