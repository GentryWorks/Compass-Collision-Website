import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME } from "@/data/constants";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | {BUSINESS_NAME}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4 text-lg text-muted-foreground">The page you're looking for doesn't exist.</p>
      </section>
    </>
  );
};

export default NotFound;
