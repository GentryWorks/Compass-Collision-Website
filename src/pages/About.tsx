import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, DOMAIN } from "@/data/constants";

const About = () => {
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: DOMAIN },
      { "@type": "ListItem", position: 2, name: "About", item: `${DOMAIN}/about` },
    ],
  };

  return (
    <>
      <Helmet>
        <title>About Us | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Learn about Compass Collision, Charleston's trusted auto body shop. Our experienced team delivers quality collision repair, dent repair, and auto painting."
        />
        <link rel="canonical" href={`${DOMAIN}/about`} />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">About Compass Collision</h1>
        <p className="mt-4 text-lg text-muted-foreground">Content coming soon.</p>
      </section>
    </>
  );
};

export default About;
