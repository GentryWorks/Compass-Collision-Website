import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, DOMAIN } from "@/data/constants";

const FAQ = () => {
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${DOMAIN}/faq` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>FAQ | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Frequently asked questions about collision repair, dent repair, and auto painting at Compass Collision in Charleston, SC. Get answers before your visit."
        />
        <link rel="canonical" href={`${DOMAIN}/faq`} />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg text-muted-foreground">Content coming soon.</p>
      </section>
    </>
  );
};

export default FAQ;
