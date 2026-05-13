import { Helmet } from "react-helmet-async";
import { BUSINESS_NAME, PHONE, PHONE_HREF, EMAIL, DOMAIN } from "@/data/constants";
import { trackPhoneClick } from "@/utils/tracking";

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
        <meta name="description" content="Privacy policy for Compass Collision. Learn how we collect, use, and protect your personal information." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={`${DOMAIN}/privacy-policy`} />
        <meta property="og:title" content={`Privacy Policy | ${BUSINESS_NAME}`} />
        <meta property="og:description" content="Privacy policy for Compass Collision. Learn how we collect, use, and protect your personal information." />
        <meta property="og:image" content="https://compasscollisionsc.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <section className="bg-white px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-2" style={{ color: "#111" }}>Privacy Policy</h1>
          <p className="text-sm text-gray-400 mb-10">Effective Date: May 1, 2026</p>

          <div className="space-y-8 text-sm leading-relaxed text-gray-500">

            {/* Important Notice */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>Important Notice Regarding Text Messaging Data</h2>
              <p>Compass Collision ("we," "us," or "our") DOES NOT share customer opt-in information, including phone numbers and consent records, with any affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing our direct services. All text messaging originator opt-in data is kept strictly confidential.</p>
            </div>

            {/* 1 */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>1. Information We Collect</h2>
              <p className="mb-2">We collect the following types of information:</p>
              <p className="font-semibold mb-1" style={{ color: "#111" }}>Personal Information:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Name, email address, phone number, physical address</li>
                <li>Payment information when you make a purchase or request a quote</li>
                <li>Opt-in records and timestamps for all communication channels (SMS, email, etc.)</li>
              </ul>
              <p className="font-semibold mb-1" style={{ color: "#111" }}>Non-Personal Information:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>IP address, browser type, device information</li>
                <li>Website usage patterns and analytics</li>
                <li>Cookies and similar technologies</li>
              </ul>
              <p className="font-semibold mb-1" style={{ color: "#111" }}>Customer Communication:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Records of inquiries and service requests</li>
                <li>Appointment details and preferences</li>
                <li>Service history and feedback</li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>2. How We Use Your Information</h2>
              <p className="mb-2">We use collected data for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Providing and improving our services</li>
                <li>Processing transactions and payments</li>
                <li>Communicating with you about your inquiries, appointments, and promotions</li>
                <li>Enhancing website functionality and user experience</li>
                <li>Ensuring security and fraud prevention</li>
                <li>Maintaining records of your communication preferences and consent</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>3. SMS Messaging &amp; Compliance</h2>
              <p className="font-semibold mb-2" style={{ color: "#111" }}>Text Message Program Terms &amp; Conditions</p>
              <p className="mb-3">By opting into our SMS messaging services, you agree to receive text messages related to our services, including appointment reminders, customer support, and important updates.</p>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>Opt-In &amp; Consent:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>You will only receive messages if you have explicitly opted in</li>
                <li>We maintain timestamped records of all opt-in actions</li>
                <li>We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws</li>
              </ul>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>Opt-Out Instructions:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>You can cancel SMS notifications at any time by replying "STOP"</li>
                <li>You will receive a final confirmation message, and no further messages will be sent unless you re-opt in</li>
                <li>All opt-out requests are processed immediately</li>
              </ul>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>Message Frequency &amp; Content:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Message frequency varies based on your interactions with our business</li>
                <li>Messages will be directly related to the services you have requested</li>
                <li>We do not send promotional content without specific consent</li>
              </ul>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>Help &amp; Support:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Reply "HELP" for assistance or contact us at <a href={`mailto:${EMAIL}`} className="no-underline hover:underline" style={{ color: "#2D5F5D" }}>{EMAIL}</a></li>
                <li>Customer support is available during regular business hours</li>
              </ul>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>Carrier Information:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Standard message and data rates may apply</li>
                <li>Carriers are not liable for delayed or undelivered messages</li>
                <li>Supported carriers include AT&amp;T, Verizon, T-Mobile, Sprint, and most regional carriers</li>
              </ul>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>SMS Data Protection Statement</p>
              <p>No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
              <p className="mt-2">We implement strict data protection measures to safeguard your SMS opt-in information and consent records.</p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>4. Information Sharing &amp; Disclosure</h2>
              <p className="mb-3">We do not sell, rent, or trade personal information. We may share information with:</p>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>Service Providers:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Third-party vendors who assist in our operations (e.g., payment processing, appointment scheduling)</li>
                <li>SMS aggregators and providers solely for the purpose of delivering messages you've consented to receive</li>
                <li>All service providers are contractually obligated to maintain confidentiality and security</li>
              </ul>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>Legal Compliance:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>If required by law, legal process, or to protect our rights</li>
                <li>In response to valid law enforcement requests or court orders</li>
              </ul>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>Business Transfers:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>In case of mergers, acquisitions, or sale of assets</li>
                <li>In such cases, your data remains protected under the terms of this policy</li>
              </ul>

              <p>All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.</p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>5. Data Security</h2>
              <p className="mb-2">We implement and maintain reasonable security measures to protect your personal information:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure access controls and authentication mechanisms</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Breach notification protocols in accordance with applicable laws</li>
                <li>Secure backup systems and disaster recovery procedures</li>
              </ul>
              <p>Despite these measures, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee absolute security.</p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>6. Cookies &amp; Tracking Technologies</h2>
              <p className="mb-2">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Analyze site traffic and user behavior</li>
                <li>Remember your preferences</li>
                <li>Improve website functionality and user experience</li>
                <li>Measure the effectiveness of our services</li>
              </ul>
              <p>You may control cookies through your browser settings. Disabling cookies may limit your ability to use certain features of our website.</p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>7. Your Rights &amp; Choices</h2>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of marketing emails by clicking "unsubscribe" in our emails</li>
                <li>Opt-out of SMS messages by replying "STOP"</li>
                <li>Request information on how we process your data</li>
                <li>Withdraw consent at any time for future communications</li>
                <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
              </ul>
              <p>To exercise these rights, please contact us using the information in Section 10.</p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>8. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies. This privacy policy applies only to information collected by Compass Collision.</p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>9. Changes to This Privacy Policy</h2>
              <p>We may update this policy periodically. The latest version will always be available on our website with the effective date. For significant changes, we will notify you by email or through a notice on our website.</p>
            </div>

            {/* 10 */}
            <div className="pt-6 border-t border-gray-200">
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>10. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or how your information is handled, contact us at:</p>
              <p className="mt-2">
                Compass Collision<br />
                1949 Dulsey Road, Unit 202, Charleston, SC 29407<br />
                Phone: <a href={PHONE_HREF} onClick={() => trackPhoneClick("privacy-policy")} className="no-underline hover:underline" style={{ color: "#2D5F5D" }}>({PHONE.slice(0, 3)}) {PHONE.slice(4, 7)}-{PHONE.slice(8)}</a><br />
                Email: <a href={`mailto:${EMAIL}`} className="no-underline hover:underline" style={{ color: "#2D5F5D" }}>{EMAIL}</a><br />
                Website: <a href={DOMAIN} className="no-underline hover:underline" style={{ color: "#2D5F5D" }}>compasscollisionsc.com</a>
              </p>
              <p className="mt-4">By using our website and services, you consent to this Privacy Policy.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
