import { Blocks, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export default function Tailored() {
  return (
    <section className="dark:bg-graphite bg-seasalt py-28 text-center transition-colors duration-300">
      <div className="container mx-auto w-[90%] max-w-7xl px-6">
        <h2 className="text-techblack dark:text-seasalt mb-12 text-center text-5xl leading-[1.08] font-semibold">
          Services tailored for you
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group bg-seasalt dark:bg-graphite dark:border-seasalt flex min-h-[370px] flex-col items-center justify-start rounded-xl border px-8 py-8 shadow-lg transition-all duration-200 md:rounded-2xl">
            <div className="mb-4 flex h-32 w-full flex-col items-center justify-center">
              <img
                src="./src/assets/NetSuite-logo-half-light.png"
                alt="NetSuite"
                className="mb-4 block h-auto w-auto transition-all dark:hidden"
              />
              <img
                src="./src/assets/NetSuite-logo-half-dark.png"
                alt="NetSuite"
                className="mb-4 hidden h-auto w-auto transition-all dark:block"
              />
            </div>
            <h3 className="text-graphite dark:text-seasalt mb-4 text-2xl font-bold">
              NetSuite Implementation
            </h3>
            <p className="text-graphite dark:text-seasalt text-center text-lg">
              We fit NetSuite to your business, with workshops, go-live, and
              support all built for you.
            </p>
          </div>
          {/* Card 2 */}
          <div className="group bg-seasalt dark:bg-graphite border-biscay dark:border-seasalt flex min-h-[370px] flex-col items-center justify-start rounded-xl border px-8 py-8 shadow-lg transition-all duration-200 md:rounded-2xl">
            <div className="mb-4 flex w-full items-center justify-center">
              <Workflow className="text-bittersweet h-20 w-20" />
            </div>
            <h3 className="text-graphite dark:text-seasalt mb-4 text-2xl font-bold">
              Automation &amp; Dashboards
            </h3>
            <p className="text-graphite dark:text-seasalt text-center text-lg">
              Remove admin, get dashboards everyone trusts, and make decisions
              fast.
            </p>
          </div>
          {/* Card 3 */}
          <div className="group bg-seasalt dark:bg-graphite border-biscay dark:border-seasalt flex min-h-[370px] flex-col items-center justify-start rounded-xl border px-8 py-8 shadow-lg transition-all duration-200 md:rounded-2xl">
            <div className="mb-4 flex h-32 w-full items-center justify-center">
              <Blocks className="text-bittersweet h-20 w-20" />
            </div>
            <h3 className="text-graphite dark:text-seasalt mb-4 text-2xl font-bold">
              Integration
            </h3>
            <p className="text-graphite dark:text-seasalt text-center text-lg">
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
