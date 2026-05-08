/**
 * Track phone call clicks in GA4.
 * Call this onClick for every <a href="tel:..."> link.
 * @param location - where on the site the click happened (e.g., "header", "footer", "hero", "cta")
 */
export function trackPhoneClick(location: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "phone_call", {
      event_category: "engagement",
      event_label: location,
    });
  }
}
