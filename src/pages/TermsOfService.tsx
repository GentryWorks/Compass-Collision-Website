import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, DOMAIN } from "@/data/constants";

const TermsOfService = () => {
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "Terms of Service", item: `${DOMAIN}/terms-of-service` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Terms of Service | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Terms of service for Compass Collision. Review the terms and conditions of using our website and services."
        />
        <link rel="canonical" href={`${DOMAIN}/terms-of-service`} />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="mt-4 text-lg text-muted-foreground">Content coming soon.</p>
      </section>
    </>
  );
};

export default TermsOfService;
