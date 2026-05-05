import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, DOMAIN } from "@/data/constants";

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You | {BUSINESS_NAME}</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={`${DOMAIN}/thank-you`} />
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">Thank You</h1>
        <p className="mt-4 text-lg text-muted-foreground">We've received your message and will be in touch soon.</p>
      </section>
    </>
  );
};

export default ThankYou;
