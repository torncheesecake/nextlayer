import SEO from "../components/SEO";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how Next Layer Consulting collects, uses, and protects your personal information."
        path="/privacy"
      />
      <div className="bg-seasalt dark:bg-graphite min-h-screen py-20 transition-colors duration-300 relative z-40">
        <div className="mx-auto w-[90%] max-w-4xl px-6">
          <h1 className="text-techblack dark:text-seasalt mb-8 text-5xl font-bold">
            Privacy Policy
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
                1. Introduction
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                Next Layer Consulting Ltd ("we", "our", or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                2. Information We Collect
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                We may collect information about you in a variety of ways,
                including:
              </p>
              <ul className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Data:</strong> Name, email address, telephone
                  number, company name, and other contact information you
                  provide when enquiring about our services.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our
                  website, including IP address, browser type, pages visited,
                  and time spent on pages.
                </li>
                <li>
                  <strong>Cookies:</strong> We use cookies and similar tracking
                  technologies to track activity on our website and hold certain
                  information.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                3. How We Use Your Information
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                We use the information we collect in the following ways:
              </p>
              <ul className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed list-disc pl-6 space-y-2">
                <li>
                  To respond to your enquiries and provide customer support
                </li>
                <li>
                  To deliver our NetSuite consulting and implementation services
                </li>
                <li>
                  To send you marketing communications (with your consent)
                </li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                4. Data Retention
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                We will retain your personal information only for as long as is
                necessary for the purposes set out in this Privacy Policy. We
                will retain and use your information to the extent necessary to
                comply with our legal obligations, resolve disputes, and enforce
                our policies.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                5. Data Security
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                We implement appropriate technical and organisational security
                measures to protect your personal information. However, please
                note that no method of transmission over the Internet or
                electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                6. Your Data Protection Rights (UK GDPR)
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                Under UK GDPR, you have the following rights:
              </p>
              <ul className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed list-disc pl-6 space-y-2">
                <li>
                  <strong>Right to access:</strong> You have the right to
                  request copies of your personal data.
                </li>
                <li>
                  <strong>Right to rectification:</strong> You have the right to
                  request that we correct any information you believe is
                  inaccurate.
                </li>
                <li>
                  <strong>Right to erasure:</strong> You have the right to
                  request that we erase your personal data, under certain
                  conditions.
                </li>
                <li>
                  <strong>Right to restrict processing:</strong> You have the
                  right to request that we restrict the processing of your
                  personal data, under certain conditions.
                </li>
                <li>
                  <strong>Right to data portability:</strong> You have the right
                  to request that we transfer the data we have collected to
                  another organisation, or directly to you, under certain
                  conditions.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                7. Third-Party Services
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                We may use third-party service providers to help us operate our
                business and website or administer activities on our behalf.
                These third parties have access to your personal information
                only to perform specific tasks on our behalf and are obligated
                not to disclose or use it for any other purpose.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-techblack dark:text-seasalt mb-4 text-3xl font-bold">
                8. Contact Us
              </h2>
              <p className="text-graphite dark:text-seasalt mb-4 text-lg leading-relaxed">
                If you have any questions about this Privacy Policy or wish to
                exercise your data protection rights, please contact us at:
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
