import SEO from "../components/SEO";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Read the terms and conditions for using Next Layer Consulting's services."
        path="/terms"
      />
      <div className="bg-seasalt dark:bg-graphite min-h-screen py-20 transition-colors duration-300 relative z-40">
        <div className="mx-auto w-[90%] max-w-4xl px-6">
          <h1 className="text-techblack dark:text-seasalt mb-8 text-5xl font-bold">
            Terms of Service
          </h1>
          <p className="text-graphite dark:text-seasalt mb-12 text-lg">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                1. Agreement to Terms
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                By accessing or using the services provided by Next Layer
                Consulting Ltd ("we", "our", or "us"), you agree to be bound by
                these Terms of Service. If you disagree with any part of these
                terms, you may not access our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                2. Services
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                Next Layer Consulting provides NetSuite consulting,
                implementation, customisation, and ongoing support services. The
                specific terms of each engagement will be detailed in a separate
                Statement of Work or Service Agreement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                3. Use of Website
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                You may use our website for lawful purposes only. You agree not
                to:
              </p>
              <ul className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed list-disc pl-6 space-y-2">
                <li>
                  Use the website in any way that violates any applicable law or
                  regulation
                </li>
                <li>
                  Attempt to gain unauthorised access to any portion of the
                  website
                </li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Transmit any viruses, malware, or other harmful code</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                4. Intellectual Property
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                The content, features, and functionality of our website and
                services are owned by Next Layer Consulting Ltd and are
                protected by copyright, trademark, and other intellectual
                property laws. You may not reproduce, distribute, or create
                derivative works without our express written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                5. Client Obligations
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                When engaging our services, you agree to:
              </p>
              <ul className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Cooperate with our team and provide timely feedback</li>
                <li>
                  Ensure you have the necessary rights and permissions for any
                  materials you provide to us
                </li>
                <li>
                  Pay all fees in accordance with the agreed payment terms
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                6. Payment Terms
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                Payment terms will be specified in your Service Agreement.
                Unless otherwise agreed, invoices are payable within 30 days of
                the invoice date. Late payments may incur interest charges and
                may result in suspension of services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                7. Confidentiality
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                We will maintain the confidentiality of any proprietary
                information disclosed to us during the course of our engagement.
                Both parties agree not to disclose confidential information to
                third parties without prior written consent.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                8. Limitation of Liability
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                To the fullest extent permitted by law, Next Layer Consulting
                Ltd shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of our
                services. Our total liability shall not exceed the fees paid by
                you for the specific services giving rise to the claim.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                9. Termination
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                Either party may terminate an engagement in accordance with the
                terms specified in the Service Agreement. Upon termination, you
                remain obligated to pay for all services rendered up to the
                termination date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                10. Governing Law
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                These Terms of Service are governed by and construed in
                accordance with the laws of England and Wales. Any disputes
                arising from these terms shall be subject to the exclusive
                jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                11. Changes to Terms
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                We reserve the right to modify these Terms of Service at any
                time. We will notify you of any changes by posting the new terms
                on this page and updating the "Last updated" date. Your
                continued use of our services after such changes constitutes
                acceptance of the new terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                12. Contact Us
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="text-graphite dark:text-seasalt text-lg leading-relaxed">
                <p className="mb-2">
                  <strong>Next Layer Consulting Ltd</strong>
                </p>
                <p className="mb-2">Email: hello@nextlayerconsulting.com</p>
                <p className="mb-2">Phone: +44 (0)1784 902 047</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
