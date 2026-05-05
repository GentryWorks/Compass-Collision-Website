import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, DOMAIN } from "@/data/constants";

const MountPleasant = () => {
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "Mount Pleasant", item: `${DOMAIN}/mount-pleasant` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Body Shop Mount Pleasant SC | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Expert body shop near Mount Pleasant, SC. Collision repair, dent removal, and professional auto painting. Quality work backed by Compass Collision."
        />
        <link rel="canonical" href={`${DOMAIN}/mount-pleasant`} />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Body Shop Mount Pleasant SC</h1>
        <p className="mt-4 text-lg text-muted-foreground">Content coming soon.</p>
      </section>
    </>
  );
};

export default MountPleasant;
