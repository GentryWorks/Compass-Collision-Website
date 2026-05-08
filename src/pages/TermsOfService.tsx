import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BUSINESS_NAME, PHONE, PHONE_HREF, EMAIL, DOMAIN } from "@/data/constants";
import { trackPhoneClick } from "@/utils/tracking";

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
        <meta name="description" content="Terms of service for Compass Collision. Review the terms and conditions of using our website and services." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href={`${DOMAIN}/terms-of-service`} />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <section className="bg-white px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-2" style={{ color: "#111" }}>Terms of Service</h1>
          <p className="text-sm text-gray-400 mb-10">Effective Date: May 1, 2026</p>

          <div className="space-y-8 text-sm leading-relaxed text-gray-500">

            {/* SMS Messaging Terms */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>SMS Messaging Terms &amp; Compliance</h2>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>1. Program Description</p>
              <p className="mb-3">This messaging program sends appointment confirmation and reminder messages to customers who have booked an appointment with Compass Collision through our website at compasscollisionsc.com, or via our scheduling forms, and have explicitly opted in to receive SMS notifications. Opt-in is collected via web forms with a dedicated checkbox for SMS consent. Messages include scheduling confirmations, appointment reminders, rescheduling updates, and customer support communications.</p>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>2. Cancellation Instructions</p>
              <p className="mb-3">You can cancel the SMS service at any time. Simply text "STOP" to the same number that sent you messages. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.</p>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>3. Support Information</p>
              <p className="mb-3">If you experience issues with the messaging program, reply with the keyword "HELP" for more assistance, or reach out directly to <a href={`mailto:${EMAIL}`} className="no-underline hover:underline" style={{ color: "#2D5F5D" }}>{EMAIL}</a> or call <a href={PHONE_HREF} onClick={() => trackPhoneClick("terms-of-service")} className="no-underline hover:underline" style={{ color: "#2D5F5D" }}>({PHONE.slice(0, 3)}) {PHONE.slice(4, 7)}-{PHONE.slice(8)}</a> during business hours.</p>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>4. Carrier Liability</p>
              <p className="mb-3">Carriers are not liable for delayed or undelivered messages.</p>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>5. Message &amp; Data Rates</p>
              <p className="mb-3">Message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies based on your service usage and appointment schedule. For questions about your text plan or data plan, contact your wireless provider.</p>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>6. Supported Carriers</p>
              <p className="mb-3">Our SMS program works with all major U.S. wireless carriers, including AT&amp;T, T-Mobile, Verizon, Sprint, and most regional carriers.</p>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>7. Age Restriction</p>
              <p className="mb-3">You must be 18 years or older to participate in our SMS program.</p>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>8. Privacy Policy</p>
              <p className="mb-3">For privacy-related inquiries, please refer to our <Link to="/privacy-policy" className="no-underline hover:underline" style={{ color: "#2D5F5D" }}>Privacy Policy</Link>.</p>

              <p>We comply with all applicable laws and regulations, including the Telephone Consumer Protection Act (TCPA) and CTIA guidelines, regarding the use of SMS communications.</p>
            </div>

            {/* General Terms */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>General Terms</h2>
              <p className="mb-3">This website (the "Site") is owned and operated by Compass Collision ("COMPANY," "we" or "us"). By using the Site, you agree to be bound by these Terms of Service and to use the Site in accordance with these Terms of Service, our <Link to="/privacy-policy" className="no-underline hover:underline" style={{ color: "#2D5F5D" }}>Privacy Policy</Link>, and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the Site or from Compass Collision.</p>
              <p className="mb-3">Accessing the Site, in any manner, whether automated or otherwise, constitutes use of the Site and your agreement to be bound by these Terms of Service.</p>
              <p>We reserve the right to change these Terms of Service or to impose new conditions on the use of the Site from time to time, in which case we will post the revised Terms of Service on this website. By continuing to use the Site after we post any such changes, you accept the Terms of Service, as modified.</p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>Intellectual Property Rights</h2>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>Our Limited License to You</p>
              <p className="mb-3">This Site and all the materials available on the Site are the property of Compass Collision and/or our affiliates or licensors and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal non-commercial use.</p>
              <p className="mb-3">You may not use the Site or the materials available on the Site in a manner that constitutes an infringement of our rights or that has not been authorized by us.</p>
              <p className="mb-3">Unless explicitly authorized, you may not modify, copy, reproduce, republish, upload, post, transmit, translate, sell, create derivative works, exploit, or distribute in any manner or medium any material from the Site. However, you may download and/or print one copy of individual pages for your personal, non-commercial use, provided that you keep intact all copyright and other proprietary notices.</p>

              <p className="font-semibold mb-1" style={{ color: "#111" }}>Your License to Us</p>
              <p>By posting or submitting any material (including comments, blog entries, social media posts, photos, and videos) to us via the Site, internet groups, or other digital venues, you represent that you own the material or have obtained the necessary permissions. You grant us a royalty-free, perpetual, irrevocable, non-exclusive, worldwide license to use, modify, transmit, sell, exploit, create derivative works from, distribute, and publicly perform or display such material.</p>
            </div>

            {/* Disclaimers */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>Disclaimers</h2>
              <p className="mb-3">Throughout the Site, we may provide links and pointers to Internet sites maintained by third parties. Our linking to such third-party sites does not imply an endorsement or sponsorship of such sites or the information, products, or services offered on or through the sites.</p>
              <p className="mb-3">The information, products, and services offered on or through the Site are provided "as is" and without warranties of any kind, either express or implied. To the fullest extent permissible pursuant to applicable law, we disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.</p>
              <p>You agree at all times to indemnify and hold harmless Compass Collision, its affiliates, and their respective officers, directors, agents, and employees from any claims, causes of action, damages, liabilities, costs, and expenses arising out of or related to your breach of any obligation, warranty, or representation under these Terms of Service.</p>
            </div>

            {/* Online Commerce */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>Online Commerce</h2>
              <p className="mb-3">Certain sections of the Site may allow you to purchase products and services from third-party vendors. We are not responsible for the quality, accuracy, timeliness, reliability, or any other aspect of these products and services. If you make a purchase from a third party linked through the Site, the information obtained during your visit, including payment information, may be collected by both the merchant and us.</p>
              <p>Your participation in any dealings with third-party vendors is solely between you and the third party. Compass Collision shall not be responsible for any loss or damage incurred as a result of such dealings.</p>
            </div>

            {/* Registration */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>Registration &amp; Passwords</h2>
              <p className="mb-3">To access certain features of the Site, you may be required to register and create an account. You agree to provide accurate, current, and complete information during the registration process. You are responsible for maintaining the confidentiality of your login credentials and for all activities conducted under your account.</p>
              <p>If you suspect unauthorized use of your account, notify us immediately at <a href={`mailto:${EMAIL}`} className="no-underline hover:underline" style={{ color: "#2D5F5D" }}>{EMAIL}</a>. We are not liable for any loss or damage arising from your failure to comply with this obligation.</p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>Termination</h2>
              <p>We reserve the right to terminate or suspend your access to the Site, without notice, if we determine that you have violated these Terms of Service or engaged in conduct that we deem inappropriate or unlawful. Upon termination, you must cease all use of the Site and any content obtained from it.</p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>Governing Law</h2>
              <p>These Terms of Service shall be governed by and construed in accordance with the laws of the state of South Carolina. Any dispute arising under these Terms shall be resolved exclusively through binding arbitration in that jurisdiction.</p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>Changes to Terms of Service</h2>
              <p>We may update these Terms of Service from time to time. The latest version will always be available on our website with the effective date.</p>
            </div>

            {/* Contact */}
            <div className="pt-6 border-t border-gray-200">
              <h2 className="font-extrabold text-lg mb-3" style={{ color: "#111" }}>Contact Us</h2>
              <p>For any questions regarding these Terms of Service, please contact us at:</p>
              <p className="mt-2">
                Compass Collision<br />
                1949 Dulsey Road, Unit 202, Charleston, SC 29407<br />
                Phone: <a href={PHONE_HREF} onClick={() => trackPhoneClick("terms-of-service")} className="no-underline hover:underline" style={{ color: "#2D5F5D" }}>({PHONE.slice(0, 3)}) {PHONE.slice(4, 7)}-{PHONE.slice(8)}</a><br />
                Email: <a href={`mailto:${EMAIL}`} className="no-underline hover:underline" style={{ color: "#2D5F5D" }}>{EMAIL}</a><br />
                Website: <a href={DOMAIN} className="no-underline hover:underline" style={{ color: "#2D5F5D" }}>compasscollisionsc.com</a>
              </p>
              <p className="mt-4">By using our website and services, you consent to these Terms of Service.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;
