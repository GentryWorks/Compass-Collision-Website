import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, DOMAIN } from "@/data/constants";

const Contact = () => {
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${DOMAIN}/contact` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Contact Compass Collision in Charleston, SC. Get a free estimate for collision repair, dent repair, or auto painting. Call 843-380-7055 or visit us today."
        />
        <link rel="canonical" href={`${DOMAIN}/contact`} />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Contact Compass Collision</h1>
        <p className="mt-4 text-lg text-muted-foreground">Content coming soon.</p>
      </section>
    </>
  );
};

export default Contact;
