import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, PHONE, ADDRESS, EMAIL, DOMAIN } from "@/data/constants";

const Index = () => {
  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    name: BUSINESS_NAME,
    telephone: PHONE,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1949 Dulsey Road, Unit 202",
      addressLocality: "Charleston",
      addressRegion: "SC",
      postalCode: "29407",
      addressCountry: "US",
    },
    url: DOMAIN,
    areaServed: [
      { "@type": "City", name: "Charleston" },
      { "@type": "City", name: "North Charleston" },
      { "@type": "City", name: "Mount Pleasant" },
      { "@type": "City", name: "Summerville" },
      { "@type": "City", name: "West Ashley" },
      { "@type": "City", name: "James Island" },
      { "@type": "City", name: "Goose Creek" },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Body Shop Charleston SC | {BUSINESS_NAME}</title>
        <meta
          name="description"
          content="Charleston's trusted body shop for collision repair, dent repair, and auto painting. Quality work, fast turnaround. Call today for a free estimate."
        />
        <link rel="canonical" href={`${DOMAIN}/`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaLocalBusiness)}
        </script>
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Body Shop Charleston SC</h1>
        <p className="mt-4 text-lg text-muted-foreground">Content coming soon.</p>
      </section>
    </>
  );
};

export default Index;
