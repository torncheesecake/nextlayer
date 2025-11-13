import { Blocks, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Tailored() {
  return (
    <section className="dark:bg-graphite bg-seasalt py-28 text-center transition-colors duration-300">
      <div className="container mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="text-techblack dark:text-seasalt mb-8 text-center text-5xl leading-[1.08] font-semibold">
          Services tailored for you
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group bg-seasalt dark:bg-graphite dark:border-seasalt flex flex-col items-center justify-start rounded-xl border px-8 py-8 shadow-lg transition-all duration-200 md:rounded-2xl">
            <div className="mb-4 flex h-20 w-full items-center justify-center">
              <img
                src="./src/assets/NetSuite-logo-half-light.png"
                alt="NetSuite"
                className="block h-20 w-auto transition-all dark:hidden"
              />
              <img
                src="./src/assets/NetSuite-logo-half-dark.png"
                alt="NetSuite"
                className="hidden h-20 w-auto transition-all dark:block"
              />
            </div>
            <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl font-bold h-16 flex items-center">
              NetSuite Implementation
            </h3>
            <p className="text-graphite dark:text-seasalt text-center text-lg grow">
              We fit NetSuite to your business, with workshops, go-live, and
              support all built for you.
            </p>
          </div>
          {/* Card 2 */}
          <div className="group bg-seasalt dark:bg-graphite border-biscay dark:border-seasalt flex flex-col items-center justify-start rounded-xl border px-8 py-8 shadow-lg transition-all duration-200 md:rounded-2xl">
            <div className="mb-4 flex h-20 w-full items-center justify-center">
              <Workflow className="text-bittersweet h-20 w-20" />
            </div>
            <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl font-bold h-16 flex items-center">
              Automation &amp; Dashboards
            </h3>
            <p className="text-graphite dark:text-seasalt text-center text-lg grow">
              Remove admin, get dashboards everyone trusts, and make decisions
              fast.
            </p>
          </div>
          {/* Card 3 */}
          <div className="group bg-seasalt dark:bg-graphite border-biscay dark:border-seasalt flex flex-col items-center justify-start rounded-xl border px-8 py-8 shadow-lg transition-all duration-200 md:rounded-2xl">
            <div className="mb-4 flex h-20 w-full items-center justify-center">
              <Blocks className="text-bittersweet h-20 w-20" />
            </div>
            <h3 className="text-graphite dark:text-seasalt mb-6 text-3xl font-bold h-16 flex items-center">
              Integration
            </h3>
            <p className="text-graphite dark:text-seasalt text-center text-lg grow">
              Connect ecommerce, finance, CRM and fulfilment—all your data in
              one place.
            </p>
          </div>
        </div>
        <div className="text-graphite dark:text-seasalt mt-12 text-lg">
          To learn more about our NetSuite services, visit our
          <Link
            to="/services"
            className="text-techblack dark:text-seasalt ml-1 underline transition dark:hover:text-blue-100"
          >
            Services page
          </Link>
          . <br /> For clear pricing and details on our OneSupport packages, see
          our
          <HashLink
            smooth
            to="/services#pricing"
            className="text-techblack dark:text-seasalt ml-1 underline transition dark:hover:text-blue-100"
          >
            Support pricing
          </HashLink>
          .
        </div>
      </div>
    </section>
  );
}
