import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, DOMAIN } from "@/data/constants";

const PrivacyPolicy = () => {
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${DOMAIN}/privacy-policy` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Privacy policy for Compass Collision. Learn how we collect, use, and protect your personal information."
        />
        <link rel="canonical" href={`${DOMAIN}/privacy-policy`} />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-lg text-muted-foreground">Content coming soon.</p>
      </section>
    </>
  );
};

export default PrivacyPolicy;
